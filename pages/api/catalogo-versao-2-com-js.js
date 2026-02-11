// VERSÃO 2: HTML + JAVASCRIPT
export default function handler(req, res) {
  res.setHeader('Content-Type', 'text/html; charset=utf-8');
  res.status(200).send(`<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>Versao 2 - Com JavaScript</title>
</head>
<body>

<p style="background: orange; padding: 10px; font-weight: bold;">VERSAO 2: HTML + JAVASCRIPT</p>

<div id="search-area">
  <div class="pesquisa-produtos template-pesquisa-02">
    <h1>Catalogo Jana Dalecos</h1>
    <div id="vitrine-react-app-2001296325">
      <ul id="lista-produtos">
        <li style="color: red;">Se voce ve isso, JavaScript NAO foi executado</li>
      </ul>
    </div>
  </div>
</div>

<hr>
<div id="resumo">
  <p style="color: red;">JavaScript NAO executado</p>
</div>

<script>
var produtos = [
  {nome: "JALECO MASCULINO MANOEL AZUL MARINHO", link: "https://www.danajalecos.com.br/shop/jalecos/masculinos/manoel/jaleco-manoel-azul-marinho/", preco: "R$ 209,00"},
  {nome: "JALECO MASCULINO SAMUEL AMARELO", link: "https://www.danajalecos.com.br/shop/jalecos/masculinos/samuel/jaleco-samuel-amarelo/", preco: "R$ 145,00"},
  {nome: "SCRUB MASCULINO MANGA CURTA AZUL MARINHO", link: "https://www.danajalecos.com.br/shop/scrubs/masculinos/manga-curta/scrub-azul-marinho/", preco: "R$ 177,65"}
];

function renderizar() {
  var lista = document.getElementById('lista-produtos');
  lista.innerHTML = '';
  
  for (var i = 0; i < produtos.length; i++) {
    var li = document.createElement('li');
    var a = document.createElement('a');
    a.href = produtos[i].link;
    
    var h3 = document.createElement('h3');
    h3.textContent = produtos[i].nome;
    
    var p = document.createElement('p');
    p.className = 'price';
    p.textContent = produtos[i].preco + ' no PIX';
    
    a.appendChild(h3);
    a.appendChild(p);
    li.appendChild(a);
    lista.appendChild(li);
  }
  
  document.getElementById('resumo').innerHTML = '<p style="color: green;">JavaScript FOI EXECUTADO! ' + produtos.length + ' produtos adicionados</p>';
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', renderizar);
} else {
  renderizar();
}
</script>

</body>
</html>`);
}
