// VERSÃO 1: HTML PURO - ZERO JAVASCRIPT
export default function handler(req, res) {
  res.setHeader('Content-Type', 'text/html; charset=utf-8');
  res.status(200).send(`<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>Versao 1 - HTML Puro</title>
</head>
<body>

<p style="background: yellow; padding: 10px; font-weight: bold;">VERSAO 1: HTML PURO (Zero JavaScript)</p>

<div id="search-area">
  <div class="pesquisa-produtos template-pesquisa-02">
    <h1>Catalogo Jana Dalecos</h1>
    
    <div id="vitrine-react-app-2001296325">
      <ul>
        <li>
          <a href="https://www.danajalecos.com.br/shop/jalecos/masculinos/manoel/jaleco-manoel-azul-marinho/">
            <h3>JALECO MASCULINO MANOEL AZUL MARINHO</h3>
            <p class="price">R$ 209,00 no PIX</p>
          </a>
        </li>
        
        <li>
          <a href="https://www.danajalecos.com.br/shop/jalecos/masculinos/samuel/jaleco-samuel-amarelo/">
            <h3>JALECO MASCULINO SAMUEL AMARELO</h3>
            <p class="price">R$ 145,00 no PIX</p>
          </a>
        </li>
        
        <li>
          <a href="https://www.danajalecos.com.br/shop/scrubs/masculinos/manga-curta/scrub-azul-marinho/">
            <h3>SCRUB MASCULINO MANGA CURTA AZUL MARINHO</h3>
            <p class="price">R$ 177,65 no PIX</p>
          </a>
        </li>
      </ul>
    </div>
  </div>
</div>

<hr>
<p>3 produtos listados | HTML estatico | Zero JavaScript</p>

</body>
</html>`);
}
