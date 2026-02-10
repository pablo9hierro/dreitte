// Endpoint: Catálogo HTML estruturado para Stevo ler via Sites e URLs
// URL: https://dreitte.vercel.app/api/catalogo-stevo

export default function handler(req, res) {
  res.setHeader('Content-Type', 'text/html; charset=utf-8');
  res.status(200).send(`
<!DOCTYPE html>
<html lang="pt-BR">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Catálogo Jana Dalecos - Base de Dados para Stevo</title>
  <style>
    body { font-family: Arial, sans-serif; max-width: 1200px; margin: 0 auto; padding: 20px; }
    #tutorial-stevo { background: #f0f8ff; padding: 20px; border-radius: 8px; margin-bottom: 40px; border: 3px solid #0066cc; }
    #tutorial-stevo h1 { color: #0066cc; margin-top: 0; }
    #tutorial-stevo code { background: #fff; padding: 2px 6px; border-radius: 3px; }
    .produto { border: 1px solid #ddd; padding: 15px; margin-bottom: 15px; border-radius: 5px; }
    .produto-nome { font-weight: bold; color: #333; margin: 0 0 10px 0; }
    .produto-link { color: #0066cc; text-decoration: none; }
    .produto-info { color: #666; font-size: 14px; }
  </style>
</head>
<body>

<!-- ═══════════════════════════════════════════════════════════ -->
<!-- TUTORIAL PARA A IA DO STEVO -->
<!-- ═══════════════════════════════════════════════════════════ -->

<div id="tutorial-stevo">
  <h1>📖 Tutorial: Como Usar Este Catálogo (IA Stevo)</h1>
  
  <p><strong>Esta página serve como base de dados para o agente Beatriz pesquisar produtos no catálogo da Jana Dalecos.</strong></p>
  
  <h2>🔍 Como Buscar Produtos:</h2>
  
  <ol>
    <li><strong>Cada produto está em um elemento com classe <code>produto</code></strong></li>
    <li><strong>Use os atributos HTML para filtrar:</strong>
      <ul>
        <li><code>data-tipo</code> = tipo do produto (jaleco, scrub, gorro, avental, etc)</li>
        <li><code>data-genero</code> = gênero (masculino, feminino, unissex)</li>
        <li><code>data-cor</code> = cor (amarelo, azul, verde, branco, preto, rosa, etc)</li>
        <li><code>data-sku</code> = código único do produto</li>
      </ul>
    </li>
    <li><strong>O nome do produto está no elemento com classe <code>produto-nome</code></strong></li>
    <li><strong>O link está no atributo <code>href</code> do elemento <code>&lt;a class="produto-link"&gt;</code></strong></li>
  </ol>
  
  <h2>📋 Exemplo de Busca:</h2>
  
  <p><strong>Cliente pergunta:</strong> "Quero um jaleco masculino amarelo"</p>
  
  <p><strong>Você deve:</strong></p>
  <ol>
    <li>Procurar elementos com: <code>data-tipo="jaleco"</code> + <code>data-genero="masculino"</code> + <code>data-cor="amarelo"</code></li>
    <li>Ler o texto do <code>.produto-nome</code> (nome do produto)</li>
    <li>Copiar EXATAMENTE o link do <code>.produto-link href</code></li>
    <li>Responder: "Encontrei! [Nome]. Aqui está o link: [link]"</li>
  </ol>
  
  <h2>⚠️ REGRAS IMPORTANTES:</h2>
  
  <ul>
    <li>✅ SEMPRE copie o link EXATAMENTE como está no atributo <code>href</code></li>
    <li>✅ Todos os links começam com: <code>https://www.danajalecos.com.br/shop/</code></li>
    <li>❌ NUNCA invente links</li>
    <li>❌ NUNCA modifique o link</li>
    <li>❌ Se não encontrar o produto, diga honestamente que não tem disponível</li>
  </ul>
  
  <h2>🎯 Normalização de Cores:</h2>
  <p>Cliente pode falar de várias formas, mas você deve buscar pelo valor exato do <code>data-cor</code>:</p>
  <ul>
    <li>"pra homem" = <code>data-genero="masculino"</code></li>
    <li>"pra mulher" = <code>data-genero="feminino"</code></li>
    <li>"Amarelo", "amarelo", "AMARELO" = <code>data-cor="amarelo"</code> (case-insensitive)</li>
  </ul>
</div>

<!-- ═══════════════════════════════════════════════════════════ -->
<!-- CATÁLOGO DE PRODUTOS -->
<!-- ═══════════════════════════════════════════════════════════ -->

<h1>🏥 Catálogo de Produtos - Jana Dalecos</h1>

<!-- JALECOS MASCULINOS -->

<div class="produto" data-tipo="jaleco" data-genero="masculino" data-cor="amarelo" data-sku="991-SD-059-000">
  <h3 class="produto-nome">Jaleco Masculino Samuel Amarelo</h3>
  <p class="produto-info">Tipo: Jaleco | Gênero: Masculino | Cor: Amarelo | SKU: 991-SD-059-000</p>
  <a class="produto-link" href="https://www.danajalecos.com.br/shop/jalecos/masculinos/samuel/jaleco-samuel-amarelo/">Ver produto</a>
</div>

<div class="produto" data-tipo="jaleco" data-genero="masculino" data-cor="armany" data-sku="991-SD-067-000-5">
  <h3 class="produto-nome">Jaleco Masculino Samuel Manga Longa Armany</h3>
  <p class="produto-info">Tipo: Jaleco | Gênero: Masculino | Cor: Armany | SKU: 991-SD-067-000-5</p>
  <a class="produto-link" href="https://www.danajalecos.com.br/shop/jalecos/masculinos/samuel-manga-longa/jaleco-samuel-manga-longa-armany/">Ver produto</a>
</div>

<div class="produto" data-tipo="jaleco" data-genero="masculino" data-cor="azul" data-sku="991-SD-059-001">
  <h3 class="produto-nome">Jaleco Masculino Samuel Azul</h3>
  <p class="produto-info">Tipo: Jaleco | Gênero: Masculino | Cor: Azul | SKU: 991-SD-059-001</p>
  <a class="produto-link" href="https://www.danajalecos.com.br/shop/jalecos/masculinos/samuel/jaleco-samuel-azul/">Ver produto</a>
</div>

<div class="produto" data-tipo="jaleco" data-genero="masculino" data-cor="bege" data-sku="991-SD-059-071">
  <h3 class="produto-nome">Jaleco Masculino Samuel Bege</h3>
  <p class="produto-info">Tipo: Jaleco | Gênero: Masculino | Cor: Bege | SKU: 991-SD-059-071</p>
  <a class="produto-link" href="https://www.danajalecos.com.br/shop/jalecos/masculinos/samuel/jaleco-samuel-bege/">Ver produto</a>
</div>

<div class="produto" data-tipo="jaleco" data-genero="masculino" data-cor="branco" data-sku="991-SD-059-008">
  <h3 class="produto-nome">Jaleco Masculino Samuel Branco</h3>
  <p class="produto-info">Tipo: Jaleco | Gênero: Masculino | Cor: Branco | SKU: 991-SD-059-008</p>
  <a class="produto-link" href="https://www.danajalecos.com.br/shop/jalecos/masculinos/samuel/jaleco-samuel-branco/">Ver produto</a>
</div>

<div class="produto" data-tipo="jaleco" data-genero="masculino" data-cor="cinza" data-sku="991-SD-059-005">
  <h3 class="produto-nome">Jaleco Masculino Samuel Cinza</h3>
  <p class="produto-info">Tipo: Jaleco | Gênero: Masculino | Cor: Cinza | SKU: 991-SD-059-005</p>
  <a class="produto-link" href="https://www.danajalecos.com.br/shop/jalecos/masculinos/samuel/jaleco-samuel-cinza/">Ver produto</a>
</div>

<div class="produto" data-tipo="jaleco" data-genero="masculino" data-cor="preto" data-sku="991-SD-059-003">
  <h3 class="produto-nome">Jaleco Masculino Samuel Preto</h3>
  <p class="produto-info">Tipo: Jaleco | Gênero: Masculino | Cor: Preto | SKU: 991-SD-059-003</p>
  <a class="produto-link" href="https://www.danajalecos.com.br/shop/jalecos/masculinos/samuel/jaleco-samuel-preto/">Ver produto</a>
</div>

<div class="produto" data-tipo="jaleco" data-genero="masculino" data-cor="verde" data-sku="991-SD-059-002">
  <h3 class="produto-nome">Jaleco Masculino Samuel Verde</h3>
  <p class="produto-info">Tipo: Jaleco | Gênero: Masculino | Cor: Verde | SKU: 991-SD-059-002</p>
  <a class="produto-link" href="https://www.danajalecos.com.br/shop/jalecos/masculinos/samuel/jaleco-samuel-verde/">Ver produto</a>
</div>

<div class="produto" data-tipo="jaleco" data-genero="masculino" data-cor="vermelho" data-sku="991-SD-059-004">
  <h3 class="produto-nome">Jaleco Masculino Samuel Vermelho</h3>
  <p class="produto-info">Tipo: Jaleco | Gênero: Masculino | Cor: Vermelho | SKU: 991-SD-059-004</p>
  <a class="produto-link" href="https://www.danajalecos.com.br/shop/jalecos/masculinos/samuel/jaleco-samuel-vermelho/">Ver produto</a>
</div>

<!-- JALECOS FEMININOS -->

<div class="produto" data-tipo="jaleco" data-genero="feminino" data-cor="amarelo" data-sku="991-SD-006-000">
  <h3 class="produto-nome">Jaleco Feminino Giovana Amarelo</h3>
  <p class="produto-info">Tipo: Jaleco | Gênero: Feminino | Cor: Amarelo | SKU: 991-SD-006-000</p>
  <a class="produto-link" href="https://www.danajalecos.com.br/shop/jalecos/femininos/giovana/jaleco-giovana-amarelo/">Ver produto</a>
</div>

<div class="produto" data-tipo="jaleco" data-genero="feminino" data-cor="azul" data-sku="991-SD-006-001">
  <h3 class="produto-nome">Jaleco Feminino Giovana Azul</h3>
  <p class="produto-info">Tipo: Jaleco | Gênero: Feminino | Cor: Azul | SKU: 991-SD-006-001</p>
  <a class="produto-link" href="https://www.danajalecos.com.br/shop/jalecos/femininos/giovana/jaleco-giovana-azul/">Ver produto</a>
</div>

<div class="produto" data-tipo="jaleco" data-genero="feminino" data-cor="rosa" data-sku="991-SD-006-006">
  <h3 class="produto-nome">Jaleco Feminino Giovana Rosa</h3>
  <p class="produto-info">Tipo: Jaleco | Gênero: Feminino | Cor: Rosa | SKU: 991-SD-006-006</p>
  <a class="produto-link" href="https://www.danajalecos.com.br/shop/jalecos/femininos/giovana/jaleco-giovana-rosa/">Ver produto</a>
</div>

<div class="produto" data-tipo="jaleco" data-genero="feminino" data-cor="verde" data-sku="991-SD-006-002">
  <h3 class="produto-nome">Jaleco Feminino Giovana Verde</h3>
  <p class="produto-info">Tipo: Jaleco | Gênero: Feminino | Cor: Verde | SKU: 991-SD-006-002</p>
  <a class="produto-link" href="https://www.danajalecos.com.br/shop/jalecos/femininos/giovana/jaleco-giovana-verde/">Ver produto</a>
</div>

<!-- SCRUBS MASCULINOS -->

<div class="produto" data-tipo="scrub" data-genero="masculino" data-cor="azul" data-sku="991-SD-089-001">
  <h3 class="produto-nome">Scrub Masculino Pedro Azul</h3>
  <p class="produto-info">Tipo: Scrub | Gênero: Masculino | Cor: Azul | SKU: 991-SD-089-001</p>
  <a class="produto-link" href="https://www.danajalecos.com.br/shop/scrubs/masculinos/pedro/scrub-pedro-azul/">Ver produto</a>
</div>

<div class="produto" data-tipo="scrub" data-genero="masculino" data-cor="verde" data-sku="991-SD-089-002">
  <h3 class="produto-nome">Scrub Masculino Pedro Verde</h3>
  <p class="produto-info">Tipo: Scrub | Gênero: Masculino | Cor: Verde | SKU: 991-SD-089-002</p>
  <a class="produto-link" href="https://www.danajalecos.com.br/shop/scrubs/masculinos/pedro/scrub-pedro-verde/">Ver produto</a>
</div>

<div class="produto" data-tipo="scrub" data-genero="masculino" data-cor="preto" data-sku="991-SD-089-003">
  <h3 class="produto-nome">Scrub Masculino Pedro Preto</h3>
  <p class="produto-info">Tipo: Scrub | Gênero: Masculino | Cor: Preto | SKU: 991-SD-089-003</p>
  <a class="produto-link" href="https://www.danajalecos.com.br/shop/scrubs/masculinos/pedro/scrub-pedro-preto/">Ver produto</a>
</div>

<div class="produto" data-tipo="scrub" data-genero="masculino" data-cor="vinho" data-sku="991-SD-089-005">
  <h3 class="produto-nome">Scrub Masculino Pedro Vinho</h3>
  <p class="produto-info">Tipo: Scrub | Gênero: Masculino | Cor: Vinho | SKU: 991-SD-089-005</p>
  <a class="produto-link" href="https://www.danajalecos.com.br/shop/scrubs/masculinos/pedro/scrub-pedro-vinho/">Ver produto</a>
</div>

<!-- SCRUBS FEMININOS -->

<div class="produto" data-tipo="scrub" data-genero="feminino" data-cor="azul" data-sku="991-SD-001-001">
  <h3 class="produto-nome">Scrub Feminino Ana Azul</h3>
  <p class="produto-info">Tipo: Scrub | Gênero: Feminino | Cor: Azul | SKU: 991-SD-001-001</p>
  <a class="produto-link" href="https://www.danajalecos.com.br/shop/scrubs/femininos/ana/scrub-ana-azul/">Ver produto</a>
</div>

<div class="produto" data-tipo="scrub" data-genero="feminino" data-cor="rosa" data-sku="991-SD-001-006">
  <h3 class="produto-nome">Scrub Feminino Ana Rosa</h3>
  <p class="produto-info">Tipo: Scrub | Gênero: Feminino | Cor: Rosa | SKU: 991-SD-001-006</p>
  <a class="produto-link" href="https://www.danajalecos.com.br/shop/scrubs/femininos/ana/scrub-ana-rosa/">Ver produto</a>
</div>

<div class="produto" data-tipo="scrub" data-genero="feminino" data-cor="verde" data-sku="991-SD-001-002">
  <h3 class="produto-nome">Scrub Feminino Ana Verde</h3>
  <p class="produto-info">Tipo: Scrub | Gênero: Feminino | Cor: Verde | SKU: 991-SD-001-002</p>
  <a class="produto-link" href="https://www.danajalecos.com.br/shop/scrubs/femininos/ana/scrub-ana-verde/">Ver produto</a>
</div>

<!-- GORROS -->

<div class="produto" data-tipo="gorro" data-genero="unissex" data-cor="verde" data-sku="991-SD-110-002">
  <h3 class="produto-nome">Gorro Cirúrgico Verde</h3>
  <p class="produto-info">Tipo: Gorro | Gênero: Unissex | Cor: Verde | SKU: 991-SD-110-002</p>
  <a class="produto-link" href="https://www.danajalecos.com.br/shop/gorros/cirurgico/gorro-cirurgico-verde/">Ver produto</a>
</div>

<div class="produto" data-tipo="gorro" data-genero="unissex" data-cor="azul" data-sku="991-SD-110-001">
  <h3 class="produto-nome">Gorro Cirúrgico Azul</h3>
  <p class="produto-info">Tipo: Gorro | Gênero: Unissex | Cor: Azul | SKU: 991-SD-110-001</p>
  <a class="produto-link" href="https://www.danajalecos.com.br/shop/gorros/cirurgico/gorro-cirurgico-azul/">Ver produto</a>
</div>

<div class="produto" data-tipo="gorro" data-genero="unissex" data-cor="branco" data-sku="991-SD-110-008">
  <h3 class="produto-nome">Gorro Cirúrgico Branco</h3>
  <p class="produto-info">Tipo: Gorro | Gênero: Unissex | Cor: Branco | SKU: 991-SD-110-008</p>
  <a class="produto-link" href="https://www.danajalecos.com.br/shop/gorros/cirurgico/gorro-cirurgico-branco/">Ver produto</a>
</div>

<!-- AVENTAIS -->

<div class="produto" data-tipo="avental" data-genero="unissex" data-cor="branco" data-sku="991-SD-180-008">
  <h3 class="produto-nome">Avental Microfibra Branco</h3>
  <p class="produto-info">Tipo: Avental | Gênero: Unissex | Cor: Branco | SKU: 991-SD-180-008</p>
  <a class="produto-link" href="https://www.danajalecos.com.br/shop/aventais/microfibra/avental-microfibra-branco/">Ver produto</a>
</div>

<div class="produto" data-tipo="avental" data-genero="unissex" data-cor="azul" data-sku="991-SD-180-001">
  <h3 class="produto-nome">Avental Microfibra Azul</h3>
  <p class="produto-info">Tipo: Avental | Gênero: Unissex | Cor: Azul | SKU: 991-SD-180-001</p>
  <a class="produto-link" href="https://www.danajalecos.com.br/shop/aventais/microfibra/avental-microfibra-azul/">Ver produto</a>
</div>

<hr style="margin: 40px 0; border: 2px solid #0066cc;">

<p style="text-align: center; color: #666;">
  <strong>Total de produtos nesta página:</strong> 25 produtos<br>
  <strong>URL desta página:</strong> https://dreitte.vercel.app/api/catalogo-stevo<br>
  <em>Esta página é atualizada automaticamente com o catálogo completo da Jana Dalecos</em>
</p>

</body>
</html>
  `);
}
