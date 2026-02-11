// VERSÃO 2: HTML + JAVASCRIPT
// Produtos são adicionados via JavaScript (DOM manipulation)
// Testa se Stevo executa JavaScript básico

export default function handler(req, res) {
  const html = `
<!DOCTYPE html>
<html lang="pt-BR">
<head>
  <meta charset="UTF-8">
  <title>Catalogo Jana Dalecos - Versao 2 Com JavaScript</title>
</head>
<body>

<!-- MARCADOR DE VERSÃO -->
<p style="background: orange; padding: 10px; font-weight: bold;">
  ⚙️ VERSÃO 2: HTML + JAVASCRIPT (Produtos adicionados via JS)
</p>

<!-- ESTRUTURA VAZIA - SERÁ PREENCHIDA POR JAVASCRIPT -->
<div id="search-area">
  <div class="pesquisa-produtos template-pesquisa-02">
    
    <h1>Catalogo Jana Dalecos</h1>
    
    <div id="vitrine-react-app-2001296325">
      <div>
        <div>
          <ul id="lista-produtos">
            <!-- Produtos serão inseridos aqui via JavaScript -->
            <li style="color: red;">Se você está vendo isso, o JavaScript NÃO foi executado</li>
          </ul>
        </div>
      </div>
    </div>
    
  </div>
</div>

<!-- RESUMO -->
<hr>
<div id="resumo">
  <p style="color: red;">Se você vê esta mensagem vermelha, o JavaScript NÃO foi executado</p>
</div>

<!-- JAVASCRIPT QUE ADICIONA PRODUTOS -->
<script>
// Dados dos produtos
const produtos = [
  {
    nome: "JALECO MASCULINO MANOEL AZUL MARINHO",
    link: "https://www.danajalecos.com.br/shop/jalecos/masculinos/manoel/jaleco-manoel-azul-marinho/",
    preco: "R$ 209,00"
  },
  {
    nome: "JALECO MASCULINO SAMUEL AMARELO",
    link: "https://www.danajalecos.com.br/shop/jalecos/masculinos/samuel/jaleco-samuel-amarelo/",
    preco: "R$ 145,00"
  },
  {
    nome: "SCRUB MASCULINO MANGA CURTA AZUL MARINHO",
    link: "https://www.danajalecos.com.br/shop/scrubs/masculinos/manga-curta/scrub-azul-marinho/",
    preco: "R$ 177,65"
  }
];

// Função que adiciona produtos ao DOM
function renderizarProdutos() {
  const lista = document.getElementById('lista-produtos');
  
  // Limpa conteúdo inicial (mensagem de erro)
  lista.innerHTML = '';
  
  // Adiciona cada produto
  produtos.forEach(produto => {
    const li = document.createElement('li');
    li.className = 'relative items-center justify-center';
    
    li.innerHTML = \`
      <a href="\${produto.link}" 
         class="text-cor-base w-full block"
         title="\${produto.nome}">
        
        <div class="product-info flex flex-col">
          <h3 class="text-cor-base w-full block">
            \${produto.nome}
          </h3>
          
          <div class="vitrine-default">
            <p class="price">
              <span>\${produto.preco}</span> no PIX
            </p>
          </div>
        </div>
      </a>
    \`;
    
    lista.appendChild(li);
  });
  
  // Atualiza resumo
  document.getElementById('resumo').innerHTML = \`
    <h2 style="color: green;">✅ JavaScript FOI EXECUTADO!</h2>
    <p>\${produtos.length} produtos foram adicionados via JavaScript</p>
    <p>Estrutura HTML identica ao site real</p>
  \`;
}

// Executa quando página carrega
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', renderizarProdutos);
} else {
  renderizarProdutos();
}
</script>

</body>
</html>
`;

  res.setHeader('Content-Type', 'text/html; charset=utf-8');
  res.status(200).send(html);
}
