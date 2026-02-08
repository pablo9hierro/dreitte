// Endpoint de teste com 30 produtos em HTML

export default function handler(req, res) {
  const html = `<!DOCTYPE html>
<html lang="pt-BR">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Catálogo Dana Jalecos - 30 Produtos</title>
  <style>
    body { font-family: Arial, sans-serif; max-width: 1200px; margin: 0 auto; padding: 20px; }
    .tipo-produto { margin-bottom: 40px; border: 2px solid #333; padding: 20px; }
    .tipo-titulo { font-size: 24px; font-weight: bold; margin-bottom: 20px; background: #333; color: white; padding: 10px; }
    .genero-section { margin-bottom: 30px; border-left: 4px solid #666; padding-left: 15px; }
    .genero-titulo { font-size: 20px; font-weight: bold; margin-bottom: 15px; color: #666; }
    .cor-group { margin-bottom: 20px; background: #f5f5f5; padding: 15px; }
    .cor-nome { font-size: 18px; font-weight: bold; color: #444; margin-bottom: 10px; }
    .produto { margin-bottom: 15px; padding: 10px; background: white; border: 1px solid #ddd; }
    .produto-nome { font-weight: bold; color: #000; margin-bottom: 5px; }
    .produto-link { color: #0066cc; word-break: break-all; }
  </style>
</head>
<body>
  <h1>Catálogo Dana Jalecos - 30 Produtos para Teste</h1>

  <!-- JALECO -->
  <div class="tipo-produto" data-tipo="JALECO">
    <div class="tipo-titulo">🥼 JALECO</div>
    
    <!-- MASCULINO -->
    <div class="genero-section" data-genero="MASCULINO">
      <div class="genero-titulo">👨 MASCULINO</div>
      
      <!-- Amarelo -->
      <div class="cor-group" data-cor="Amarelo">
        <div class="cor-nome">🟡 Amarelo</div>
        <div class="produto">
          <div class="produto-nome">Jaleco Masculino Samuel Amarelo</div>
          <div class="produto-link">https://www.danajalecos.com.br/shop/jalecos/masculinos/samuel/jaleco-samuel-amarelo/</div>
        </div>
      </div>
      
      <!-- Azul -->
      <div class="cor-group" data-cor="Azul">
        <div class="cor-nome">🔵 Azul</div>
        <div class="produto">
          <div class="produto-nome">Jaleco Masculino Paulo Azul Marinho</div>
          <div class="produto-link">https://www.danajalecos.com.br/shop/jalecos/masculinos/paulo/jaleco-paulo-azul-marinho/</div>
        </div>
        <div class="produto">
          <div class="produto-nome">Jaleco Masculino Manoel Azul Marinho</div>
          <div class="produto-link">https://www.danajalecos.com.br/shop/jalecos/masculinos/manoel/jaleco-manoel-azul-marinho/</div>
        </div>
      </div>
      
      <!-- Branco -->
      <div class="cor-group" data-cor="Branco">
        <div class="cor-nome">⚪ Branco</div>
        <div class="produto">
          <div class="produto-nome">Jaleco Masculino Isac Branco</div>
          <div class="produto-link">https://www.danajalecos.com.br/shop/jalecos/masculinos/isac/jaleco-isac-branco/</div>
        </div>
      </div>
      
      <!-- Verde -->
      <div class="cor-group" data-cor="Verde">
        <div class="cor-nome">🟢 Verde</div>
        <div class="produto">
          <div class="produto-nome">Jaleco Masculino Manoel Verde Escuro</div>
          <div class="produto-link">https://www.danajalecos.com.br/shop/jalecos/masculinos/manoel/jaleco-manoel-verde-escuro/</div>
        </div>
        <div class="produto">
          <div class="produto-nome">Jaleco Masculino Samuel Manga Longa Verde Militar</div>
          <div class="produto-link">https://www.danajalecos.com.br/shop/jalecos/masculinos/samuel/jaleco-samuel-verde-militar/</div>
        </div>
      </div>
    </div>
    
    <!-- FEMININO -->
    <div class="genero-section" data-genero="FEMININO">
      <div class="genero-titulo">👩 FEMININO</div>
      
      <!-- Amarelo -->
      <div class="cor-group" data-cor="Amarelo">
        <div class="cor-nome">🟡 Amarelo</div>
        <div class="produto">
          <div class="produto-nome">Jaleco Feminino Heloisa Manga Longa Amarelo</div>
          <div class="produto-link">https://www.danajalecos.com.br/shop/jalecos/feminino/femininos-ziper/heloisa/jaleco-heloisa-amarelo/</div>
        </div>
        <div class="produto">
          <div class="produto-nome">Jaleco Feminino Rute Amarelo</div>
          <div class="produto-link">https://www.danajalecos.com.br/shop/jalecos/feminino/rute/jaleco-rute-amarelo/</div>
        </div>
        <div class="produto">
          <div class="produto-nome">Jaleco Feminino Dani Amarelo</div>
          <div class="produto-link">https://www.danajalecos.com.br/shop/jalecos/feminino/dani/jaleco-dani-amarelo/</div>
        </div>
      </div>
      
      <!-- Azul -->
      <div class="cor-group" data-cor="Azul">
        <div class="cor-nome">🔵 Azul</div>
        <div class="produto">
          <div class="produto-nome">Jaleco Feminino Andressa Azul Marinho</div>
          <div class="produto-link">https://www.danajalecos.com.br/shop/jalecos/feminino/femininos-gola-v/andressa/jaleco-andressa-azul-marinho/</div>
        </div>
        <div class="produto">
          <div class="produto-nome">Jaleco Feminino Camila Azul Céu</div>
          <div class="produto-link">https://www.danajalecos.com.br/shop/jalecos/feminino/femininos-ziper/camila/jaleco-camila-azul-ceu/</div>
        </div>
      </div>
      
      <!-- Branco -->
      <div class="cor-group" data-cor="Branco">
        <div class="cor-nome">⚪ Branco</div>
        <div class="produto">
          <div class="produto-nome">Jaleco Feminino Ana Manga Longa Branco</div>
          <div class="produto-link">https://www.danajalecos.com.br/shop/jalecos/feminino/femininos-gola-v/ana/jaleco-ana-branco/</div>
        </div>
      </div>
      
      <!-- Rosa -->
      <div class="cor-group" data-cor="Rosa">
        <div class="cor-nome">🩷 Rosa</div>
        <div class="produto">
          <div class="produto-nome">Jaleco Feminino Clara Rosa</div>
          <div class="produto-link">https://www.danajalecos.com.br/shop/jalecos/feminino/clara/jaleco-clara-rosa/</div>
        </div>
      </div>
    </div>
  </div>

  <!-- SCRUB -->
  <div class="tipo-produto" data-tipo="SCRUB">
    <div class="tipo-titulo">👔 SCRUB</div>
    
    <!-- MASCULINO -->
    <div class="genero-section" data-genero="MASCULINO">
      <div class="genero-titulo">👨 MASCULINO</div>
      
      <div class="cor-group" data-cor="Azul">
        <div class="cor-nome">🔵 Azul</div>
        <div class="produto">
          <div class="produto-nome">Scrub Masculino Gabriel Azul Marinho</div>
          <div class="produto-link">https://www.danajalecos.com.br/shop/scrubs/masculino/scrub-masculino-gabriel/scrub-gabriel-azul-marinho/</div>
        </div>
      </div>
      
      <div class="cor-group" data-cor="Cinza">
        <div class="cor-nome">⚫ Cinza</div>
        <div class="produto">
          <div class="produto-nome">Scrub Masculino Noah Cinza</div>
          <div class="produto-link">https://www.danajalecos.com.br/shop/scrubs/masculino/scrub-masculino-noah/scrub-noah-cinza/</div>
        </div>
      </div>
      
      <div class="cor-group" data-cor="Verde">
        <div class="cor-nome">🟢 Verde</div>
        <div class="produto">
          <div class="produto-nome">Scrub Masculino Noah Verde Militar</div>
          <div class="produto-link">https://www.danajalecos.com.br/shop/scrubs/masculino/scrub-masculino-noah/scrub-noah-verde-militar/</div>
        </div>
      </div>
    </div>
    
    <!-- FEMININO -->
    <div class="genero-section" data-genero="FEMININO">
      <div class="genero-titulo">👩 FEMININO</div>
      
      <div class="cor-group" data-cor="Azul">
        <div class="cor-nome">🔵 Azul</div>
        <div class="produto">
          <div class="produto-nome">Scrub Feminino Valentina Azul Marinho</div>
          <div class="produto-link">https://www.danajalecos.com.br/shop/scrubs/feminino/scrub-feminino-valentina/scrub-valentina-azul-marinho/</div>
        </div>
      </div>
      
      <div class="cor-group" data-cor="Rosa">
        <div class="cor-nome">🩷 Rosa</div>
        <div class="produto">
          <div class="produto-nome">Scrub Feminino Bella Rosa</div>
          <div class="produto-link">https://www.danajalecos.com.br/shop/scrubs/feminino/scrub-feminino-bella/scrub-bella-rosa/</div>
        </div>
      </div>
      
      <div class="cor-group" data-cor="Verde">
        <div class="cor-nome">🟢 Verde</div>
        <div class="produto">
          <div class="produto-nome">Scrub Feminino Maya Verde Militar</div>
          <div class="produto-link">https://www.danajalecos.com.br/shop/scrubs/feminino/scrub-feminino-maya/scrub-maya-verde-militar/</div>
        </div>
      </div>
    </div>
  </div>

  <!-- GORRO -->
  <div class="tipo-produto" data-tipo="GORRO">
    <div class="tipo-titulo">🧢 GORRO</div>
    
    <div class="genero-section" data-genero="UNISSEX">
      <div class="genero-titulo">👤 UNISSEX</div>
      
      <div class="cor-group" data-cor="Azul">
        <div class="cor-nome">🔵 Azul</div>
        <div class="produto">
          <div class="produto-nome">Gorro Cirurgico Azul Marinho</div>
          <div class="produto-link">https://www.danajalecos.com.br/shop/gorros/gorro-cirurgico/gorro-cirurgico-azul-marinho/</div>
        </div>
      </div>
      
      <div class="cor-group" data-cor="Branco">
        <div class="cor-nome">⚪ Branco</div>
        <div class="produto">
          <div class="produto-nome">Gorro Cirurgico Branco</div>
          <div class="produto-link">https://www.danajalecos.com.br/shop/gorros/gorro-cirurgico/gorro-cirurgico-branco/</div>
        </div>
      </div>
      
      <div class="cor-group" data-cor="Preto">
        <div class="cor-nome">⚫ Preto</div>
        <div class="produto">
          <div class="produto-nome">Gorro Cirurgico Preto</div>
          <div class="produto-link">https://www.danajalecos.com.br/shop/gorros/gorro-cirurgico/gorro-cirurgico-preto/</div>
        </div>
      </div>
      
      <div class="cor-group" data-cor="Rosa">
        <div class="cor-nome">🩷 Rosa</div>
        <div class="produto">
          <div class="produto-nome">Gorro Cirurgico Rosa</div>
          <div class="produto-link">https://www.danajalecos.com.br/shop/gorros/gorro-cirurgico/gorro-cirurgico-rosa/</div>
        </div>
      </div>
      
      <div class="cor-group" data-cor="Verde">
        <div class="cor-nome">🟢 Verde</div>
        <div class="produto">
          <div class="produto-nome">Gorro Cirurgico Verde</div>
          <div class="produto-link">https://www.danajalecos.com.br/shop/gorros/gorro-cirurgico/gorro-cirurgico-verde/</div>
        </div>
      </div>
    </div>
  </div>

  <!-- AVENTAL -->
  <div class="tipo-produto" data-tipo="AVENTAL">
    <div class="tipo-titulo">👗 AVENTAL</div>
    
    <div class="genero-section" data-genero="UNISSEX">
      <div class="genero-titulo">👤 UNISSEX</div>
      
      <div class="cor-group" data-cor="Azul">
        <div class="cor-nome">🔵 Azul</div>
        <div class="produto">
          <div class="produto-nome">Avental Descartavel Azul</div>
          <div class="produto-link">https://www.danajalecos.com.br/shop/aventais/avental-descartavel/avental-descartavel-azul/</div>
        </div>
      </div>
      
      <div class="cor-group" data-cor="Branco">
        <div class="cor-nome">⚪ Branco</div>
        <div class="produto">
          <div class="produto-nome">Avental Descartavel Branco</div>
          <div class="produto-link">https://www.danajalecos.com.br/shop/aventais/avental-descartavel/avental-descartavel-branco/</div>
        </div>
      </div>
      
      <div class="cor-group" data-cor="Verde">
        <div class="cor-nome">🟢 Verde</div>
        <div class="produto">
          <div class="produto-nome">Avental Descartavel Verde</div>
          <div class="produto-link">https://www.danajalecos.com.br/shop/aventais/avental-descartavel/avental-descartavel-verde/</div>
        </div>
      </div>
    </div>
  </div>

  <!-- DOLMA -->
  <div class="tipo-produto" data-tipo="DOLMA">
    <div class="tipo-titulo">👘 DOLMA</div>
    
    <div class="genero-section" data-genero="FEMININO">
      <div class="genero-titulo">👩 FEMININO</div>
      
      <div class="cor-group" data-cor="Branco">
        <div class="cor-nome">⚪ Branco</div>
        <div class="produto">
          <div class="produto-nome">Dolma Feminino Branco</div>
          <div class="produto-link">https://www.danajalecos.com.br/shop/dolmas/dolma-feminino/dolma-feminino-branco/</div>
        </div>
      </div>
      
      <div class="cor-group" data-cor="Marsala">
        <div class="cor-nome">🟤 Marsala</div>
        <div class="produto">
          <div class="produto-nome">Dolma Feminino Marsala</div>
          <div class="produto-link">https://www.danajalecos.com.br/shop/dolmas/dolma-feminino/dolma-feminino-marsala/</div>
        </div>
      </div>
    </div>
  </div>

  <footer style="margin-top: 40px; padding: 20px; background: #333; color: white; text-align: center;">
    <p><strong>Total: 30 Produtos</strong></p>
    <p>Catálogo para teste | Dana Jalecos</p>
  </footer>

</body>
</html>`;

  res.setHeader('Content-Type', 'text/html; charset=utf-8');
  res.setHeader('Cache-Control', 'public, max-age=300');
  res.status(200).send(html);
}
