// VERSÃO 1: HTML PURO - ZERO JAVASCRIPT
// Estrutura idêntica ao site real da Jana Dalecos
// Testa se Stevo lê HTML estático básico

export default function handler(req, res) {
  const html = `
<!DOCTYPE html>
<html lang="pt-BR">
<head>
  <meta charset="UTF-8">
  <title>Catalogo Jana Dalecos - Versao 1 HTML Puro</title>
</head>
<body>

<!-- MARCADOR DE VERSÃO -->
<p style="background: yellow; padding: 10px; font-weight: bold;">
  ✅ VERSÃO 1: HTML PURO (Zero JavaScript)
</p>

<!-- ESTRUTURA IDÊNTICA AO SITE REAL -->
<div id="search-area">
  <div class="pesquisa-produtos template-pesquisa-02">
    
    <h1>Catalogo Jana Dalecos</h1>
    
    <!-- Container de produtos (simula vitrine-react-app) -->
    <div id="vitrine-react-app-2001296325">
      <div>
        <div>
          <ul>
            
            <!-- PRODUTO 1 -->
            <li class="relative items-center justify-center">
              <a href="https://www.danajalecos.com.br/shop/jalecos/masculinos/manoel/jaleco-manoel-azul-marinho/" 
                 class="text-cor-base w-full block"
                 title="Jaleco Masculino Manoel Azul Marinho">
                
                <div class="product-info flex flex-col">
                  <h3 class="text-cor-base w-full block">
                    JALECO MASCULINO MANOEL AZUL MARINHO
                  </h3>
                  
                  <div class="vitrine-default">
                    <p class="price">
                      <span>R$ 209,00</span> no PIX
                    </p>
                  </div>
                </div>
              </a>
            </li>
            
            <!-- PRODUTO 2 -->
            <li class="relative items-center justify-center">
              <a href="https://www.danajalecos.com.br/shop/jalecos/masculinos/samuel/jaleco-samuel-amarelo/" 
                 class="text-cor-base w-full block"
                 title="Jaleco Masculino Samuel Amarelo">
                
                <div class="product-info flex flex-col">
                  <h3 class="text-cor-base w-full block">
                    JALECO MASCULINO SAMUEL AMARELO
                  </h3>
                  
                  <div class="vitrine-default">
                    <p class="price">
                      <span>R$ 145,00</span> no PIX
                    </p>
                  </div>
                </div>
              </a>
            </li>
            
            <!-- PRODUTO 3 -->
            <li class="relative items-center justify-center">
              <a href="https://www.danajalecos.com.br/shop/scrubs/masculinos/manga-curta/scrub-azul-marinho/" 
                 class="text-cor-base w-full block"
                 title="Scrub Masculino Manga Curta Azul Marinho">
                
                <div class="product-info flex flex-col">
                  <h3 class="text-cor-base w-full block">
                    SCRUB MASCULINO MANGA CURTA AZUL MARINHO
                  </h3>
                  
                  <div class="vitrine-default">
                    <p class="price">
                      <span>R$ 177,65</span> no PIX
                    </p>
                  </div>
                </div>
              </a>
            </li>
            
          </ul>
        </div>
      </div>
    </div>
    
  </div>
</div>

<!-- RESUMO PARA VALIDAÇÃO -->
<hr>
<h2>Resumo (Versao 1):</h2>
<p>3 produtos listados acima</p>
<p>Estrutura HTML identica ao site real</p>
<p>Zero JavaScript - Conteudo estatico</p>

</body>
</html>
`;

  res.setHeader('Content-Type', 'text/html; charset=utf-8');
  res.status(200).send(html);
}
