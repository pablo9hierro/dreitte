# 🚀 INSTRUÇÕES PARA TESTAR NO STEVO

## 📋 PASSO A PASSO

### 1️⃣ **Configurar o Stevo**

1. Abra o Stevo
2. Vá em **"Configurações Avançadas"**
3. Configure:
   - ✅ **Criatividade: 0** (mova o slider para a esquerda até o zero)
   - ✅ **Modelo: GPT-4o** (recomendado)

### 2️⃣ **Escolher o Prompt**

Você tem 2 opções de teste:

**OPÇÃO A - Prompt MVP Simples:**
- Arquivo: `PROMPT-MVP-SIMPLES.md`
- Use este para teste inicial
- Focado apenas em consultar e retornar links

**OPÇÃO B - Teste de Sanidade:**
- Arquivo: `TESTE-SANIDADE.md`
- Use este para verificar se está funcionando
- Instruções de teste incluídas

### 3️⃣ **Cole o Prompt no Stevo**

1. Abra o arquivo escolhido (MVP ou Teste)
2. **Copie TODO o conteúdo**
3. Cole na área de **"Prompt Personalizado"** do Stevo
4. Clique em **"Assistente"** para salvar

### 4️⃣ **Configure RAG (IMPORTANTE)**

1. Vá em **"RAG"** (Documentos)
2. **ADICIONE a URL:**
   ```
   https://dreitte.vercel.app/
   ```
3. Certifique-se que **RAG está ATIVADO** ✅

### 5️⃣ **Faça o Teste**

**Digite no chat:**
```
jaleco masculino branco
```

**O que você DEVE receber:**
```
Produto: Jaleco Masculino Isac Branco
Link: https://www.danajalecos.com.br/shop/jalecos/masculinos/isac/jaleco-isac-branco/

Produto: Jaleco Masculino Gian Branco
Link: https://www.danajalecos.com.br/shop/jalecos/masculinos/gian/jaleco-gian-branco/

[... mais produtos ...]
```

### 6️⃣ **Verificar se Passou no Teste**

**✅ TESTE PASSOU SE:**
- Links começam com `https://www.danajalecos.com.br/`
- Links terminam com `/`
- Links NÃO têm palavras extras tipo "-classico", "-premium"
- Links abrem no navegador sem erro 404

**❌ TESTE FALHOU SE:**
- Links têm palavras extras
- Links dão erro 404
- Links estão encurtados ou modificados

---

## 🔧 SOLUÇÃO DE PROBLEMAS

### Problema 1: Links com palavras extras (ex: "-classico")

**Causa:** Criatividade > 0

**Solução:**
1. Vá em Configurações Avançadas
2. **Mova o slider de Criatividade para 0** (zero absoluto)
3. Salve e teste novamente

### Problema 2: Não encontra produtos

**Causa:** RAG não está acessando o catálogo

**Solução:**
1. Verifique se RAG está ATIVADO
2. Adicione a URL: `https://dreitte.vercel.app/`
3. Aguarde alguns segundos para indexar
4. Teste novamente

### Problema 3: Erro ao acessar catálogo

**Causa:** URL incorreta ou site fora do ar

**Solução:**
1. Teste se o site abre no navegador: https://dreitte.vercel.app/
2. Se abrir, o problema é no Stevo
3. Se não abrir, problema é no site

### Problema 4: Stevo ignora as instruções

**Causa:** Prompt não foi salvo corretamente

**Solução:**
1. Copie o prompt novamente
2. Cole na área correta
3. Clique em **"Assistente"** para salvar
4. Recarregue a página do Stevo
5. Teste novamente

---

## 📊 CHECKLIST ANTES DE TESTAR

- [ ] Criatividade está em 0.0?
- [ ] Prompt MVP foi colado e salvo?
- [ ] RAG está ativado?
- [ ] URL https://dreitte.vercel.app/ foi adicionada?
- [ ] Site abre no navegador?

**Se todos ✅ → Pode testar!**

---

## 🎯 TESTE AGORA

1. Configure criatividade em **0**
2. Cole o prompt MVP
3. Ative RAG com a URL
4. Digite: `jaleco masculino branco`
5. Veja se os links estão corretos

**Boa sorte! 🍀**
