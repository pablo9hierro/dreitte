# 🔬 ELEMENTOS HTML - JANA DALECOS

## Site analisado: www.danajalecos.com.br

---

## 📍 SELETORES CSS IDENTIFICADOS

### 1. Container Principal de Produtos
```css
#search-area > div.pesquisa-produtos.template-pesquisa-02
```

**O que contém:**
- Grid/lista de todos os produtos da página
- Estrutura organizada dos cards
- Informações completas de cada item

---

### 2. Card Individual de Produto
```css
#vitrine-react-app-2001296325 > div > div > ul > li:nth-child(3) > a > div > div
```

**Observações:**
- `vitrine-react-app-2001296325` → O ID numérico pode variar
- Use seletor mais genérico: `[id^="vitrine-react-app"]` (começa com)
- Cada `<li>` é um produto separado
- O `:nth-child(3)` pega o 3º produto - remova para pegar todos

**Seletor Genérico Melhor:**
```css
[id^="vitrine-react-app"] > div > div > ul > li
```

---

## 🏗️ ESTRUTURA COMPLETA DO HTML

### Hierarquia de Elementos:

```html
<body>
  <div id="search-area">
    <div class="pesquisa-produtos template-pesquisa-02">
      
      <!-- App React que renderiza produtos -->
      <div id="vitrine-react-app-2001296325">
        <div>
          <div>
            <ul>
              
              <!-- PRODUTO 1 -->
              <li class="relative items-center justify-center">
                <a href="/shop/jalecos/masculinos/manoel/jaleco-manoel-azul-marinho/">
                  <figure class="relative flex items-center">
                    <img src="..." alt="Jaleco Masculino Manoel Azul Marinho" />
                  </figure>
                  <div class="product-info flex flex-col">
                    <h3 class="text-cor-base w-full block">
                      JALECO MASCULINO MANOEL AZUL MARINHO
                    </h3>
                    <div class="vitrine-default">
                      <div class="avaliacao-produto">
                        <!-- Estrelas de avaliação -->
                      </div>
                      <p class="price">
                        <span>R$ 209,00</span> no PIX
                      </p>
                    </div>
                  </div>
                </a>
              </li>
              
              <!-- PRODUTO 2 -->
              <li class="relative items-center justify-center">
                <!-- Mesma estrutura -->
              </li>
              
              <!-- Mais produtos... -->
              
            </ul>
          </div>
        </div>
      </div>
      
    </div>
  </div>
</body>
```

---

## 📦 DADOS DE CADA PRODUTO

### Para extrair informações de um `<li>`:

#### 1. Link do Produto:
```javascript
// Seletor
li > a[href]

// Exemplo de valor
href="/shop/jalecos/masculinos/manoel/jaleco-manoel-azul-marinho/"

// URL completa
https://www.danajalecos.com.br/shop/jalecos/masculinos/manoel/jaleco-manoel-azul-marinho/
```

#### 2. Nome do Produto:
```javascript
// Seletor
li > a > div.product-info > h3

// Exemplo de valor
"JALECO MASCULINO MANOEL AZUL MARINHO"
```

#### 3. Preço:
```javascript
// Seletor
li > a > div.product-info > div > p.price > span

// Exemplo de valor
"R$ 209,00"
```

#### 4. Imagem:
```javascript
// Seletor
li > a > figure > img

// Atributos úteis
src="https://www.danajalecos.com.br/image/..." 
alt="Jaleco Masculino Manoel Azul Marinho"
```

---

## 🎯 SELETORES PRÁTICOS PARA STEVO

### Buscar todos os produtos da página:
```css
#search-area ul > li
```

### Pegar nome de cada produto:
```css
#search-area ul > li h3
```
ou
```css
.product-info h3
```

### Pegar link de cada produto:
```css
#search-area ul > li > a
```

### Pegar preço:
```css
.price span
```
ou procure texto que contenha "R$"

---

## 🔍 COMO O STEVO DEVE LER

### Pseudo-código:

```
1. Acessar URL categoria (ex: /masculino)

2. Encontrar elemento: #search-area

3. Dentro dele, encontrar: ul

4. Para cada <li>:
   
   a) Ler <a href="..."> → LINK DO PRODUTO
   
   b) Ler <h3> → NOME DO PRODUTO
   
   c) Ler .price span → PREÇO
   
   d) Se cliente pediu COR específica:
      - Verificar se NOME contém a cor
      - Se sim, incluir nos resultados
      - Se não, ignorar este produto
   
5. Retornar lista de produtos filtrados
```

---

## 📄 URLS DAS CATEGORIAS

### Estrutura das URLs:

| Categoria | URL |
|-----------|-----|
| Masculino | https://www.danajalecos.com.br/masculino |
| Feminino | https://www.danajalecos.com.br/feminino |
| Dólmãs | https://www.danajalecos.com.br/dolmas |
| Acessórios | https://www.danajalecos.com.br/acessorios |
| Infantil | https://www.danajalecos.com.br/infantil |
| Jaleco Box | https://www.danajalecos.com.br/jalecobox |
| Office | https://www.danajalecos.com.br/office |

---

## ⚙️ CARACTERÍSTICAS DO SITE

