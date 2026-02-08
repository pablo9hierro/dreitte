# 🔍 Como Configurar Tool de DEBUG no Stevo.chat

## 📋 OBJETIVO

Descobrir exatamente como o Stevo.chat envia dados para as Tools:
- Qual estrutura de dados?
- Quais headers?
- Query params ou body?
- Formato JSON?

---

## 🛠️ PASSO A PASSO

### 1️⃣ Deploy do Endpoint de Debug

**URL do endpoint:**
```
https://dreitte.vercel.app/api/debug-tool
```

✅ **Já está no ar!** (após fazer push do código)

Este endpoint aceita:
- ✅ GET
- ✅ POST
- ✅ PUT
- ✅ DELETE
- ✅ PATCH
- ✅ Qualquer método HTTP

E loga **TUDO** no console do Vercel.

---

### 2️⃣ Configurar Tool no Stevo.chat

**Abra a tela de "Custom Tools" no Stevo e preencha:**

#### 📝 Informações Básicas

**Nome da Tool:**
```
debug_stevo
```

**Descrição (o que a IA lê):**
```
Ferramenta de debug para testar comunicação com API externa. Use esta tool quando o usuário pedir "teste a tool" ou "debug".
```

**Timeout (ms):**
```
10000
```

---

#### 🔧 Configuração HTTP

**Método:**
```
POST
```
(Selecione no dropdown)

**URL do Endpoint:**
```
https://dreitte.vercel.app/api/debug-tool
```

---

#### 🔑 Headers (opcional - teste com e sem)

**TESTE 1 - SEM HEADERS:**
Deixe vazio

**TESTE 2 - COM HEADERS:**
```
Authorization: Bearer test-token-12345
Content-Type: application/json
```

Para adicionar:
1. Clique no botão `+` ao lado de "Headers"
2. Campo 1 (key): `Authorization`
3. Campo 2 (value): `Bearer test-token-12345`
4. Clique `+` novamente para adicionar outro
5. Campo 1: `Content-Type`
6. Campo 2: `application/json`

---

#### 🔍 Query Params (opcional - teste com e sem)

**TESTE 1 - SEM QUERY PARAMS:**
Deixe vazio

**TESTE 2 - COM QUERY PARAMS:**
```
test: {{termo_teste}}
```

Para adicionar:
1. Clique no botão `+` ao lado de "Query Params"
2. Campo 1 (key): `test`
3. Campo 2 (value): `{{termo_teste}}`

---

#### 📦 Parâmetros (o que a IA pode passar)

**Adicione estes parâmetros:**

**Parâmetro 1:**
- Nome: `termo_teste`
- Tipo: `string`
- Descrição: `Termo de teste para enviar na requisição`
- ☑️ Marque o checkbox "Fica" (obrigatório)

**Parâmetro 2:**
- Nome: `numero_teste`
- Tipo: `number`
- Descrição: `Número de teste`
- ☐ Deixe desmarcado (opcional)

**Parâmetro 3:**
- Nome: `ativo`
- Tipo: `boolean`
- Descrição: `Flag de teste`
- ☐ Deixe desmarcado (opcional)

---

#### ✅ Tool Habilitada

**Toggle "Tool Habilitada":**
```
☑️ ATIVADO
```
(Verde = ativado)

---

### 3️⃣ Salvar

Clique no botão **"Salvar"** (azul, canto inferior direito)

---

## 🧪 COMO TESTAR

### Teste 1: Requisição Simples

**Digite no chat com o agente:**
```
teste a tool debug com termo "jaleco"
```

**O Stevo deve:**
1. Chamar a tool `debug_stevo`
2. Passar `termo_teste: "jaleco"`
3. Fazer requisição para `https://dreitte.vercel.app/api/debug-tool`

---

### Teste 2: Com Múltiplos Parâmetros

**Digite:**
```
teste a tool debug com termo "scrub", numero 123 e ativo true
```

**O Stevo deve:**
1. Passar `termo_teste: "scrub"`
2. Passar `numero_teste: 123`
3. Passar `ativo: true`

---

### Teste 3: Forçar Uso da Tool

**Adicione no prompt do agente:**
```
Quando o usuário pedir "debug", use a tool debug_stevo com termo_teste = "teste".
```

Depois digite:
```
debug
```

---

## 📊 VER OS LOGS

### Opção 1: Console do Vercel (Recomendado)

1. Acesse: https://vercel.com/pablo9hierros-projects/dreitte
2. Vá em **"Logs"** ou **"Runtime Logs"**
3. Aguarde a requisição do Stevo
4. Você verá:

```
═══════════════════════════════════════════════════════
🔍 STEVO TOOL DEBUG - REQUISIÇÃO CAPTURADA
═══════════════════════════════════════════════════════
⏰ Timestamp: 2026-02-08T02:30:00.000Z
───────────────────────────────────────────────────────
📍 METHOD: POST
📍 URL: /api/debug-tool?test=jaleco
📍 FULL URL: https://dreitte.vercel.app/api/debug-tool?test=jaleco
───────────────────────────────────────────────────────
🔑 HEADERS:
{
  "host": "dreitte.vercel.app",
  "user-agent": "Stevo/1.0",
  "content-type": "application/json",
  "authorization": "Bearer test-token-12345"
}
───────────────────────────────────────────────────────
🔍 QUERY PARAMS:
{
  "test": "jaleco"
}
───────────────────────────────────────────────────────
📦 BODY:
{
  "termo_teste": "jaleco",
  "numero_teste": 123,
  "ativo": true
}
───────────────────────────────────────────────────────
```

