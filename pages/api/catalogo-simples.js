export default function handler(req, res) {
  res.setHeader('Content-Type', 'text/html; charset=utf-8');
  
  const html = [
    '<!DOCTYPE html>',
    '<html>',
    '<head>',
    '<meta charset="UTF-8">',
    '<title>Catalogo Jana Dalecos</title>',
    '</head>',
    '<body>',
    '<h1>Catalogo Jana Dalecos</h1>',
    '<h2>Jalecos Masculinos</h2>',
    '<p>Jaleco Masculino Samuel Amarelo<br>',
    'Link: https://www.danajalecos.com.br/shop/jalecos/masculinos/samuel/jaleco-samuel-amarelo/</p>',
    '<p>Jaleco Masculino Samuel Azul<br>',
    'Link: https://www.danajalecos.com.br/shop/jalecos/masculinos/samuel/jaleco-samuel-azul/</p>',
    '<p>Jaleco Masculino Samuel Verde<br>',
    'Link: https://www.danajalecos.com.br/shop/jalecos/masculinos/samuel/jaleco-samuel-verde/</p>',
    '<h2>Scrubs Masculinos</h2>',
    '<p>Scrub Masculino Pedro Azul<br>',
    'Link: https://www.danajalecos.com.br/shop/scrubs/masculinos/pedro/scrub-pedro-azul/</p>',
    '<p>Scrub Masculino Pedro Verde<br>',
    'Link: https://www.danajalecos.com.br/shop/scrubs/masculinos/pedro/scrub-pedro-verde/</p>',
    '<h2>Jalecos Femininos</h2>',
    '<p>Jaleco Feminino Giovana Rosa<br>',
    'Link: https://www.danajalecos.com.br/shop/jalecos/femininos/giovana/jaleco-giovana-rosa/</p>',
    '<p>Jaleco Feminino Giovana Azul<br>',
    'Link: https://www.danajalecos.com.br/shop/jalecos/femininos/giovana/jaleco-giovana-azul/</p>',
    '<h2>Scrubs Femininos</h2>',
    '<p>Scrub Feminino Ana Rosa<br>',
    'Link: https://www.danajalecos.com.br/shop/scrubs/femininos/ana/scrub-ana-rosa/</p>',
    '<h2>Gorros Unissex</h2>',
    '<p>Gorro Cirurgico Verde<br>',
    'Link: https://www.danajalecos.com.br/shop/gorros/cirurgicos/gorro-verde/</p>',
    '<p>Gorro Cirurgico Azul<br>',
    'Link: https://www.danajalecos.com.br/shop/gorros/cirurgicos/gorro-azul/</p>',
    '</body>',
    '</html>'
  ].join('\n');
  
  res.status(200).send(html);
}
