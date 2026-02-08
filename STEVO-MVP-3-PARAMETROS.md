# 🎯 MVP: Stevo Extrair 3 Parâmetros e Enviar para Vercel

## ✅ FUNCIONOU O TESTE!
Query Params chegaram no Vercel: `termo_teste: ""`

---

## 🔧 CONFIGURAÇÃO DA TOOL NO STEVO

### 1️⃣ Editar Tool: `buscar_produto`

**Nome da Tool:**
```
buscar_produto
```

**Timeout:**
```
10000
```

**Descrição:** (COPIE EXATAMENTE ISSO)
```
SEMPRE use esta ferramenta quando o usuário mencionar QUALQUER produto do catálogo.

EXTRAIA e envie 3 informações da mensagem do usuário:
1. nomeproduto: jaleco, scrub, gorro, touca, avental, dolma, robe, turbante, vestido, macacao, cracha, desk-pad, kit-office, mouse-pad, porta-canetas, porta-copo, porta-objetos, bandeja
2. genero: masculino, feminino, unissex (se não mencionar, use "unissex")
3. cor: amarelo, azul, verde, branco, preto, vermelho, rosa, cinza, roxo, laranja, vinho, marinho, etc

EXEMPLOS de quando chamar:
- "gorro verde" → nomeproduto=gorro, genero=unissex, cor=verde
- "jaleco masculino amarelo" → nomeproduto=jaleco, genero=masculino, cor=amarelo
- "scrub feminino azul" → nomeproduto=scrub, genero=feminino, cor=azul
- "tem avental?" → nomeproduto=avental, genero=unissex, cor=todas
- "quero um robe" → nomeproduto=robe, genero=unissex, cor=todas

Se o usuário NÃO mencionar a cor, use: cor=todas
Se o usuário NÃO mencionar gênero, use: genero=unissex
```

---

### 2️⃣ Configurar METHOD e URL

**Método:**
```
POST
```

**URL do Endpoint:**
```
https://dreitte.vercel.app/api/debug-tool
```

---

### 3️⃣ Configurar HEADERS

Clique em **+ Adicionar Header**:

| Header Key | Header Value |
|------------|--------------|
| `Content-Type` | `application/json` |
| `Authorization` | `Bearer test-token-12345` |

---

### 4️⃣ Configurar PARÂMETROS (o que a IA pode passar) ⚠️ IMPORTANTE!

**ANTES DE CONFIGURAR QUERY PARAMS**, você PRECISA definir os parâmetros que a IA vai extrair.

Clique em **+ Adicionar** na seção **"Parâmetros (o que a IA pode passar)"**:

| Nome do Parâmetro | Tipo | Descrição | Obrigatório |
|-------------------|------|-----------|-------------|
| `nomeproduto` | `string` | Tipo de produto: jaleco, scrub, gorro, etc | ✅ Sim |
| `genero` | `string` | Gênero: masculino, feminino, unissex | ❌ Não |
| `cor` | `string` | Cor do produto: amarelo, azul, verde, etc | ❌ Não |

**FORMATO NO STEVO:**
1. Clique no **+** em "Parâmetros"
2. Para cada parâmetro:
   - **Nome:** `nomeproduto` (depois `genero`, depois `cor`)
   - **Tipo:** selecione `string`
   - **Descrição:** Cole as descrições acima
   - **Obrigatório:** Marque apenas `nomeproduto` como obrigatório

---

### 5️⃣ Configurar QUERY PARAMS (mapear para URL)

**AGORA SIM**, clique em **+ Adicionar Query Param**:

| Query Param Name | Query Param Value |
|------------------|-------------------|
| `produto` | `{{nomeproduto}}` |
| `genero` | `{{genero}}` |
| `cor` | `{{cor}}` |

**IMPORTANTE:** 
- Os `{{variáveis}}` devem corresponder EXATAMENTE aos nomes definidos em "Parâmetros"
- O Stevo vai substituir `{{nomeproduto}}` pelo valor extraído da conversa

---

### 6️⃣ DEIXE BODY VAZIO

Não precisa configurar nada no campo de **Body/JSON** da requisição. Estamos usando apenas Query Params.

---

### 7️⃣ Tool Habilitada

Certifique-se que o toggle **Tool Habilitada** está **ON** (verde).

---

## ⚠️ CHECKLIST - ORDEM CORRETA

Siga essa ordem EXATA para configurar a tool:

