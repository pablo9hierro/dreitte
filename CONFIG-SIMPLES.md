# Como Configurar

## 1. No Stevo

- **Criatividade:** 0.0 (zero)
- **RAG:** ATIVADO
- **URL:** `https://dreitte.vercel.app/api/catalogo-texto`
  - Vá em: RAG → Sites/URLs
  - Adicione essa URL
  - Aguarde indexação (30-60 segundos)

## 2. Cole o Prompt

Copie **TODO** o conteúdo de `PROMPT-FINAL-MVP.md` e cole no campo "Prompt Personalizado" do Stevo.

## 3. Teste

Digite no chat: `jaleco feminino amarelo`

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

## Por Que Essa URL?

`/api/catalogo-texto` retorna **texto puro** (não HTML complexo).

✅ RAG lê 100% do conteúdo  
✅ Estrutura simples: Tipo → Gênero → Cor → Produtos  
✅ Fácil de buscar e filtrar  

---

## Verificação

Antes de testar, confirme:

- [ ] Criatividade = 0.0 (zero absoluto)
- [ ] RAG está ATIVADO
- [ ] URL indexada (ícone verde ou status "Ready")
- [ ] Prompt completo colado

---

## Se Não Funcionar

### 1. Teste a URL no navegador

Abra: `https://dreitte.vercel.app/api/catalogo-texto`

Deve mostrar texto puro com produtos.

### 2. Force re-indexação

No Stevo, nas configurações de RAG:
- Clique em "Re-indexar" ou "Atualizar"
- Aguarde 30-60 segundos

### 3. Verifique criatividade

Se > 0, o LLM vai inventar/modificar links.

### 4. Confirme que RAG está ativo

Se retornar `https://dreitte.vercel.app/...` → RAG **NÃO** está lendo o catálogo.

Pronto.
