# 📋 Instruções para Configurar no Stevo

## ✅ Passo a Passo Completo

### 1️⃣ Abra as Configurações do Agente no Stevo

No painel do Stevo, vá em configurações do agente Jana Dalecos.

---

### 2️⃣ Configure a Criatividade

**CRÍTICO:** Mova o slider de "Criatividade" para **0.0** (zero absoluto)

```
Criatividade: |--------o  ← ERRADO (0.3)
Criatividade: o---------  ← CORRETO (0.0)
```

**Por que?** 
- Com criatividade > 0, o LLM "melhora" os links
- Ele adiciona palavras como "-classico", "-premium"
- Isso causa erro 404

---

### 3️⃣ Ative o RAG (Recuperação de Documentos)

Procure a opção **"RAG"** ou **"Recuperação de conhecimento"** ou **"Knowledge Base"**

**ATIVE** essa opção: ✅

---

### 4️⃣ Adicione a URL do Catálogo no RAG

Na seção de RAG, procure por:
- "URLs"
- "Sites"
- "Documentos Web"
- "Fontes de conhecimento"

**Adicione esta URL:**
```
https://dreitte.vercel.app/
```

---

### 5️⃣ Aguarde a Indexação

Depois de adicionar a URL:
- O Stevo vai "ler" e "indexar" o conteúdo
- Pode demorar 30 segundos a 2 minutos
- Aguarde até ver confirmação de que está pronto

**Sinais de que está pronto:**
- ✅ Ícone verde ao lado da URL
- ✅ Status: "Indexado"
- ✅ Status: "Ready"

---

### 6️⃣ Cole o Prompt MVP

Copie TODO o conteúdo do arquivo: `PROMPT-MVP-SIMPLES.md`

Cole na caixa de **"Prompt Personalizado"** no Stevo.

---

### 7️⃣ Teste

Digite no chat com o agente:

```
jaleco masculino branco
```

**Resposta esperada:**
```
Encontrei:
Jaleco Masculino Isac Branco
Link: https://www.danajalecos.com.br/shop/jalecos/masculinos/isac/jaleco-isac-branco/

Jaleco Masculino Gian Branco
Link: https://www.danajalecos.com.br/shop/jalecos/masculinos/gian/jaleco-gian-branco/
...
```

---

## 🚨 Problemas Comuns

### ❌ "Não consigo acessar o catálogo"

**Solução:** Verifique se o RAG está configurado e indexado.

### ❌ Links com palavras extras (jaleco-isac-branco-classico)

**Solução:** Criatividade NÃO está em 0.0. Ajuste para zero absoluto.

### ❌ "Não encontrei produtos"

**Solução:** 
1. Aguarde mais tempo para indexação
2. Verifique se a URL está correta: https://dreitte.vercel.app/
3. Teste acessar a URL no navegador para confirmar que está online

---

## 📱 Onde Encontrar Essas Opções no Stevo

Se você não encontrar essas opções, elas podem estar em:

1. **Configurações do Agente** → aba "Configurações"
2. **Configurações do Agente** → aba "Conhecimento" ou "Knowledge"
3. **Configurações do Agente** → aba "Avançado" ou "Advanced"
4. **Painel principal** → "RAG Settings"

---

## 🎯 Checklist Final

Antes de testar, confirme:

- [ ] Criatividade = 0.0 (zero)
- [ ] RAG ativado (toggle ON)
- [ ] URL adicionada: https://dreitte.vercel.app/
- [ ] Status da URL: Indexado/Ready
- [ ] Prompt MVP colado no campo correto
- [ ] Salvou as configurações

---

## 💡 Dica Extra

Se mesmo assim não funcionar, tire um print da tela de configurações do Stevo e compartilhe. Assim posso ver exatamente como está configurado e ajudar melhor.

---

## ⚡ Se RAG Não Funcionar no Stevo

Existe um plano B: **Upload de Arquivo JSON**

Se o Stevo não conseguir indexar a URL, podemos:
1. Criar um arquivo JSON consolidado com todos os produtos
2. Fazer upload desse arquivo no Stevo
3. O agente consulta o arquivo ao invés da URL

Me avise se precisar dessa alternativa!