- [ ] 1. Nome da Tool: `buscar_produto`
- [ ] 2. Descrição: Cole o texto com "SEMPRE use esta ferramenta..."
- [ ] 3. Método: `POST`
- [ ] 4. URL: `https://dreitte.vercel.app/api/debug-tool`
- [ ] 5. Headers: `Content-Type` e `Authorization`
- [ ] 6. **Parâmetros (o que a IA pode passar):** Adicione `nomeproduto`, `genero`, `cor`
- [ ] 7. **Query Params:** Mapeie `produto={{nomeproduto}}`, `genero={{genero}}`, `cor={{cor}}`
- [ ] 8. Tool Habilitada: **ON**
- [ ] 9. Clique em **Salvar**

---

## 🔄 COMO FUNCIONA (Fluxo de Dados)

```
1. Usuário digita: "gorro verde"
   ↓
2. Stevo lê a Tool Description e identifica que deve chamar buscar_produto
   ↓
3. Stevo EXTRAI valores da mensagem:
   - nomeproduto = "gorro"
   - genero = "unissex" (padrão)
   - cor = "verde"
   ↓
4. Stevo SUBSTITUI nas Query Params:
   - produto={{nomeproduto}} → produto=gorro
   - genero={{genero}} → genero=unissex
   - cor={{cor}} → cor=verde
   ↓
5. Stevo FAZ REQUEST:
   POST https://dreitte.vercel.app/api/debug-tool?produto=gorro&genero=unissex&cor=verde
   ↓
6. Vercel recebe e loga:
   {
     "produto": "gorro",
     "genero": "unissex", 
     "cor": "verde"
   }
```

**PROBLEMA ANTERIOR:** Configurou Query Params SEM definir Parâmetros primeiro
**RESULTADO:** Stevo enviou `{{cor}}` literal (string) em vez de extrair o valor

---

## 📝 SYSTEM PROMPT DO STEVO

Cole isso no **System Prompt** da Jana Dalecos:

```
Você é Jana Dalecos, atendente especializada em produtos médicos hospitalares.

🚨 REGRA OBRIGATÓRIA - FERRAMENTA buscar_produto:

SEMPRE que o usuário mencionar QUALQUER produto (jaleco, scrub, gorro, touca, avental, dolma, robe, turbante, vestido, macacao, cracha, desk-pad, kit-office, mouse-pad, porta-canetas, porta-copo, porta-objetos, bandeja), você DEVE:

1. EXTRAIR da mensagem:
   - nomeproduto: o tipo de produto mencionado
   - genero: masculino, feminino ou unissex (padrão: unissex)
   - cor: a cor mencionada (padrão: todas)

2. CHAMAR a ferramenta buscar_produto() com esses 3 parâmetros

3. AGUARDAR o resultado antes de responder

EXEMPLOS:
- Usuário: "gorro verde" → buscar_produto(nomeproduto="gorro", genero="unissex", cor="verde")
- Usuário: "jaleco masculino amarelo" → buscar_produto(nomeproduto="jaleco", genero="masculino", cor="amarelo")
- Usuário: "tem scrub?" → buscar_produto(nomeproduto="scrub", genero="unissex", cor="todas")

⛔ NUNCA responda sobre produtos SEM chamar a ferramenta primeiro.
⛔ NUNCA invente produtos que não foram retornados pela ferramenta.
```

---

## 🧪 TESTES PARA FAZER

Após salvar a configuração, teste com essas mensagens:

### Teste 1: Produto + Cor
```
gorro verde
```
**Esperado no Vercel:**
```
produto=gorro
genero=unissex
cor=verde
```

### Teste 2: Produto + Gênero + Cor
```
jaleco masculino amarelo
```
**Esperado no Vercel:**
```
produto=jaleco
genero=masculino
cor=amarelo
```

### Teste 3: Só Produto
```
tem avental?
```
**Esperado no Vercel:**
```
produto=avental
genero=unissex
cor=todas
```

### Teste 4: Scrub Completo
```
quero scrub feminino azul
```
**Esperado no Vercel:**
```
produto=scrub
genero=feminino
cor=azul
```

---

## 📊 COMO VERIFICAR SE FUNCIONOU

1. **No Stevo:** A tool deve ser chamada automaticamente quando você mencionar um produto

2. **No Vercel Logs:** Acesse https://vercel.com/pablo-s-projects-4d0aab9d/dreitte/logs

3. **Procure por:**
```
🔍 QUERY PARAMS:
{
  "produto": "gorro",
  "genero": "unissex",
  "cor": "verde"
}
```

---

## 🎯 OBJETIVO MVP

✅ Stevo extrai `nomeproduto`, `genero`, `cor` da conversa  
✅ Envia via Query Params para Vercel  
✅ Debug endpoint captura e loga os dados  

**Próximo passo:** Criar endpoint real que busca produtos nos JSONs.
