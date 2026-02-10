# 🔍 RASTREAMENTO REVERSO - Como o Stevo Lê o Site?

## 🎯 OBJETIVO

Mapear EXATAMENTE como o Stevo.chat acessa e lê o catálogo HTML para:
1. Entender se executa JavaScript ou só lê HTML puro
2. Identificar quais elementos HTML ele consegue acessar
3. Ver se processa data-attributes corretamente
4. Descobrir se há limitações de parsing ou interpretação

---

## 🚀 SISTEMA DE RASTREAMENTO IMPLEMENTADO

### 3 Níveis de Tracking:

#### 1️⃣ **Pixel Transparente (Sempre Funciona)**
```html
<img src="/api/tracking-pixel?source=catalogo-stevo">
```
- Carrega automaticamente quando página abre
- **Funciona SEM JavaScript**
- Registra: User-Agent, IP, Referer, Timestamp
- Confirma que Stevo ACESSOU a página

#### 2️⃣ **JavaScript Avançado (Se Stevo executar)**
```javascript
<script>
  // Envia POST para /api/log-acesso com:
  - Tamanho da janela
  - Quantidade de elementos encontrados (.produto, .produto-link)
  - Produtos visíveis no viewport
  - Amostra de data-attributes lidos
  - User-Agent, URL, document.readyState
</script>
```
- **Só executa se Stevo rodar JavaScript**
- Se receber log = Stevo executa JS
- Se NÃO receber = Stevo só lê HTML puro

#### 3️⃣ **Marcadores Invisíveis (Teste de Parsing)**
```html
<div id="marcador-inicio" style="display:none;">MARCADOR_INICIO</div>
<div id="marcador-fim" style="display:none;">MARCADOR_FIM</div>
```
- Elementos HTML invisíveis em posições estratégicas
- Se Stevo "ver" eles = está lendo TODO o HTML
- Se não "ver" = parsing limitado

---

## 📊 COMO MONITORAR OS LOGS

### Endpoint de Visualização:
```
https://dreitte.vercel.app/api/ver-logs
```

**Esta página mostra:**
- ✅ Todos os acessos do Stevo
- ✅ User-Agent (saber se é bot, browser, scraper)
- ✅ Timestamps de cada acesso
- ✅ Se JavaScript foi executado ou não
- ✅ Quantos produtos foram encontrados
- ✅ Quais data-attributes foram lidos
- ✅ Auto-refresh a cada 10 segundos

---

## 🧪 COMO TESTAR

### Passo 1: Deploy
```bash
git add .
git commit -m "adiciona sistema de rastreamento reverso"
git push
```

### Passo 2: Acessar Logs
Abra no navegador:
```
https://dreitte.vercel.app/api/ver-logs
```

### Passo 3: Testar com Stevo
No Stevo, configure a URL:
```
https://dreitte.vercel.app/api/catalogo-stevo
```

Faça uma pergunta qualquer:
```
"jaleco masculino amarelo"
```

### Passo 4: Verificar Logs
Recarregue `/api/ver-logs` e veja:

**✅ SE APARECER LOG DE PIXEL:**
- Stevo ACESSOU a página

**✅ SE APARECER LOG DE JAVASCRIPT:**
- Stevo EXECUTA JavaScript
- Ver quantos produtos ele encontrou
- Ver se leu data-attributes corretamente

**❌ SE NÃO APARECER NADA:**
- Stevo NÃO está acessando a URL corretamente
- Verificar configuração "Sites e URLs" no Stevo

---

## 🔍 DIAGNÓSTICO POR CENÁRIO

### Cenário 1: Nenhum log
**Problema:** Stevo não está acessando a URL
**Solução:** Verificar configuração RAG > Sites e URLs

### Cenário 2: Só log de pixel (sem JavaScript)
**Problema:** Stevo faz scraping puro, não executa JS
**Solução:** Tudo deve estar em HTML puro, sem dependência de JavaScript

### Cenário 3: Log JavaScript mas 0 produtos encontrados
**Problema:** Stevo não consegue parsear a estrutura HTML
**Solução:** Simplificar HTML, remover estilos complexos

### Cenário 4: Log JavaScript com produtos encontrados mas links errados
**Problema:** Stevo lê mas interpreta mal os links
**Solução:** Tornar links mais explícitos, adicionar texto âncora

---

## 📁 ARQUIVOS CRIADOS

```
/pages/api/log-acesso.js       → Recebe POST com dados JS
/pages/api/tracking-pixel.js   → Pixel transparente 1x1
/pages/api/ver-logs.js         → Visualiza logs coletados
/logs/acesso.log              → Logs JavaScript (git ignored)
/logs/tracking.log            → Logs pixel (git ignored)
```

---

## 🎯 PRÓXIMOS PASSOS

Após analisar logs:

1. **Se Stevo não executa JS:**
   - Garantir que TUDO está visível em HTML puro
   - Remover dependências de JavaScript

2. **Se Stevo lê mas inventa links:**
   - Tornar links mais explícitos
   - Adicionar redundância (link no texto + href)

3. **Se Stevo não encontra produtos:**
   - Simplificar estrutura HTML
   - Testar estrutura alternativa (tabela? lista?)

4. **Se Stevo lê tudo correto mas ainda erra:**
   - Problema é no prompt, não na página
   - Revisar instruções do system prompt

---

## 🛠️ DEBUGGING AVANÇADO

### Ver logs direto no servidor (se tiver acesso SSH):
```bash
cat logs/acesso.log | jq .
cat logs/tracking.log | jq .
```

### Limpar logs para novo teste:
```bash
rm logs/*.log
```

### Testar localmente:
```bash
npm run dev
# Abrir: http://localhost:3000/api/ver-logs
# Abrir: http://localhost:3000/api/catalogo-stevo
```

---

**Agora você tem visibilidade TOTAL de como o Stevo acessa sua página! 🔍**
