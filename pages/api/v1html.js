// Versão 1: HTML Puro
export default function handler(req, res) {
  res.setHeader('Content-Type', 'text/html; charset=utf-8');
  res.status(200).send(`<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>Versao 1 HTML Puro</title>
</head>
<body>

<h1 style="background: yellow; padding: 10px;">VERSAO 1: HTML PURO</h1>

<div id="search-area">
  <h2>Catalogo Jana Dalecos</h2>
  
  <ul>
    <li>
      <a href="https://www.danajalecos.com.br/shop/jalecos/masculinos/manoel/jaleco-manoel-azul-marinho/">
        <strong>JALECO MASCULINO MANOEL AZUL MARINHO</strong><br/>
        Preço: R$ 209,00 no PIX
      </a>
    </li>
    
    <li>
      <a href="https://www.danajalecos.com.br/shop/jalecos/masculinos/samuel/jaleco-samuel-amarelo/">
        <strong>JALECO MASCULINO SAMUEL AMARELO</strong><br/>
        Preço: R$ 145,00 no PIX
      </a>
    </li>
    
    <li>
      <a href="https://www.danajalecos.com.br/shop/scrubs/masculinos/manga-curta/scrub-azul-marinho/">
        <strong>SCRUB MASCULINO MANGA CURTA AZUL MARINHO</strong><br/>
        Preço: R$ 177,65 no PIX
      </a>
    </li>
  </ul>
</div>

<hr>
<p>✅ 3 produtos | HTML estático | Zero JavaScript</p>

</body>
</html>`);
}
