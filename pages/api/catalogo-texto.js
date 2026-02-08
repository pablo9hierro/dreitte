// API endpoint que retorna catálogo em texto puro
// URL: /api/catalogo-texto

const catalogos = [
  require('../../public/jaleco.json'),
  require('../../public/scrub.json'),
  require('../../public/gorro.json'),
  require('../../public/touca.json'),
  require('../../public/avental.json'),
  require('../../public/dolma.json'),
  require('../../public/robe.json'),
  require('../../public/turbante.json'),
  require('../../public/vestido.json'),
  require('../../public/macacao.json'),
  require('../../public/cracha.json'),
  require('../../public/desk-pad.json'),
  require('../../public/kit-office.json'),
  require('../../public/mouse-pad.json'),
  require('../../public/porta-canetas.json'),
  require('../../public/porta-copo.json'),
  require('../../public/porta-objetos.json'),
  require('../../public/bandeja.json'),
];

export default function handler(req, res) {
  let texto = 'CATALOGO DANA JALECOS\n\n';

  catalogos.forEach(catalogo => {
    const { metadata, masculino, feminino, unissex } = catalogo;
    
    texto += '='.repeat(50) + '\n';
    texto += metadata.tipoProduto.toUpperCase() + '\n';
    texto += '='.repeat(50) + '\n\n';
    
    ['masculino', 'feminino', 'unissex'].forEach(genero => {
      const generoData = catalogo[genero];
      
      if (generoData && generoData.cadaCor) {
        texto += `--- ${genero.toUpperCase()} ---\n\n`;
        
        Object.entries(generoData.cadaCor).forEach(([cor, produtos]) => {
          texto += `  ${cor}\n`;
          texto += `  ${'-'.repeat(cor.length)}\n`;
          
          produtos.forEach(produto => {
            texto += `  Nome: ${produto.nome}\n`;
            texto += `  Link: ${produto.link}\n`;
            texto += '\n';
          });
          
          texto += '\n';
        });
      }
    });
    
    texto += '\n\n';
  });

  // Retorna como texto puro (não JSON, não HTML)
  res.setHeader('Content-Type', 'text/plain; charset=utf-8');
  res.status(200).send(texto);
}
