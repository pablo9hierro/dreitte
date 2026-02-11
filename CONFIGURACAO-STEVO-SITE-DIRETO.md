# 🔧 CONFIGURAÇÃO STEVO - LEITURA DIRETA DO SITE

## ✅ Abordagem: Acessar site real da Jana Dalecos

---

## 📋 PASSO A PASSO

### 1. Abrir Configurações do Agente Beatriz
- Entre em stevo.chat
- Selecione o agente "Beatriz"
- Clique em ⚙️ Configurações

---

### 2. Sistema Prompt (Instruções)
Cole o conteúdo do arquivo: **PROMPT-BEATRIZ-SITE-DIRETO.md**

---

### 3. Sites e URLs (RAG)

**⚠️ IMPORTANTE: REMOVA todas as URLs antigas!**

Depois adicione estas 7 URLs:

```
https://www.danajalecos.com.br/masculino
https://www.danajalecos.com.br/feminino
https://www.danajalecos.com.br/dolmas
https://www.danajalecos.com.br/acessorios
https://www.danajalecos.com.br/infantil
https://www.danajalecos.com.br/jalecobox
https://www.danajalecos.com.br/office
```

### Por que estas URLs?
- São as páginas de CATEGORIA do site real
- Cada uma lista produtos disponíveis
- Stevo vai ler o HTML e extrair informações

---

### 4. Parâmetros do Agente

Configure:
- **Nome**: Beatriz
- **Descrição**: Assistente de vendas Jana Dalecos - Leitura direta do catálogo online
- **Criatividade**: **0.0** (ZERO ABSOLUTO)
- **Temperatura**: **0.0** (se disponível)
- **RAG (Sites e URLs)**: ✅ **ATIVADO**

---

### 5. Remover Configurações Antigas

**Deletar:**
- ❌ Arquivos JSON anexados (jaleco.json, scrub.json, etc.)
- ❌ URLs do dreitte.vercel.app (/catalogo, /api/catalogo-simples)
- ❌ Custom Tools (se tiver)

**Por quê?**
- Evita confusão entre múltiplas fontes de dados
- Foco APENAS no site real

---

## 🧪 TESTE INICIAL

### Teste 1 - Verificar Acesso:
```
Você: Oi
Beatriz: [Should ask for name]

Você: Pablo
Beatriz: Olá Pablo! Sou a Beatriz...

Você: consegue acessar o catálogo?
Beatriz: [Should say yes and explain she reads from danajalecos.com.br]
```

### Teste 2 - Busca Simples:
```
Você: jaleco masculino azul marinho
Beatriz: [Should access /masculino and list products]
```

**✅ Resultado Esperado:**
- Nome do produto real (ex: "Jaleco Masculino Manoel Azul Marinho")
- Link real começando com https://www.danajalecos.com.br/shop/
- Preço real do site

**❌ Resultado Ruim:**
- "Impossível acessar o catálogo"
- Link inventado (ex: danajalecos.com.br/produto/jaleco-azul-123)
- "Deixa eu buscar..." mas não retorna nada

---

## 🔍 VALIDAÇÃO - O que o Stevo DEVE fazer

### Quando cliente pede produto:

1. **Identificar categoria**:
   - "jaleco masculino" → /masculino
   - "scrub feminino" → /feminino
   - "gorro" → /acessorios

2. **Acessar URL correta**:
   - Stevo vai fazer request para danajalecos.com.br

3. **Ler HTML**:
   - Procurar `#search-area`
   - Encontrar `.pesquisa-produtos`
   - Listar elementos `<li>` de produtos

4. **Extrair dados**:
   - Nome: texto do produto
   - Link: atributo `href` do `<a>`
   - Preço: elemento com "R$"

5. **Filtrar por cor/modelo**:
   - Cliente pediu "azul" → mostrar só produtos com "azul" no nome

6. **Retornar ao cliente**:
   - Máximo 3 produtos
   - Com links EXATOS copiados do site

---

## ⚠️ PROBLEMAS POSSÍVEIS

### ❌ "Impossível acessar o catálogo"

**Causas possíveis:**
1. Site da Jana Dalecos bloqueando bot do Stevo
2. Stevo não consegue ler JavaScript (site é React)
3. Timeout na requisição

