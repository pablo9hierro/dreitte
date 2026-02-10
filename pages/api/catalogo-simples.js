// Versão ULTRA SIMPLIFICADA do catálogo - SEM tracking, SEM JavaScript
// Para testar se o problema é o código extra que adicionamos

export default function handler(req, res) {
  const html = `<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>Catalogo Jana Dalecos</title>
</head>
<body>

<h1>Catalogo de Produtos - Jana Dalecos</h1>

<p><strong>INSTRUCOES:</strong> Cada produto tem tipo, genero e cor. Copie o link exato do produto.</p>

<hr>

<div class="produto" data-tipo="jaleco" data-genero="masculino" data-cor="amarelo">
<h3>Jaleco Masculino Samuel Amarelo</h3>
<p>Tipo: jaleco | Genero: masculino | Cor: amarelo</p>
<p>Link: <a href="https://www.danajalecos.com.br/shop/jalecos/masculinos/samuel/jaleco-samuel-amarelo/">https://www.danajalecos.com.br/shop/jalecos/masculinos/samuel/jaleco-samuel-amarelo/</a></p>
</div>

<hr>

<div class="produto" data-tipo="jaleco" data-genero="masculino" data-cor="azul">
<h3>Jaleco Masculino Samuel Azul</h3>
<p>Tipo: jaleco | Genero: masculino | Cor: azul</p>
<p>Link: <a href="https://www.danajalecos.com.br/shop/jalecos/masculinos/samuel/jaleco-samuel-azul/">https://www.danajalecos.com.br/shop/jalecos/masculinos/samuel/jaleco-samuel-azul/</a></p>
</div>

<hr>

<div class="produto" data-tipo="jaleco" data-genero="masculino" data-cor="verde">
<h3>Jaleco Masculino Samuel Verde</h3>
<p>Tipo: jaleco | Genero: masculino | Cor: verde</p>
<p>Link: <a href="https://www.danajalecos.com.br/shop/jalecos/masculinos/samuel/jaleco-samuel-verde/">https://www.danajalecos.com.br/shop/jalecos/masculinos/samuel/jaleco-samuel-verde/</a></p>
</div>

<hr>

<div class="produto" data-tipo="scrub" data-genero="masculino" data-cor="azul">
<h3>Scrub Masculino Pedro Azul</h3>
<p>Tipo: scrub | Genero: masculino | Cor: azul</p>
<p>Link: <a href="https://www.danajalecos.com.br/shop/scrubs/masculinos/pedro/scrub-pedro-azul/">https://www.danajalecos.com.br/shop/scrubs/masculinos/pedro/scrub-pedro-azul/</a></p>
</div>

<hr>

<div class="produto" data-tipo="scrub" data-genero="masculino" data-cor="verde">
<h3>Scrub Masculino Pedro Verde</h3>
<p>Tipo: scrub | Genero: masculino | Cor: verde</p>
<p>Link: <a href="https://www.danajalecos.com.br/shop/scrubs/masculinos/pedro/scrub-pedro-verde/">https://www.danajalecos.com.br/shop/scrubs/masculinos/pedro/scrub-pedro-verde/</a></p>
</div>

<hr>

<div class="produto" data-tipo="jaleco" data-genero="feminino" data-cor="rosa">
<h3>Jaleco Feminino Giovana Rosa</h3>
<p>Tipo: jaleco | Genero: feminino | Cor: rosa</p>
<p>Link: <a href="https://www.danajalecos.com.br/shop/jalecos/femininos/giovana/jaleco-giovana-rosa/">https://www.danajalecos.com.br/shop/jalecos/femininos/giovana/jaleco-giovana-rosa/</a></p>
</div>

<hr>

<div class="produto" data-tipo="jaleco" data-genero="feminino" data-cor="azul">
<h3>Jaleco Feminino Giovana Azul</h3>
<p>Tipo: jaleco | Genero: feminino | Cor: azul</p>
<p>Link: <a href="https://www.danajalecos.com.br/shop/jalecos/femininos/giovana/jaleco-giovana-azul/">https://www.danajalecos.com.br/shop/jalecos/femininos/giovana/jaleco-giovana-azul/</a></p>
</div>

<hr>

<div class="produto" data-tipo="scrub" data-genero="feminino" data-cor="rosa">
<h3>Scrub Feminino Ana Rosa</h3>
<p>Tipo: scrub | Genero: feminino | Cor: rosa</p>
<p>Link: <a href="https://www.danajalecos.com.br/shop/scrubs/femininos/ana/scrub-ana-rosa/">https://www.danajalecos.com.br/shop/scrubs/femininos/ana/scrub-ana-rosa/</a></p>
</div>

<hr>

<div class="produto" data-tipo="gorro" data-genero="unissex" data-cor="verde">
<h3>Gorro Cirurgico Verde</h3>
<p>Tipo: gorro | Genero: unissex | Cor: verde</p>
<p>Link: <a href="https://www.danajalecos.com.br/shop/gorros/cirurgicos/gorro-verde/">https://www.danajalecos.com.br/shop/gorros/cirurgicos/gorro-verde/</a></p>
</div>

<hr>

<div class="produto" data-tipo="gorro" data-genero="unissex" data-cor="azul">
<h3>Gorro Cirurgico Azul</h3>
<p>Tipo: gorro | Genero: unissex | Cor: azul</p>
<p>Link: <a href="https://www.danajalecos.com.br/shop/gorros/cirurgicos/gorro-azul/">https://www.danajalecos.com.br/shop/gorros/cirurgicos/gorro-azul/</a></p>
</div>

<hr>

<p><strong>Total: 10 produtos</strong></p>

</body>
</html>`;

  res.setHeader('Content-Type', 'text/html; charset=utf-8');
  res.status(200).send(html);
}
