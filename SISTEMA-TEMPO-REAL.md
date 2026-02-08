# 🔄 Sistema de Atualização Automática em Tempo Real

## Como Funciona

```
┌─────────────────────┐
│ Site Dana Jalecos   │
│ (novos produtos)    │
└──────────┬──────────┘
           │
           ↓ Scraping
┌─────────────────────┐
│ Seu Script Python   │
│ ou Node.js          │
└──────────┬──────────┘
           │
           ↓ Atualiza JSON
┌─────────────────────┐
│ public/jaleco.json  │
│ public/scrub.json   │
│ etc...              │
└──────────┬──────────┘
           │
           ↓ API lê automaticamente
┌─────────────────────┐
│ /api/catalogo-texto │
│ (retorna TXT puro)  │
└──────────┬──────────┘
           │
           ↓ RAG lê URL
┌─────────────────────┐
│ Stevo (Jana)        │
│ Responde clientes   │
└─────────────────────┘
```

---

## 🎯 Configuração no Stevo

### 1. Adicione URL no RAG

No Stevo, em vez de fazer upload de arquivo:
- Vá em: **RAG → Sites/URLs**
- Adicione: `https://dreitte.vercel.app/api/catalogo-texto`
- Aguarde indexação

### 2. Por Que Essa URL Funciona?

**Diferença crítica:**

| URL | Tipo | RAG lê bem? |
|-----|------|-------------|
| `/catalogo` | Página HTML | ❌ Parcial |
| `/api/catalogo-texto` | Texto puro | ✅ 100% |

A API retorna **texto puro simples**, sem tags HTML, sem formatação complexa. RAG adora isso.

---

## 🤖 Seu Script de Scraping

### Fluxo do Scraping

1. **Acesse site Dana Jalecos**
   ```python
   produtos_site = scrape('danajalecos.com.br/shop/jalecos/')
   ```

2. **Compare com JSON atual**
   ```python
   produtos_existentes = ler_json('public/jaleco.json')
   produtos_novos = []
   
   for produto in produtos_site:
       if produto['sku'] not in produtos_existentes:
           produtos_novos.append(produto)
   ```

3. **Adicione produtos novos**
   ```python
   # Determinar gênero, cor, etc
   genero = detectar_genero(produto['nome'])
   cor = detectar_cor(produto['nome'])
   
   # Adicionar na estrutura certa
   jaleco_data[genero]['cadaCor'][cor].append({
       'sku': produto['sku'],
       'nome': produto['nome'],
       'link': produto['url']
   })
   ```

4. **Salve o JSON**
   ```python
   salvar_json('public/jaleco.json', jaleco_data)
   ```

5. **Commit e push**
   ```bash
   git add public/jaleco.json
   git commit -m "adicionar produtos novos"
   git push
   ```

6. **Vercel faz deploy automaticamente**
   - Deploy demora ~30 segundos
   - API `/api/catalogo-texto` já retorna dados novos
   - Stevo vê automaticamente (próxima consulta)

---

## ⚙️ Estrutura dos Arquivos JSON

Quando adicionar produto novo, siga essa estrutura:

```json
{
  "metadata": {
    "tipoProduto": "Jaleco",
    "totalProdutos": 210
  },
  "masculino": {
    "cadaCor": {
      "Verde": [
        {
          "sku": "991-SD-058-000",
          "nome": "Jaleco Masculino Samuel Manga Longa Verde Claro",
          "link": "https://www.danajalecos.com.br/jaleco-masculino-samuel-manga-longa-verde-claro"
        }
      ]
    }
  }
}
```

**Campos obrigatórios:**
- `sku` - Código do produto
- `nome` - Nome completo (inclui tipo + genero + modelo + cor)
- `link` - URL completa do produto

**Organização:**
- Por **gênero**: masculino, feminino, unissex
- Dentro de `cadaCor` por **cor**: Verde, Azul, Branco, etc.

---

## 🔍 Como Detectar Informações do Produto

### Detectar Gênero

```javascript
function detectarGenero(nome) {
  if (nome.includes('Masculino')) return 'masculino';
  if (nome.includes('Feminino')) return 'feminino';
  return 'unissex';
}
```

### Detectar Cor

```javascript
function detectarCor(nome, link) {
  const cores = {
    'verde': 'Verde',
    'azul': 'Azul',
    'amarelo': 'Amarelo',
    'branco': 'Branco',
    'preto': 'Preto',
    // ... adicione todas as cores
  };
  
  const nomeLower = nome.toLowerCase();
  for (const [chave, valor] of Object.entries(cores)) {
    if (nomeLower.includes(chave)) return valor;
  }
  
  return 'Sem Cor';
}
```

### Detectar Tipo de Produto

