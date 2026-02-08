# 🧪 TESTE DE SANIDADE - Catálogo Dana Jalecos

## 🎯 OBJETIVO DO TESTE

Verificar se você consegue:
1. Acessar o catálogo
2. Encontrar um produto
3. COPIAR o link EXATO (sem modificar)
4. Retornar o link

---

## ⚙️ ANTES DE COMEÇAR

**Configure isto:**
- Criatividade: 0.0
- Temperatura: 0.0

---

## 📝 TESTE 1: Busca Simples

**Entrada:**
```
jaleco masculino branco
```

**O que você DEVE fazer:**
1. Acesse: `https://dreitte.vercel.app/`
2. Procure: "🥼 Jaleco" → "Masculino" → "Branco"
3. Encontre os produtos
4. COPIE os links EXATAMENTE como estão no HTML
5. Retorne no formato:

```
RESULTADO DO TESTE:

Produto 1: [nome]
Link: [link EXATO]

Produto 2: [nome]
Link: [link EXATO]
```

---

## ✅ CRITÉRIO DE SUCESSO

**O link que você enviar deve ser:**
- ✅ Idêntico ao do catálogo
- ✅ Começar com `https://www.danajalecos.com.br/`
- ✅ Terminar com `/`
- ✅ Sem palavras extras
- ✅ Sem modificações

---

## ❌ FALHA COMUM

**Link no catálogo:**
```
https://www.danajalecos.com.br/shop/jalecos/masculinos/isac/jaleco-isac-branco/
```

**Você envia (ERRADO):**
```
https://www.danajalecos.com.br/shop/jalecos/masculinos/isac/jaleco-isac-branco-classico/
                                                                                ^^^^^^^^
                                                                                ADICIONOU PALAVRA!
```

**Isso é FALHA no teste!**

---

## 🔬 COMO PASSAR NO TESTE

1. Use `fetch_webpage` em `https://dreitte.vercel.app/`
2. Leia o HTML retornado
3. Encontre os links dos produtos
4. **COPIE byte por byte. NÃO interprete. NÃO modifique.**
5. Envie EXATAMENTE o que copiou

---

## 📊 RESULTADO ESPERADO

```
TESTE: jaleco masculino branco

Produto 1: Jaleco Masculino Gian Branco
Link: https://www.danajalecos.com.br/shop/jalecos/masculinos/gian/jaleco-gian-branco/

Produto 2: Jaleco Masculino Isac Branco
Link: https://www.danajalecos.com.br/shop/jalecos/masculinos/isac/jaleco-isac-branco/

Produto 3: Jaleco Masculino João Branco  
Link: https://www.danajalecos.com.br/shop/jalecos/masculinos/joao/jaleco-joao-branco/

[... e assim por diante para TODOS os produtos encontrados]
```

---

## 🚨 SE O TESTE FALHAR

**Possíveis causas:**
1. ❌ Criatividade > 0.0 (você está modificando links)
2. ❌ Não usou fetch_webpage
3. ❌ Não leu o HTML corretamente
4. ❌ Inventou links ao invés de copiar
5. ❌ Adicionou palavras extras

**Solução:**
- Coloque criatividade em 0.0
- Use fetch_webpage corretamente
- **COPIE, não crie links**

---

## 🎯 COMECE O TESTE AGORA

Digite: **jaleco masculino branco**

E mostre os links que você encontrou no catálogo.
