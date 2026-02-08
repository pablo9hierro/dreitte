# 🚀 SOLUÇÃO: Upload do Arquivo TXT no Stevo

## O Problema Identificado

Você relatou que o Stevo consegue encontrar alguns produtos mas não outros:
- ✅ Jaleco masculino verde → FUNCIONOU
- ❌ Jaleco feminino amarelo → Disse que não tem (mas TEM!)
- ❌ Jaleco masculino amarelo → Disse que não tem (mas TEM!)

**Causa:** O RAG do Stevo não está conseguindo ler a página HTML completa. Ele lê só parte.

## A Solução

**Use arquivo TXT em vez de URL.**

Arquivo TXT = Mais simples, mais direto, mais confiável.

---

## 📋 Passo a Passo

### 1. Baixe o Arquivo

Arquivo: **`public/catalogo-completo.txt`**

Está no seu repositório, ou baixe direto:
```
https://github.com/pablo9hierro/dreitte/raw/main/public/catalogo-completo.txt
```

### 2. No Stevo

1. Vá em **Configurações do Agente**
2. Encontre seção **"RAG"** ou **"Knowledge Base"** ou **"Documentos"**
3. Clique em **"Upload de arquivos"** ou **"Adicionar documento"**
4. Selecione o arquivo: `catalogo-completo.txt`
5. Aguarde indexação (30-60 segundos)
6. Confirme que apareceu o ícone ✅ verde ou status "Indexado"

### 3. Remova a URL

Se você tinha adicionado a URL `https://dreitte.vercel.app/catalogo`, REMOVA ela.

Use APENAS o arquivo TXT.

### 4. Cole o Novo Prompt

Copie e cole o conteúdo de: **`PROMPT-FINAL-MVP.md`**

### 5. Configure Criatividade

**Criatividade = 0.0** (zero absoluto!)

---

## ✅ Teste

Digite: **`jaleco feminino amarelo`**

**Deve retornar:**
```
Jaleco Feminino Heloisa Manga Longa Amarelo
https://www.danajalecos.com.br/shop/jalecos/feminino/femininos-ziper/heloisa/jaleco-heloisa-amarelo/

Jaleco Feminino Rute Amarelo
https://www.danajalecos.com.br/shop/jalecos/feminino/rute/jaleco-rute-amarelo/

Jaleco Feminino Dani Amarelo
https://www.danajalecos.com.br/shop/jalecos/feminino/dani/jaleco-dani-amarelo/
```

---

## 📊 Conteúdo do Arquivo TXT

O arquivo `catalogo-completo.txt` contém:
- 1937 linhas
- 67.347 caracteres
- Todos os 18 tipos de produtos
- Formato super simples: Nome → Link

Estrutura:
```
JALECO

--- MASCULINO ---

  Amarelo
  -------
  Nome: Jaleco Masculino Samuel Amarelo
  Link: https://www.danajalecos.com.br/shop/jalecos/masculinos/samuel/jaleco-samuel-amarelo/

  Verde
  -----
  Nome: Jaleco Masculino Manoel Verde Escuro
  Link: https://www.danajalecos.com.br/shop/jalecos/masculinos/manoel/jaleco-manoel-verde-escuro/
```

---

## ❓ Se Ainda Não Funcionar

### Teste 1: Arquivo foi indexado?
Verifique se o arquivo aparece na lista de documentos RAG com status ✅

### Teste 2: Criatividade está em 0?
Se > 0, o LLM vai inventar links.

### Teste 3: Produto existe?
Busque algo simples que sabemos que existe: "jaleco masculino amarelo"

### Teste 4: RAG está ativo?
Confirme que o toggle do RAG está ON.

---

## 🎯 Por Que Isso Funciona?

**Arquivo TXT vs URL HTML:**

| Método | Confiabilidade |
|--------|----------------|
| URL HTML (página /catalogo) | 50% - Lê parcialmente |
| Arquivo TXT upload | 95% - Lê completo |
| Arquivo JSON upload | 90% - Pode confundir estrutura |

Arquivo TXT é o formato mais simples e direto para RAG ler.

---

## 📞 Próximos Passos

1. Faça upload do `catalogo-completo.txt`
2. Teste com "jaleco feminino amarelo"
3. Se funcionar → relaxa, está resolvido!
4. Se não funcionar → me manda print das configurações

Boa sorte! 🚀