**Soluções:**
- **Plano B**: Usar páginas estáticas se existirem
- **Plano C**: Voltar para abordagem de catálogo simplificado (dreitte.vercel.app)
- **Plano D**: Criar API intermediária que retorna dados do site

### ❌ Stevo retorna produtos mas inventa links

**Causa:**
- Stevo está "aprendendo" padrões de URL e gerando variações

**Solução:**
- Reforçar no prompt: "NUNCA gere links, SEMPRE copie"
- Adicionar exemplos de links CORRETOS vs ERRADOS
- Reduzir criatividade para 0.0

### ❌ Stevo não filtra por cor

**Causa:**
- Não está lendo corretamente os nomes dos produtos

**Solução:**
- Ensinar seletores CSS específicos para o título
- Adicionar exemplos de filtragem no prompt

---

## 📊 MONITORAMENTO

### Logs para Verificar:

1. **Acesso às URLs**:
   - Stevo está fazendo requests para danajalecos.com.br?
   - Recebe 200 OK ou erro?

2. **Parsing do HTML**:
   - Consegue encontrar `#search-area`?
   - Consegue ler elementos `<li>`?

3. **Qualidade dos Links**:
   - Links começam com https://www.danajalecos.com.br?
   - Ou estão começando com https://danajalecos.com.br (SEM www)?
   - Ou são inventados?

### Ferramentas:
- Stevo pode ter log interno de acesso à RAG
- Pedir ao Stevo: "você acessou alguma página para buscar isso?"

---

## 🎯 CRITÉRIOS DE SUCESSO

### ✅ Configuração está correta se:
1. Stevo diz que vai buscar no site da Jana Dalecos
2. Retorna produtos reais com nomes reais
3. Links começam com https://www.danajalecos.com.br/shop/
4. Preços correspondem aos preços reais do site
5. Quando não encontra, admite em vez de inventar

### ❌ Configuração falhou se:
1. "Impossível acessar o catálogo"
2. Inventa links (ex: troca "azul" por "verde" no URL)
3. Retorna produtos que não existem
4. Não consegue filtrar por cor/modelo
5. Demora muito para responder (timeout)

---

## 🔄 ALTERNATIVAS

### Se esta abordagem NÃO funcionar:

1. **Site intermediário estático**:
   - Usar dreitte.vercel.app/catalogo
   - HTML puro, sem JavaScript
   - Stevo consegue ler mais facilmente

2. **API de busca**:
   - Criar endpoint /api/busca?produto=jaleco&cor=azul
   - Retorna JSON com produtos
   - Stevo chama API em vez de ler HTML

3. **Pages Server-Side Rendered**:
   - Criar páginas Next.js que fazem server-side rendering
   - HTML já vem pronto (sem JavaScript)
   - Ex: dreitte.vercel.app/produtos/jaleco-masculino-azul

4. **Integração direta**:
   - Se Jana Dalecos tiver API, usar ela
   - Stevo Custom Tools se conecta à API

---

## 📝 OBSERVAÇÕES

### Sobre o site danajalecos.com.br:
- É um site **React** (JavaScript pesado)
- Usa **vitrine-react-app** para renderizar produtos
- Produtos carregam dinamicamente
- Pode ser difícil para scrapers simples

### Capacidades do Stevo:
- **Se Stevo executa JavaScript**: Vai funcionar
- **Se Stevo só lê HTML estático**: Vai ver página vazia (produtos não carregam)
- **Se Stevo faz scraping avançado**: Pode funcionar

### Este teste vai responder:
- Stevo consegue ler sites React?
- Stevo executa JavaScript do navegador?
- Ou Stevo é scraper básico (curl/wget style)?

---

## 🚀 PRÓXIMOS PASSOS

1. ✅ Configurar Stevo com novo prompt
2. ✅ Adicionar 7 URLs do site real
3. ✅ Remover URLs antigas e arquivos JSON
4. 🧪 Testar: "jaleco masculino azul"
5. 📊 Analisar resultado:
   - ✅ Funcionou? → Expandir para mais produtos
   - ❌ Não funcionou? → Testar alternativas

---

**Data**: 10/02/2026
**Abordagem**: Leitura direta do site real (web scraping)
**Status**: Em teste - descobrindo capacidades do Stevo
