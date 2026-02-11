// /catalogo - Versão simples para Stevo
// Renderiza o mesmo conteúdo de /api/catalogo-simples

export default function CatalogoSimples() {
  return (
    <>
      <h1>Catalogo Jana Dalecos</h1>
      
      <h2>Jalecos Masculinos</h2>
      <p>
        Jaleco Masculino Samuel Amarelo<br/>
        Link: https://www.danajalecos.com.br/shop/jalecos/masculinos/samuel/jaleco-samuel-amarelo/
      </p>
      <p>
        Jaleco Masculino Samuel Azul<br/>
        Link: https://www.danajalecos.com.br/shop/jalecos/masculinos/samuel/jaleco-samuel-azul/
      </p>
      <p>
        Jaleco Masculino Samuel Verde<br/>
        Link: https://www.danajalecos.com.br/shop/jalecos/masculinos/samuel/jaleco-samuel-verde/
      </p>
      
      <h2>Scrubs Masculinos</h2>
      <p>
        Scrub Masculino Pedro Azul<br/>
        Link: https://www.danajalecos.com.br/shop/scrubs/masculinos/pedro/scrub-pedro-azul/
      </p>
      <p>
        Scrub Masculino Pedro Verde<br/>
        Link: https://www.danajalecos.com.br/shop/scrubs/masculinos/pedro/scrub-pedro-verde/
      </p>
      
      <h2>Jalecos Femininos</h2>
      <p>
        Jaleco Feminino Giovana Rosa<br/>
        Link: https://www.danajalecos.com.br/shop/jalecos/femininos/giovana/jaleco-giovana-rosa/
      </p>
      <p>
        Jaleco Feminino Giovana Azul<br/>
        Link: https://www.danajalecos.com.br/shop/jalecos/femininos/giovana/jaleco-giovana-azul/
      </p>
      
      <h2>Scrubs Femininos</h2>
      <p>
        Scrub Feminino Ana Rosa<br/>
        Link: https://www.danajalecos.com.br/shop/scrubs/femininos/ana/scrub-ana-rosa/
      </p>
      
      <h2>Gorros Unissex</h2>
      <p>
        Gorro Cirurgico Verde<br/>
        Link: https://www.danajalecos.com.br/shop/gorros/cirurgicos/gorro-verde/
      </p>
      <p>
        Gorro Cirurgico Azul<br/>
        Link: https://www.danajalecos.com.br/shop/gorros/cirurgicos/gorro-azul/
      </p>
    </>
  );
}


const catalogos = [
  jalecoData,
  scrubData,
  gorroData,
  toucaData,
  aventalData,
  dolmaData,
  robeData,
  turbante,
  vestidoData,
  macacaoData,
  crachaData,
  deskPadData,
  kitOfficeData,
  mousePadData,
  portaCanetasData,
  portaCopoData,
  portaObjetosData,
  bandejaData,
];

export default function Catalogo() {
  return (
    <html>
      <head>
        <title>Catálogo Dana Jalecos</title>
        <meta charSet="utf-8" />
      </head>
      <body>
        <h1>CATALOGO DANA JALECOS</h1>
        
        {catalogos.map((catalogo, idx) => {
          const { metadata, masculino, feminino, unissex } = catalogo;
          
          return (
            <div key={idx}>
              <h2>{metadata.tipoProduto.toUpperCase()}</h2>
              
              {/* MASCULINO */}
              {masculino && masculino.cadaCor && (
                <div>
                  <h3>MASCULINO</h3>
                  {Object.entries(masculino.cadaCor).map(([cor, produtos]) => (
                    <div key={cor}>
                      <h4>{cor}</h4>
                      {produtos.map((produto, i) => (
                        <div key={i}>
                          <p>SKU: {produto.sku}</p>
                          <p>Nome: {produto.nome}</p>
                          <p>Link: {produto.link}</p>
                          <br />
                        </div>
                      ))}
                    </div>
                  ))}
                </div>
              )}
              
              {/* FEMININO */}
              {feminino && feminino.cadaCor && (
                <div>
                  <h3>FEMININO</h3>
                  {Object.entries(feminino.cadaCor).map(([cor, produtos]) => (
                    <div key={cor}>
                      <h4>{cor}</h4>
                      {produtos.map((produto, i) => (
                        <div key={i}>
                          <p>SKU: {produto.sku}</p>
                          <p>Nome: {produto.nome}</p>
                          <p>Link: {produto.link}</p>
                          <br />
                        </div>
                      ))}
                    </div>
                  ))}
                </div>
              )}
              
              {/* UNISSEX */}
              {unissex && unissex.cadaCor && (
                <div>
                  <h3>UNISSEX</h3>
                  {Object.entries(unissex.cadaCor).map(([cor, produtos]) => (
                    <div key={cor}>
                      <h4>{cor}</h4>
                      {produtos.map((produto, i) => (
                        <div key={i}>
                          <p>SKU: {produto.sku}</p>
                          <p>Nome: {produto.nome}</p>
                          <p>Link: {produto.link}</p>
                          <br />
                        </div>
                      ))}
                    </div>
                  ))}
                </div>
              )}
              
              <hr />
            </div>
          );
        })}
      </body>
    </html>
  );
}
