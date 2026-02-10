# 🔴 PROBLEMA: IA Alucinando Links

## O QUE ESTAVA ACONTECENDO

1. **Primeira busca:** IA encontra produto correto, envia link correto
2. **Próximas buscas:** IA "aprende" o padrão do link e começa a INVENTAR variações
3. **Resultado:** Links dando 404

### Exemplo do Problema:

**Cliente pede:** jaleco masculino verde
**IA viu antes:** `https://www.danajalecos.com.br/shop/jalecos/masculinos/samuel/jaleco-samuel-amarelo/`
**IA inventa:** `https://www.danajalecos.com.br/shop/jalecos/masculinos/samuel/jaleco-samuel-verde/`
**Resultado:** ❌ 404 - Página não existe

---

## POR QUE ACONTECIA

O prompt ENSINAVA a estrutura dos links:
- "Todos os links começam com: https://www.danajalecos.com.br/shop/"
- Mostrava exemplos completos de URLs
- Explicava a estrutura: `/shop/[categoria]/[subcategoria]/[produto]/`

A IA "aprendia" o padrão e pensava: 
> "Ah, entendi! É só trocar 'amarelo' por 'verde' na URL!"

---

## SOLUÇÃO IMPLEMENTADA

### ❌ REMOVIDO DO PROMPT:
- Exemplos de URLs completas
- Explicações sobre estrutura de links
- Qualquer padrão que a IA possa "aprender"

### ✅ ADICIONADO AO PROMPT:
```
❌ NUNCA crie links
❌ NUNCA modifique links  
❌ NUNCA monte links trocando palavras
❌ NUNCA aprenda padrões de URL
❌ NUNCA invente variações de links

✅ SEMPRE copie o href EXATO do HTML
✅ SEMPRE busque no catálogo a CADA pergunta

**IMPORTANTE:**
- Você NÃO sabe como os links são formados
- Você NÃO deve aprender estrutura de URLs
- Você APENAS copia o que está no href do HTML
- CADA produto tem seu link único no catálogo
- SEMPRE pesquise no catálogo, NUNCA use memória de pesquisas anteriores
```

---

## COMO FUNCIONA AGORA

1. Cliente pede produto
2. IA busca no catálogo HTML usando data-attributes
3. IA encontra elemento `<a class="produto-link" href="...">`
4. IA copia EXATO o href (ctrl+c, ctrl+v mental)
5. IA envia o link

**NÃO há "aprendizado" de padrões.**
**NÃO há "construção" de URLs.**
**APENAS cópia literal do HTML.**

---

## TESTE PARA VALIDAR

```
Você: jaleco masculino amarelo
[IA busca e retorna link A]

Você: jaleco masculino verde  
[IA busca NOVAMENTE no catálogo, NÃO tenta modificar link A]
[IA retorna link B do catálogo]

Você: scrub feminino azul
[IA busca NOVAMENTE no catálogo, NÃO tenta usar padrão dos links anteriores]
[IA retorna link C do catálogo]
```

**✅ SUCESSO:** Cada link funciona (não dá 404)
**❌ FALHA:** Qualquer link que dá 404 = IA está inventando

---

## REGRA DE OURO

**Se um link não está NO CATÁLOGO HTML = não existe.**

A IA não pode:
- "Deduzir" que existe
- "Montar" baseado em outros produtos
- "Aprender" estrutura e criar novos

A IA só pode:
- **COPIAR** o que está no HTML
