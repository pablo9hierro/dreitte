const fs = require('fs');

// Importar todos os JSONs
const catalogos = [
  require('./public/jaleco.json'),
  require('./public/scrub.json'),
  require('./public/gorro.json'),
  require('./public/touca.json'),
  require('./public/avental.json'),
  require('./public/dolma.json'),
  require('./public/robe.json'),
  require('./public/turbante.json'),
  require('./public/vestido.json'),
  require('./public/macacao.json'),
  require('./public/cracha.json'),
  require('./public/desk-pad.json'),
  require('./public/kit-office.json'),
  require('./public/mouse-pad.json'),
  require('./public/porta-canetas.json'),
  require('./public/porta-copo.json'),
  require('./public/porta-objetos.json'),
  require('./public/bandeja.json'),
];

let txtCompleto = 'CATALOGO DANA JALECOS\n\n';

catalogos.forEach(catalogo => {
  const { metadata, masculino, feminino, unissex } = catalogo;
  
  txtCompleto += '='.repeat(50) + '\n';
  txtCompleto += metadata.tipoProduto.toUpperCase() + '\n';
  txtCompleto += '='.repeat(50) + '\n\n';
  
  // Processar cada gênero
  ['masculino', 'feminino', 'unissex'].forEach(genero => {
    const generoData = catalogo[genero];
    
    if (generoData && generoData.cadaCor) {
      txtCompleto += `--- ${genero.toUpperCase()} ---\n\n`;
      
      Object.entries(generoData.cadaCor).forEach(([cor, produtos]) => {
        txtCompleto += `  ${cor}\n`;
        txtCompleto += `  ${'-'.repeat(cor.length)}\n`;
        
        produtos.forEach(produto => {
          txtCompleto += `  Nome: ${produto.nome}\n`;
          txtCompleto += `  Link: ${produto.link}\n`;
          txtCompleto += '\n';
        });
        
        txtCompleto += '\n';
      });
    }
  });
  
  txtCompleto += '\n\n';
});

// Salvar arquivo
fs.writeFileSync('public/catalogo-completo.txt', txtCompleto, 'utf8');
console.log('✅ Arquivo catalogo-completo.txt criado com sucesso!');
console.log(`📄 Total de caracteres: ${txtCompleto.length}`);
