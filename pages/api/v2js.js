// Versão 2: HTML + JavaScript
export default function handler(req, res) {
  res.setHeader('Content-Type', 'text/html; charset=utf-8');
  
  const html = [
    '<!DOCTYPE html>',
    '<html>',
    '<head>',
    '<meta charset="UTF-8">',
    '<title>Versao 2 Com JavaScript</title>',
    '</head>',
    '<body>',
    '',
    '<h1 style="background: orange; padding: 10px;">VERSAO 2: COM JAVASCRIPT</h1>',
    '',
    '<div id="search-area">',
    '  <h2>Catalogo Jana Dalecos</h2>',
    '  <ul id="lista">',
    '    <li style="color: red;">Se você vê isso, JavaScript NAO foi executado</li>',
    '  </ul>',
    '</div>',
    '',
    '<hr>',
    '<div id="status">',
    '  <p style="color: red;">Aguardando JavaScript...</p>',
    '</div>',
    '',
    '<script>',
    'var produtos = [',
    '  {nome: "JALECO MASCULINO MANOEL AZUL MARINHO", link: "https://www.danajalecos.com.br/shop/jalecos/masculinos/manoel/jaleco-manoel-azul-marinho/", preco: "R$ 209,00"},',
    '  {nome: "JALECO MASCULINO SAMUEL AMARELO", link: "https://www.danajalecos.com.br/shop/jalecos/masculinos/samuel/jaleco-samuel-amarelo/", preco: "R$ 145,00"},',
    '  {nome: "SCRUB MASCULINO MANGA CURTA AZUL MARINHO", link: "https://www.danajalecos.com.br/shop/scrubs/masculinos/manga-curta/scrub-azul-marinho/", preco: "R$ 177,65"}',
    '];',
    '',
    'function carregar() {',
    '  var lista = document.getElementById("lista");',
    '  lista.innerHTML = "";',
    '  for (var i = 0; i < produtos.length; i++) {',
    '    var li = document.createElement("li");',
    '    var html = "<a href=\\"" + produtos[i].link + "\\"><strong>" + produtos[i].nome + "</strong><br/>Preço: " + produtos[i].preco + " no PIX</a>";',
    '    li.innerHTML = html;',
    '    lista.appendChild(li);',
    '  }',
    '  document.getElementById("status").innerHTML = "<p style=\\"color: green;\\">✅ JavaScript FOI EXECUTADO! " + produtos.length + " produtos</p>";',
    '}',
    'setTimeout(carregar, 100);',
    '</script>',
    '',
    '</body>',
    '</html>'
  ].join('\n');
  
  res.status(200).send(html);
}
