# Perguntas sobre Stevo.chat - Documentação Necessária

## ⚠️ AVISO IMPORTANTE

**Não tenho acesso à documentação técnica oficial do Stevo.chat.**

As perguntas abaixo precisam ser respondidas pela documentação oficial da plataforma ou pelo suporte técnico do Stevo.

---

## 📋 SUAS PERGUNTAS

### 1️⃣ Como funciona o "Tool" no Stevo.chat?

**Você perguntou:**
- Qual tipo de dados é transitado quando o Stevo usa a ferramenta "tool"?
- Ele faz requisição enviando quais dados?
- Quais tipos de dados?
- Qual estrutura?
- Quais os tipos, formato e jeito de uso padrão do Stevo quando vai usar os tools?

**Onde encontrar:**
- 📖 Documentação oficial: https://stevo.chat/docs (ou similar)
- 💬 Suporte/Discord do Stevo.chat
- 📧 Contato direto com a equipe Stevo

**O que você precisa saber:**
```
- Formato de requisição da tool (REST API? GraphQL? Outro?)
- Schema/estrutura da request:
  {
    "tool": "...",
    "parameters": {...},
    "context": {...}
  }
- Tipos de dados aceitos (string, number, array, object?)
- Autenticação/Headers necessários
- Formato de resposta esperado
- Rate limits e timeouts
```

---

### 2️⃣ Como o RAG funciona com Links?

**Você perguntou:**
- Qual a estrutura/jeito de dados/preferências que realmente funciona pro Stevo quando ele vai pegar a base de dados de conhecimento do link?
- Como ele lê, entende, comunica, conversa com o RAG link?

**Onde encontrar:**
- 📖 Documentação RAG do Stevo: seção sobre "Data Sources" ou "Knowledge Base"
- 🧪 Experimentação prática (testar diferentes formatos)

**O que você precisa saber:**
```
Formato de dados aceitos pelo RAG:
- ✅ HTML? (você testou e funciona parcialmente)
- ✅ Plain text? (você testou e funcionou melhor)
- ✅ JSON? (você mencionou que funciona bem)
- ✅ Markdown?
- ✅ PDF?
- ❌ CSV?

Processamento:
- Como o Stevo faz chunking (divisão em pedaços)?
- Tamanho máximo de cada chunk?
- Como faz a indexação?
- Usa embeddings? Qual modelo?
- Como faz a busca semântica?
- Quantos chunks retorna por query?

Limitações:
- Tamanho máximo do arquivo/URL?
- Frequência de re-indexação?
- Cache? TTL?
```

---

## 🧪 O QUE JÁ SABEMOS (DOS SEUS TESTES)

### ✅ Funciona Bem:
1. **JSON anexado como arquivo**
   - Você mencionou: "funciona tão bem quanto anexar cada arquivo .json no RAG"
   - Estrutura JSON com hierarquia funciona

2. **HTML estruturado**
   - HTML com data-attributes (`data-tipo`, `data-genero`, `data-cor`)
   - Classes CSS para organização (`.produto-nome`, `.produto-link`)

3. **Plain text simples**
   - Formato tipo INI com separadores
   - Estrutura hierárquica clara (TIPO → GÊNERO → COR → PRODUTO)

### ⚠️ Funciona Parcialmente:
1. **HTML complexo**
   - Páginas HTML muito grandes podem ser truncadas
   - RAG não lê 100% do conteúdo

### ❌ Problemas Identificados:
1. **Criatividade > 0**
   - Mesmo com RAG ativo, se criatividade > 0, agente inventa produtos
   - **Solução:** Criatividade = 0.0 (zero absoluto)

2. **Agente ignora RAG**
   - Às vezes usa conhecimento base ao invés do RAG
   - Inventa produtos que não existem no catálogo
   - **Possível causa:** RAG não está ativo ou mal configurado

---

## 🔍 COMO INVESTIGAR (SUGESTÕES)

### Teste 1: Verificar se RAG está realmente ativo

**Adicione no prompt:**
```
ANTES de responder qualquer pergunta, SEMPRE diga:
"[DEBUG] Consultei os seguintes arquivos: [lista de arquivos]"
```

Se o agente não listar arquivos → RAG não está ativo.

---

### Teste 2: Forçar referência ao RAG

**Adicione no prompt:**
```
NUNCA use conhecimento prévio.
SEMPRE inicie sua busca dizendo: "Consultando [nome do arquivo.json]..."
Se não encontrar no arquivo, diga: "Não encontrei em [arquivo]"
```

Isso força o agente a "pensar em voz alta" sobre de onde vem a informação.

---

### Teste 3: Testar produtos que NÃO existem

**Pergunte ao agente:**
```
"jaleco masculino roxo com bolinhas verdes"
```

**Resposta esperada:**
```
"Não temos esse produto no catálogo"
```

**Se responder com produto inventado:**
→ RAG não está funcionando ou criatividade > 0

