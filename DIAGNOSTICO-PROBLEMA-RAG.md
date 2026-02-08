# 🚨 PROBLEMA CRÍTICO: AGENTE ESTÁ INVENTANDO PRODUTOS

## O Que Está Acontecendo

O agente Stevo está **ALUCINANDO** produtos que **NÃO EXISTEM** no catálogo.

### Exemplo do Erro

**Usuário perguntou:** "jaleco masculino amarelo"

**Agente respondeu:**
```
Jaleco Masculino Alexandre Amarelo  ❌ NÃO EXISTE
https://www.danajalecos.com.br/shop/jalecos/masculinos/alexandre/jaleco-alexandre-amarelo/

Jaleco Masculino Paulo Amarelo  ❌ NÃO EXISTE
https://www.danajalecos.com.br/shop/jalecos/masculinos/paulo/jaleco-paulo-amarelo/
```

### Realidade do Catálogo

No catálogo real existe **APENAS 1** jaleco masculino amarelo:

```
✅ Jaleco Masculino Samuel Amarelo
✅ https://www.danajalecos.com.br/shop/jalecos/masculinos/samuel/jaleco-samuel-amarelo/
```

## 🔍 Como Verificar

### 1. Endpoint de Diagnóstico

Acesse: https://dreitte.vercel.app/api/diagnostico

Mostra:
- Total de produtos no catálogo (467 produtos)
- Produtos por tipo (210 jalecos, 89 scrubs, etc)
- **Teste específico: jaleco masculino amarelo** → encontra 1 produto apenas

### 2. Endpoint de Busca

Acesse: https://dreitte.vercel.app/api/busca?tipo=jaleco&genero=masculino&cor=amarelo

Retorna:
```json
{
  "encontrados": 1,
  "produtos": [
    {
      "nome": "Jaleco Masculino Samuel Amarelo",
      "link": "https://www.danajalecos.com.br/shop/jalecos/masculinos/samuel/jaleco-samuel-amarelo/"
    }
  ]
}
```

### 3. Catálogo em Texto

Acesse: https://dreitte.vercel.app/api/catalogo-texto

Busque por "Amarelo" na seção JALECO → MASCULINO

Você vai encontrar apenas **1 produto** amarelo.

## 🎯 Conclusão

O problema NÃO é:
- ❌ Arquivos JSON vazios (todos têm dados)
- ❌ API endpoint quebrada (todos funcionando)
- ❌ Produtos faltando (todos presentes)
- ❌ Criatividade alta (está em 0.0 conforme relatado)

O problema É:
- ✅ **RAG do Stevo NÃO está lendo o catálogo corretamente**
- ✅ **Agente está usando "conhecimento base" ou inventando**
- ✅ **Não está respeitando o catálogo como fonte única da verdade**

## 🔧 Possíveis Causas

### 1. RAG Não Indexou Completo
- Catálogo tem 67KB de texto
- Talvez Stevo só indexou parte
- **Solução:** Force re-indexação, aumente chunk size

### 2. RAG Não Está Ativo
- Mesmo com toggle "ON", pode não estar funcionando
- **Teste:** Pergunte ao agente "qual URL você está lendo?" 
- Se não souber ou disser URL errada → RAG não está ativo

### 3. Modelo Está Priorizando Conhecimento Base
- Mesmo com RAG ativo, modelo pode ignorar
- **Solução:** No prompt, adicione "IGNORE TODO CONHECIMENTO PRÉVIO. USE APENAS O CATÁLOGO."

### 4. Chunk/Context Window Pequeno
- Se chunks são muito pequenos, RAG não vê os produtos
- **Teste:** Use endpoint de busca para buscar produtos específicos
- **Solução:** Aumente tamanho dos chunks no Stevo

## 🛠️ O Que Fazer Agora

### Passo 1: Verificar RAG
1. Abra Stevo
2. Vá em configurações do agente
3. Confirme que RAG está **verde/ativo**
4. Verifique URL: `https://dreitte.vercel.app/api/catalogo-texto`
5. Veja se mostra "Indexed" ou "Indexado"

### Passo 2: Testar Consciência do Catálogo
Pergunte ao agente:
```
"Qual URL de catálogo você está usando?"
"Quantos produtos existem no catálogo?"
"Liste todos os jalecos masculinos amarelos que existem"
```

Se ele responder correto:
- URL: dreitte.vercel.app/api/catalogo-texto
- Total: 467 produtos
- Jalecos masculinos amarelos: APENAS Samuel

→ RAG está funcionando

Se ele responder errado ou inventar:
→ RAG NÃO está funcionando

### Passo 3: Force Re-indexação
1. Remova a URL do RAG
2. Salve
3. Adicione novamente: `https://dreitte.vercel.app/api/catalogo-texto`
4. Aguarde indexação completa (1-2 minutos)
5. Teste novamente

### Passo 4: Alternativa - Upload Direto
Se RAG por URL não funcionar:
1. Baixe: https://dreitte.vercel.app/api/catalogo-texto
2. Salve como `catalogo.txt` (arquivo local)
3. No Stevo, faça upload do arquivo direto
4. Isso força indexação local

### Passo 5: Contate Suporte Stevo
Se nada funcionar, é limitação/bug da plataforma:
- Mostre os endpoints de diagnóstico
- Mostre que catálogo tem apenas 1 produto amarelo
- Mostre que agente inventou 2 produtos
- Peça para verificarem por que RAG não está respeitando dados

## 📊 URLs para Enviar ao Suporte

```
Catálogo Texto:
https://dreitte.vercel.app/api/catalogo-texto

Diagnóstico:
https://dreitte.vercel.app/api/diagnostico

Busca Específica (jaleco masculino amarelo):
https://dreitte.vercel.app/api/busca?tipo=jaleco&genero=masculino&cor=amarelo

Resultado esperado: 1 produto (Samuel)
Resultado do agente: 2 produtos inventados (Alexandre e Paulo)
```

## 🎭 Por Que Alexandre e Paulo?

Produtos que EXISTEM em outras cores:
- Paulo: Azul Marinho, Chumbo, Preto (mas NÃO amarelo)
- Alexandre: Desconhecido (pode nem existir)

O agente está **misturando**:
1. Nomes de modelo corretos (Paulo existe)
2. Com cores que não existem para esse modelo
3. Gerando links inventados

Isso prova que ele TEM conhecimento base sobre Dana Jalecos, mas NÃO está usando o catálogo atual fornecido via RAG.

## ✅ Teste de Sanidade

Execute no terminal:
```bash
curl https://dreitte.vercel.app/api/busca?tipo=jaleco&genero=masculino&cor=amarelo
```

Se retornar apenas 1 produto (Samuel) → Catálogo está correto

Se o agente Stevo retornar 2+ produtos → **RAG não está funcionando**

---

**Última atualização:** 2026-02-08  
**Status:** PROBLEMA CONFIRMADO - Agente inventando produtos  
**Causa Provável:** RAG não lê catálogo / Usa conhecimento base  
**Próximo Passo:** Verificar indexação e tentar upload direto de arquivo
