# 🚀 CONFIGURAÇÃO FINAL - Stevo com Base HTML

## ✅ DEPLOY CONCLUÍDO!

**URL da Base de Dados:** 
```
https://dreitte.vercel.app/catalogo
```

Ou:
```
https://dreitte.vercel.app/api/catalogo-simples
```

---

## 📝 PASSO A PASSO NO STEVO

### 1️⃣ Abrir Configurações do Agente Beatriz

No Stevo.chat, vá em:
- **Agentes** → **Beatriz** → **Configurações**

---

### 2️⃣ Configurar System Prompt

Cole o prompt de [PROMPT-BEATRIZ-HTML-SIMPLIFICADO.md](PROMPT-BEATRIZ-HTML-SIMPLIFICADO.md)

**Resumo do que está no prompt:**
- Como usar a página HTML como base de dados
- Buscar usando data-tipo, data-genero, data-cor
- Copiar links EXATOS do href
- Atendimento humanizado com captura de nome

---

### 3️⃣ Configurar RAG - Sites e URLs

**IMPORTANTE:** Use "Sites e URLs" ao invés de anexar arquivos JSON!

1. Clique na aba **"Documentos RAG"**
2. Clique em **"Sites e URLs"** (opção que está circulada na sua imagem)
3. Cole esta URL:
   ```
   https://dreitte.vercel.app/api/catalogo-stevo
   ```
4. Clique em **"Adicionar"**

---

### 4️⃣ Configurações Gerais

- **Criatividade:** `0.0` (ZERO - não pode inventar)
- **RAG:** `ON` (ligado)
- **Tools:** `OFF` (desligado)

---

### 5️⃣ Salvar

Clique em **"Salvar"** para aplicar as mudanças.

---

## 🧪 TESTES PARA FAZER

### Teste 1: Jaleco Masculino Amarelo
```
Você: Oi
Beatriz: [Pede seu nome]
Você: Pablo
Beatriz: [Saudação]
Você: jaleco masculino amarelo
```

**✅ SUCESSO SE:**
- Beatriz retorna um link que existe no catálogo
- Link funciona (não dá 404)
- NÃO fica dizendo "Deixa eu buscar..." sem retornar

**❌ FALHA SE:**
- Link dá 404
- Link inventado/montado pela IA
- Não retorna produto
- Fica em loop "buscando..."

---

### Teste 2: Scrub Masculino Verde
```
Você: scrub masculino verde
```

**✅ SUCESSO SE:**
- Beatriz retorna link que funciona
- Link existe no catálogo HTML

---

### Teste 3: Produto Inexistente
```
Você: jaleco roxo
```

**✅ SUCESSO SE:**
- Beatriz diz: "No momento não temos... [oferece alternativas]"
- NÃO inventa um link

---

## 🎯 COMO FUNCIONA (EXPLICAÇÃO)

### A Página HTML Contém:

1. **Tutorial no topo** (dentro de `<div id="tutorial-stevo">`)
   - Explica para a IA como usar a página
   - Exemplos de busca
   - Regras de validação de links

2. **Catálogo estruturado** (25 produtos de exemplo)
   ```html
   <div class="produto" data-tipo="jaleco" data-genero="masculino" data-cor="amarelo">
     <h3 class="produto-nome">Jaleco Masculino Samuel Amarelo</h3>
     <a class="produto-link" href="https://www.danajalecos.com.br/shop/...">Ver produto</a>
   </div>
   ```

3. **Data attributes** para filtro fácil:
   - `data-tipo`: jaleco, scrub, gorro, avental
   - `data-genero`: masculino, feminino, unissex
   - `data-cor`: amarelo, azul, verde, branco, rosa, preto, etc

### O Prompt Ensina:

- Como acessar `https://dreitte.vercel.app/api/catalogo-stevo`
- Buscar elementos `<div class="produto">` com os data-attributes corretos
- Ler o nome do `.produto-nome`
- Copiar o link EXATO do `.produto-link href`
- Validar que link começa com `https://www.danajalecos.com.br/shop/`

---

## 🔧 MANUTENÇÃO / ADICIONAR PRODUTOS

Para adicionar mais produtos, edite:
```
/pages/api/catalogo-stevo.js
```

Adicione novos blocos HTML:
```html
<div class="produto" data-tipo="TIPO" data-genero="GENERO" data-cor="COR" data-sku="SKU">
  <h3 class="produto-nome">NOME DO PRODUTO</h3>
  <p class="produto-info">Tipo: TIPO | Gênero: GENERO | Cor: COR | SKU: SKU</p>
  <a class="produto-link" href="LINK_EXATO_DO_PRODUTO">Ver produto</a>
</div>
```

Depois: `git push` → Vercel faz deploy automático

---

## 🎉 VANTAGENS DESTA SOLUÇÃO

✅ **Uma URL única** - Stevo acessa via "Sites e URLs"
✅ **Tutorial embutido** - IA aprende lendo a própria página
✅ **HTML nativo** - IA lê HTML melhor que JSON puro
✅ **Data attributes** - Filtro fácil e preciso
✅ **Links exatos** - Copiados direto do href
✅ **Escalável** - Adicionar produtos = adicionar divs
✅ **Atualização automática** - Git push → Deploy → Stevo lê nova versão

---

## 🔴 PROBLEMAS COMUNS E SOLUÇÕES

### Problema 1: "Deixa eu buscar..." mas não retorna
**Solução:** Criatividade precisa estar em 0.0

### Problema 2: Link inventado / Link dá 404
**Causa:** IA está "aprendendo" estrutura de URLs e montando links
**Solução:** 
- Prompt atualizado: NUNCA ensine estrutura de URLs
- IA deve APENAS copiar href exato do HTML
- Criatividade = 0.0
- Prompt diz: "Você NÃO sabe como links são formados"

### Problema 3: Não encontra produtos
**Solução:** Verificar se URL foi adicionada corretamente: `https://dreitte.vercel.app/api/catalogo-stevo`

### Problema 4: Ignora a página HTML
**Solução:** Usar "Sites e URLs" (não usar arquivos JSON anexados)

### Problema 5: Primeiro link correto, depois inventa
**Causa:** IA viu o padrão do primeiro link e começou a montar novos
**Solução:** Prompt atualizado com "SEMPRE pesquise no catálogo, NUNCA use memória de pesquisas anteriores"

---

## 📊 PRODUTOS DISPONÍVEIS (MVP)

- **Jalecos:** 13 produtos (masculinos, femininos)
- **Scrubs:** 7 produtos (masculinos, femininos)  
- **Gorros:** 3 produtos (unissex)
- **Aventais:** 2 produtos (unissex)
- **Total:** 25 produtos

Para catálogo completo (467 produtos), expandir o arquivo `catalogo-stevo.js`

---

## 🚀 PRÓXIMOS PASSOS (OPCIONAL)

1. Adicionar todos os 467 produtos no HTML
2. Criar script automático para gerar HTML a partir dos JSONs
3. Adicionar imagens dos produtos
4. Adicionar preços
5. Adicionar filtros adicionais (tamanho, modelo, etc)

---

**Agora é só configurar no Stevo e testar! 🎯**
