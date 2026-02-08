// Importar todos os JSONs
import jalecoData from '../public/jaleco.json';
import scrubData from '../public/scrub.json';
import gorroData from '../public/gorro.json';
import toucaData from '../public/touca.json';
import aventalData from '../public/avental.json';
import dolmaData from '../public/dolma.json';
import robeData from '../public/robe.json';
import turbante from '../public/turbante.json';
import vestidoData from '../public/vestido.json';
import macacaoData from '../public/macacao.json';
import crachaData from '../public/cracha.json';
import deskPadData from '../public/desk-pad.json';
import kitOfficeData from '../public/kit-office.json';
import mousePadData from '../public/mouse-pad.json';
import portaCanetasData from '../public/porta-canetas.json';
import portaCopoData from '../public/porta-copo.json';
import portaObjetosData from '../public/porta-objetos.json';
import bandejaData from '../public/bandeja.json';

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