---

### Teste 4: Perguntar sobre o próprio catálogo

**Pergunte:**
```
"Quantos produtos existem no total?"
"Quais arquivos JSON você tem acesso?"
"Liste todas as cores disponíveis para jaleco masculino"
```

**Se responder corretamente:**
→ RAG está lendo os arquivos

**Se responder errado ou inventar:**
→ RAG não está ativo ou mal configurado

---

## 📞 ONDE BUSCAR AJUDA

### 1. Documentação Oficial
- Site: https://stevo.chat
- Procure por: "API Documentation", "RAG Documentation", "Tools"

### 2. Suporte Técnico
- Abra ticket de suporte
- Pergunte especificamente:
  - "Como funciona o sistema de Tools?"
  - "Qual formato de dados é melhor para RAG com links?"
  - "Como verificar se RAG está realmente ativo?"

### 3. Comunidade
- Discord/Fórum do Stevo.chat (se houver)
- Outros usuários podem ter passado pelo mesmo problema

### 4. Experimentação
- Teste diferentes formatos de dados
- Compare resultados
- Documente o que funciona melhor

---

## 💡 RECOMENDAÇÕES BASEADAS NOS TESTES

### Para RAG com Arquivos JSON:

**✅ FAÇA:**
1. Anexe CADA arquivo JSON separadamente:
   - `jaleco.json`
   - `scrub.json`
   - `gorro.json`
   - etc. (todos os 18 arquivos)

2. Configure criatividade = 0.0

3. Use o prompt [PROMPT-ATENDIMENTO-JSON.md](PROMPT-ATENDIMENTO-JSON.md) que acabei de criar

4. No prompt, liste TODOS os arquivos disponíveis

5. Instrua o agente a SEMPRE consultar os arquivos antes de responder

**❌ NÃO FAÇA:**
1. Confiar apenas em URLs (podem ser mal indexadas)
2. Deixar criatividade > 0
3. Assumir que RAG está ativo sem testar
4. Usar arquivos muito grandes (> 10MB)

---

### Para RAG com URL:

**✅ FORMATO IDEAL (baseado nos testes):**

1. **Plain text estruturado** (funcionou melhor):
   ```
   ==================================================
   JALECO
   ==================================================
   
   --- MASCULINO ---
   
     Amarelo
     -------
     Nome: Jaleco Masculino Samuel Amarelo
     Link: https://...
   ```

2. **HTML simples** (funciona bem):
   ```html
   <div data-tipo="JALECO">
     <div data-genero="MASCULINO">
       <div data-cor="Amarelo">
         <div class="produto-nome">Nome</div>
         <div class="produto-link">Link</div>
       </div>
     </div>
   </div>
   ```

3. **JSON exposto como API** (você tem isso):
   - `/api/diagnostico` → mostra estrutura
   - `/api/busca?tipo=jaleco&genero=masculino&cor=amarelo` → busca específica
   - `/api/catalogo-texto` → texto completo

**❌ EVITE:**
1. HTML muito complexo (> 100KB)
2. Páginas com muito JavaScript
3. Conteúdo que muda muito (cache problems)
4. URLs que precisam autenticação

---

## 🎯 PRÓXIMOS PASSOS

1. **Use o novo prompt:** [PROMPT-ATENDIMENTO-JSON.md](PROMPT-ATENDIMENTO-JSON.md)

2. **Configure Stevo:**
   - Anexe TODOS os 18 arquivos JSON no RAG
   - Criatividade = 0.0
   - Cole o prompt completo

3. **Teste básico:**
   ```
   "jaleco masculino amarelo"
   ```
   Deve retornar APENAS "Samuel Amarelo"

4. **Teste avançado:**
   ```
   "jaleco masculino verde"
   ```
   Deve retornar "Verde Escuro" + "Verde Militar"

5. **Teste negativo:**
   ```
   "jaleco masculino roxo"
   ```
   Deve dizer "não temos" e listar cores disponíveis

6. **Se tudo funcionar:**
   ✅ Arquivos JSON no RAG + Criatividade 0 = Solução

7. **Se não funcionar:**
   ⚠️ Consulte suporte técnico Stevo.chat com prints dos testes

---

## 📝 RESUMO

**Suas perguntas requerem:**
- Documentação oficial do Stevo.chat (não tenho acesso)
- Suporte técnico da plataforma
- Experimentação prática

**O que temos:**
- ✅ Novo prompt para usar com arquivos JSON
- ✅ Estrutura JSON testada e funcionando
- ✅ Endpoints de diagnóstico criados
- ✅ Testes de validação documentados

**O que falta:**
- ⚠️ Documentação técnica oficial do Stevo sobre Tools
- ⚠️ Documentação sobre como RAG processa diferentes formatos
- ⚠️ Especificações técnicas do sistema de indexação

**Recomendação:**
Use arquivo JSON anexado (você disse que funciona bem) + novo prompt criado.