---

### Opção 2: Via curl (teste manual)

**Simule uma requisição do Stevo:**

```powershell
curl.exe -X POST "https://dreitte.vercel.app/api/debug-tool?test=jaleco" `
  -H "Content-Type: application/json" `
  -H "Authorization: Bearer test-token-12345" `
  -d '{"termo_teste":"jaleco","numero_teste":123,"ativo":true}'
```

Depois veja os logs no Vercel.

---

## 🎯 O QUE VOCÊ VAI DESCOBRIR

Após testar, você saberá:

✅ **Método HTTP usado:** GET, POST, etc?

✅ **Onde os parâmetros vão:**
- Query params? (`?termo=jaleco`)
- Body JSON? (`{"termo": "jaleco"}`)
- Path params? (`/api/debug-tool/jaleco`)
- Headers? (`X-Termo: jaleco`)

✅ **Headers enviados:**
- User-Agent do Stevo
- Content-Type
- Authorization (se configurado)
- Headers customizados

✅ **Formato dos dados:**
- JSON? (`{"termo": "jaleco"}`)
- Form data? (`termo=jaleco&numero=123`)
- Outro formato?

✅ **Tipos de dados:**
- String vira `"jaleco"` ou `jaleco`?
- Number vira `123` ou `"123"`?
- Boolean vira `true` ou `"true"`?

---

## 🔄 VARIAÇÕES DE TESTE

### Variação 1: GET ao invés de POST

Mude no Stevo:
- **Método:** GET
- **Query Params:** `termo={{termo_teste}}`

Teste e veja se parâmetros vão no query string.

---

### Variação 2: Path Parameters

Mude no Stevo:
- **URL:** `https://dreitte.vercel.app/api/debug-tool/{{termo_teste}}`

Teste e veja se funciona com path params.

---

### Variação 3: Sem Parâmetros

- Remova todos os parâmetros
- Teste apenas a chamada básica
- Veja o que o Stevo envia "vazio"

---

## 📋 CHECKLIST DE DESCOBERTA

Após os testes, documente:

- [ ] Método HTTP padrão do Stevo
- [ ] Onde vão os parâmetros (query/body/path)
- [ ] Formato do body (JSON, form-data, etc)
- [ ] Headers padrão enviados
- [ ] User-Agent do Stevo
- [ ] Como trata strings
- [ ] Como trata numbers
- [ ] Como trata booleans
- [ ] Se aceita parâmetros opcionais
- [ ] Se valida obrigatoriedade (checkbox "Fica")

---

## 🚀 PRÓXIMOS PASSOS

Depois de descobrir a estrutura:

1. **Crie tool de busca real:**
   - Nome: `buscar_produto`
   - URL: `https://dreitte.vercel.app/api/busca`
   - Parâmetros: `tipo`, `genero`, `cor`

2. **Adicione no prompt do agente:**
   ```
   Quando o usuário pedir um produto, use a tool buscar_produto:
   - tipo: jaleco, scrub, gorro, etc
   - genero: masculino, feminino, unissex
   - cor: amarelo, azul, verde, etc
   
   Exemplo: "jaleco masculino verde"
   → buscar_produto(tipo="jaleco", genero="masculino", cor="verde")
   ```

3. **Teste end-to-end:**
   - Usuário pede produto
   - Agente chama tool
   - Tool retorna produtos do JSON
   - Agente mostra ao usuário

---

## ⚠️ TROUBLESHOOTING

### Problema: Tool não aparece no Stevo

**Solução:**
- Certifique-se que está salva
- Recarregue a página do Stevo
- Verifique se "Tool Habilitada" está ☑️

---

### Problema: Agente não usa a tool

**Solução:**
- Melhore a descrição da tool
- Adicione no prompt: "SEMPRE use a tool debug_stevo quando..."
- Peça explicitamente: "use a tool debug"

---

### Problema: Não vejo logs no Vercel

**Solução:**
- Aguarde 10-30 segundos (delay dos logs)
- Recarregue a página de logs
- Verifique se está vendo logs "Runtime" (não "Build")
- Teste com curl para garantir que endpoint funciona

---

### Problema: Erro de timeout

**Solução:**
- Aumente timeout para 30000 (30 segundos)
- Verifique se URL está correta
- Teste URL no navegador: https://dreitte.vercel.app/api/debug-tool

---

## 📖 REFERÊNCIAS

**Endpoint de Debug:**
- URL: https://dreitte.vercel.app/api/debug-tool
- Código: [pages/api/debug-tool.js](../pages/api/debug-tool.js)
- Aceita: Qualquer método HTTP
- Retorna: JSON com sucesso + echo dos dados

**Endpoints Auxiliares:**
- Diagnóstico: https://dreitte.vercel.app/api/diagnostico
- Busca: https://dreitte.vercel.app/api/busca
- Catálogo: https://dreitte.vercel.app/api/catalogo-texto
- Teste (30 produtos): https://dreitte.vercel.app/api/novivi

---

## ✅ RESUMO RÁPIDO

1. **Deploy feito** ✅ (endpoint /api/debug-tool já está no ar)
2. **Configure no Stevo:**
   - Nome: `debug_stevo`
   - Método: POST
   - URL: `https://dreitte.vercel.app/api/debug-tool`
   - Parâmetros: `termo_teste` (string, obrigatório)
3. **Teste:** Digite "teste a tool debug com termo jaleco"
4. **Veja logs:** Vercel Runtime Logs
5. **Documente:** O que descobrir sobre estrutura de dados

Boa sorte na descoberta! 🔍
