# ✅ TESTE RÁPIDO - STEVO LEITURA DIRETA

## 🎯 O que fazer agora:

---

## 1️⃣ CONFIGURAR STEVO

### Abra: stevo.chat → Agente Beatriz → Configurações

### Cole o Prompt:
- Abra: `PROMPT-BEATRIZ-SITE-DIRETO.md`
- Copie TUDO
- Cole em "System Prompt" ou "Instruções"

### Adicione URLs (RAG):

**⚠️ PRIMEIRO: Delete TODAS as URLs antigas!**

**DEPOIS: Adicione estas 7 URLs:**
```
https://www.danajalecos.com.br/masculino
https://www.danajalecos.com.br/feminino
https://www.danajalecos.com.br/dolmas
https://www.danajalecos.com.br/acessorios
https://www.danajalecos.com.br/infantil
https://www.danajalecos.com.br/jalecobox
https://www.danajalecos.com.br/office
```

### Configure Parâmetros:
- **Criatividade**: 0.0 (zero)
- **RAG**: ✅ Ativado
- **Temperatura**: 0.0 (se tiver)

---

## 2️⃣ TESTE 1 - Acesso Básico

### Pergunte:
```
Você consegue acessar o site da Jana Dalecos?
```

### ✅ Resposta Boa:
- "Sim, posso acessar https://www.danajalecos.com.br..."
- "Sim, acesso diretamente as páginas de categoria..."

### ❌ Resposta Ruim:
- "Não consigo acessar..."
- "Impossível conectar..."

---

## 3️⃣ TESTE 2 - Busca Simples Jaleco

### Pergunte:
```
jaleco masculino azul marinho
```

### ✅ Resposta PERFEITA:
```
Encontrei estas opções:

1. Jaleco Masculino Manoel Azul Marinho
   Preço: R$ 209,00
   Link: https://www.danajalecos.com.br/shop/jalecos/masculinos/manoel/jaleco-manoel-azul-marinho/

2. [Outro produto real com link real]
```

### ⚠️ Resposta PARCIAL (acessa mas não filtra):
```
Encontrei jalecos masculinos:
- Jaleco Branco
- Jaleco Azul Marinho  ← pegou!
- Jaleco Verde
```

### ❌ Resposta RUIM (inventa):
```
Jaleco Masculino Samuel Azul Marinho
Link: https://danajalecos.com.br/produto/jaleco-azul-123
       ↑ SEM WWW = INVENTADO
```

### ❌ Resposta PIOR (não acessa):
```
Impossível acessar o catálogo no momento...
```

---

## 4️⃣ TESTE 3 - Busca Scrub

### Pergunte:
```
scrub feminino rosa
```

### ✅ Resposta Boa:
- Lista scrubs femininos rosa do site real
- Links começam com https://www.danajalecos.com.br/shop/

### ❌ Resposta Ruim:
- Inventa cores que cliente não pediu
- Links sem /shop/ no caminho

---

## 5️⃣ TESTE 4 - Cor Inexistente

### Pergunte:
```
jaleco roxo
```

### ✅ Resposta IDEAL:
```
Não encontrei jaleco roxo no momento.
As cores disponíveis são: Branco, Azul Marinho, Verde, Preto.
Qual cor te interessa?
```

### ❌ Resposta RUIM:
```
Jaleco Roxo Modelo X
Link: [link inventado]
```

---

## 📊 ANÁLISE DOS RESULTADOS

### ✅ SUCESSO TOTAL:
Se Stevo:
- Acessa o site
- Lista produtos REAIS
- Links começam com https://www.danajalecos.com.br/shop/
- Preços correspondem ao site
- Filtra por cor corretamente

**→ Abordagem funciona! Expandir catálogo.**

---

### ⚠️ SUCESSO PARCIAL:
Se Stevo:
- Acessa o site
- Lista produtos mas NÃO filtra por cor
- Ou mostra muitos produtos de uma vez

**→ Ajustar prompt para filtrar melhor.**

---

### ❌ FALHA TÉCNICA:
Se Stevo:
- "Impossível acessar o catálogo"
- Não consegue ler a página

**→ Site é React, Stevo não executa JavaScript.**

**Solução:**
Criar proxy SSR que renderiza página e retorna HTML estático.

---

### ❌ FALHA DE ALUCINAÇÃO:
Se Stevo:
- Acessa o site
- Mas INVENTA links (troca cores, adiciona números)

**→ Problema no modelo de IA, não na configuração.**

**Solução:**
Usar abordagem estruturada (API JSON) em vez de scraping HTML.

---

## 🔄 PRÓXIMOS PASSOS

### Se funcionou (✅):
1. Expandir teste para mais produtos
2. Testar todas as categorias (feminino, acessórios, etc.)
3. Refinar filtros (por tamanho, por modelo)
4. Adicionar paginação (próximos resultados)

### Se falhou tecnicamente (⚠️):
1. Verificar: Stevo executa JavaScript?
2. Criar endpoint proxy SSR
3. Testar com HTML estático renderizado

### Se falhou por alucinação (❌):
1. Testar criatividade ainda menor (se possível)
2. Adicionar mais exemplos de links corretos no prompt
3. Considerar API estruturada (JSON) vs scraping HTML

---

## 🆘 PLANO B - SE NÃO FUNCIONAR

### Criar Proxy SSR:

#### `/api/render-categoria.js`:
```javascript
import puppeteer from 'puppeteer';

export default async function handler(req, res) {
  const { categoria } = req.query; // masculino, feminino, etc.
  
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  
  await page.goto(`https://www.danajalecos.com.br/${categoria}`);
  await page.waitForSelector('#search-area ul li'); // Espera produtos
  
  const html = await page.content(); // HTML COMPLETO renderizado
  
  await browser.close();
  
  res.status(200).send(html);
}
```

#### Usar no Stevo:
```
https://dreitte.vercel.app/api/render-categoria?categoria=masculino
```

Stevo lê HTML já renderizado (com produtos visíveis).

---

## 📞 RELATAR RESULTADO

### Depois de testar, anote:

1. **Stevo conseguiu acessar o site?** (Sim/Não)

2. **Stevo listou produtos?** (Sim/Não)

3. **Links estão corretos?** (Sim/Não)

4. **Stevo filtrou por cor?** (Sim/Não/Parcialmente)

5. **Screenshot da conversa** (para análise)

---

## 🎯 OBJETIVO FINAL

Beatriz deve:
1. Perguntar nome do cliente
2. Entender o que cliente quer
3. Acessar categoria correta do site
4. Ler produtos disponíveis
5. Filtrar por cor/modelo/tamanho
6. Retornar 2-3 opções com links reais
7. NUNCA inventar produtos ou links

---

**Boa sorte! 🚀**

Qualquer problema, consulte:
- `PROMPT-BEATRIZ-SITE-DIRETO.md` - Prompt completo
- `CONFIGURACAO-STEVO-SITE-DIRETO.md` - Instruções detalhadas
- `ELEMENTOS-HTML-SITE.md` - Estrutura técnica do HTML