### Tecnologia:
- **Framework**: React
- **Renderização**: Client-side (JavaScript)
- **App ID**: `vitrine-react-app-[número]` (dinâmico)
- **Classes CSS**: TailwindCSS (flex, relative, items-center, etc.)

### Comportamento:
- Produtos carregam via JavaScript
- Pode ter lazy loading (carrega ao rolar página)
- Pode ter paginação ou infinite scroll

### Implicações para Scraping:
- ⚠️ **Scraper básico (sem JS)**: Não vai ver produtos
- ✅ **Scraper com JavaScript engine**: Vai funcionar
- ✅ **Browser headless**: Vai funcionar perfeitamente

---

## 🧪 TESTE DE CAPACIDADE DO STEVO

### Teste 1 - Site estático vs dinâmico:

**Criar duas páginas:**
1. Página estática (HTML puro) - dreitte.vercel.app/catalogo
2. Página dinâmica (React) - danajalecos.com.br/masculino

**Pedir ao Stevo:**
"Liste os produtos que você vê em cada página"

**Resultado vai indicar:**
- Se Stevo executa JavaScript → Vê ambas
- Se Stevo só lê HTML → Vê só a estática

---

## 💡 ESTRATÉGIAS ALTERNATIVAS

### Se Stevo NÃO executa JavaScript:

#### Opção A - SSR Proxy:
Criar endpoint que:
1. Acessa danajalecos.com.br com Puppeteer
2. Espera JavaScript carregar
3. Extrai HTML renderizado
4. Retorna HTML estático
5. Stevo lê esse HTML

#### Opção B - API Intermediária:
Criar endpoint que:
1. Scraping com Puppeteer
2. Extrai dados estruturados
3. Retorna JSON simples
4. Stevo lê JSON via Custom Tools

#### Opção C - Catálogo Espelho:
Criar catálogo estático que:
1. Copia dados do site real
2. Renderiza como HTML simples
3. Atualiza periodicamente
4. Stevo lê versão simples

---

## 📋 CHECKLIST DE COMPATIBILIDADE

Verificar se Stevo consegue:
- [ ] Fazer request HTTP para danajalecos.com.br
- [ ] Receber resposta 200 OK
- [ ] Executar JavaScript da página
- [ ] Esperar app React renderizar
- [ ] Ler elementos dinâmicos (`#vitrine-react-app`)
- [ ] Extrair atributos (`href`, `src`, texto)
- [ ] Filtrar elementos por conteúdo de texto

Se algum item falhar → Usar abordagem alternativa

---

## 🎬 EXEMPLO REAL - PÁGINA MASCULINO

### URL:
```
https://www.danajalecos.com.br/masculino
```

### Produtos Visíveis (nas imagens fornecidas):

1. **Scrub Masculino Manga Curta Azul Marinho**
   - Desconto: -15%
   - Preço: R$ 177,65 no PIX
   - Parcelas: 3x de R$ 62,33

2. **Jaleco Masculino Manoel Branco - Clássico, Elegante e Confortável**
   - Desconto: -15%
   - Preço: R$ 145,35 no PIX
   - Parcelas: 2x de R$ 76,50

3. **Jaleco Masculino Manoel Azul Marinho**
   - Preço: R$ 209,00 no PIX
   - Parcelas: 3x de R$ 73,33

### Estrutura HTML Real:

```html
<li class="relative items-center justify-center overflow-hidden">
  <a href="/shop/jalecos/masculinos/manoel/jaleco-manoel-azul-marinho/" 
     class="text-cor-base w-full block"
     title="Jaleco Masculino Manoel Azul Marinho">
    
    <figure class="relative flex items-center justify-center overflow-hidden">
      <img src="..." alt="Jaleco Masculino Manoel Azul Marinho" />
    </figure>
    
    <div class="product-info flex flex-col items-center justify-center">
      <h3 class="text-cor-base w-full block max-[800px]:h-full">
        JALECO MASCULINO MANOEL AZUL MARINHO
      </h3>
      
      <div class="vitrine-default tipo-vitrine-2">
        <div class="avaliacao-produto">
          <!-- Avaliação -->
        </div>
        <p class="er-p-2.5">
          <span class="font-montserrat">R$ 209,00</span> no PIX
        </p>
      </div>
    </div>
  </a>
</li>
```

---

## 🚀 INSTRUÇÕES PARA O STEVO

### Quando cliente pedir produto:

1. **Identificar categoria**:
   - "jaleco masculino" → /masculino
   - "scrub feminino" → /feminino
   - "gorro" → /acessorios

2. **Acessar URL**:
   ```
   https://www.danajalecos.com.br/[categoria]
   ```

3. **Esperar página carregar** (se tiver capacidade JS)

4. **Procurar elemento**:
   ```css
   #search-area ul
   ```

5. **Para cada <li>**:
   - Extrair href do <a>
   - Extrair texto do <h3>
   - Extrair preço de .price span

6. **Filtrar por solicitação**:
   - Cliente pediu "azul" → mostrar só produtos com "Azul" no nome
   - Cliente pediu "manga curta" → filtrar por "Manga Curta"

7. **Retornar máximo 3 produtos** com:
   - Nome completo
   - Preço
   - Link (href completo com https://www.danajalecos.com.br)

---

**Data**: 10/02/2026
**Fonte**: Análise real do site danajalecos.com.br
**DevTools**: Inspecionado manualmente