```javascript
function detectarTipoProduto(link) {
  if (link.includes('/jalecos/')) return 'jaleco';
  if (link.includes('/scrubs/')) return 'scrub';
  if (link.includes('/gorros/')) return 'gorro';
  // ... etc
}
```

---

## 🚀 Exemplo Completo de Script

```javascript
const puppeteer = require('puppeteer');
const fs = require('fs');

async function scrapeDanaJalecos() {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  
  // 1. Acesse a página
  await page.goto('https://www.danajalecos.com.br/shop/jalecos/');
  
  // 2. Extraia produtos
  const produtos = await page.evaluate(() => {
    return Array.from(document.querySelectorAll('.produto')).map(el => ({
      sku: el.querySelector('.sku').textContent,
      nome: el.querySelector('.nome').textContent,
      link: el.querySelector('a').href
    }));
  });
  
  // 3. Carregue JSON existente
  const jalecoData = require('./public/jaleco.json');
  const skusExistentes = new Set();
  
  Object.values(jalecoData.masculino.cadaCor).forEach(cores => {
    cores.forEach(p => skusExistentes.add(p.sku));
  });
  
  // 4. Encontre produtos novos
  const novos = produtos.filter(p => !skusExistentes.has(p.sku));
  
  // 5. Adicione produtos novos
  novos.forEach(produto => {
    const genero = detectarGenero(produto.nome);
    const cor = detectarCor(produto.nome);
    
    if (!jalecoData[genero].cadaCor[cor]) {
      jalecoData[genero].cadaCor[cor] = [];
    }
    
    jalecoData[genero].cadaCor[cor].push(produto);
  });
  
  // 6. Atualize total
  let total = 0;
  Object.values(jalecoData).forEach(genero => {
    if (genero.cadaCor) {
      Object.values(genero.cadaCor).forEach(cor => {
        total += cor.length;
      });
    }
  });
  jalecoData.metadata.totalProdutos = total;
  
  // 7. Salve
  fs.writeFileSync(
    './public/jaleco.json',
    JSON.stringify(jalecoData, null, 2)
  );
  
  console.log(`✅ ${novos.length} produtos novos adicionados!`);
  
  await browser.close();
}

// Execute
scrapeDanaJalecos();
```

---

## 📅 Automação

### Opção 1: Cron Job (GitHub Actions)

Crie `.github/workflows/scrape.yml`:

```yaml
name: Scrape Dana Jalecos

on:
  schedule:
    - cron: '0 */6 * * *'  # A cada 6 horas
  workflow_dispatch:  # Permite executar manualmente

jobs:
  scrape:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      - uses: actions/setup-node@v3
      - run: npm install
      - run: node scrape.js
      - name: Commit e Push
        run: |
          git config --local user.email "action@github.com"
          git config --local user.name "GitHub Action"
          git add public/*.json
          git commit -m "atualizar catalogo [bot]" || exit 0
          git push
```

### Opção 2: Servidor Próprio

```javascript
// server.js
const cron = require('node-cron');

// Executa a cada 6 horas
cron.schedule('0 */6 * * *', async () => {
  console.log('🤖 Iniciando scraping...');
  await scrapeDanaJalecos();
  console.log('✅ Scraping concluído!');
});
```

---

## ✅ Checklist de Deploy

- [ ] Arquivo `pages/api/catalogo-texto.js` criado
- [ ] Commit e push para GitHub
- [ ] Vercel fez deploy (aguarde ~30 seg)
- [ ] Teste: `https://dreitte.vercel.app/api/catalogo-texto`
- [ ] Configure URL no Stevo RAG
- [ ] Aguarde indexação do Stevo (30-60 seg)
- [ ] Teste no chat: "jaleco feminino amarelo"

---

## 🎯 Vantagens Desse Sistema

✅ **Tempo real**: Quando JSON atualiza → API atualiza → Stevo vê  
✅ **Automático**: Não precisa fazer nada manual  
✅ **Escalável**: Adicione quantos produtos quiser  
✅ **Simples**: Só atualizar os JSON  
✅ **Confiável**: Texto puro = RAG lê 100%  

---

## ⚠️ Importante

**Frequência de Atualização do RAG no Stevo:**

O Stevo não lê a URL em tempo real a cada mensagem. Ele indexa periodicamente (pode ser a cada hora, ou quando você forçar re-indexação).

**Se precisar que Stevo veja mudanças mais rápido:**
1. Vá nas configurações do RAG
2. Force "Re-indexar" ou "Atualizar documento"
3. Ou espere o intervalo automático do Stevo

---

## 🚀 Próximos Passos

1. Commit e push do arquivo `/api/catalogo-texto.js`
2. Teste a URL no navegador
3. Configure no Stevo
4. Crie seu script de scraping
5. Configure automação (GitHub Actions ou cron)

Pronto! Sistema 100% automático. 🎉
