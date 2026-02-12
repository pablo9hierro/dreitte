const fs = require('fs');
const path = require('path');

// Lê o JSON de produtos
const produtosPath = 'C:\\Users\\pablo\\Downloads\\crawler\\crawler\\produtos_danajalecos.json';
const dados = JSON.parse(fs.readFileSync(produtosPath, 'utf-8'));

console.log(`📦 Total de produtos: ${dados.products.length}`);

// Função para extrair nome limpo da URL
function extrairNome(url) {
  const parts = url.split('/').filter(p => p);
  const ultimaParte = parts[parts.length - 1] || parts[parts.length - 2];
  
  // Limpa e formata
  return ultimaParte
    .replace(/-/g, ' ')
    .split(' ')
    .map(w => w.charAt(0).toUpperCase() + w.slice(1))
    .join(' ');
}

// Categorizar produtos
const categorias = {
  'Jalecos Masculinos': [],
  'Jalecos Femininos': [],
  'Scrubs Masculinos': [],
  'Scrubs Femininos': [],
  'Gorros': [],
  'Outros': []
};

dados.products.forEach(produto => {
  const url = produto.url.toLowerCase();
  const nome = extrairNome(produto.url);
  
  const item = {
    nome,
    url: produto.url,
    lastModified: produto.lastModified
  };
  
  if (url.includes('/jalecos/masculinos/') || url.includes('/masculino/')) {
    categorias['Jalecos Masculinos'].push(item);
  } else if (url.includes('/jalecos/feminino') || url.includes('jaleco-feminino')) {
    categorias['Jalecos Femininos'].push(item);
  } else if (url.includes('/scrubs/masculino')) {
    categorias['Scrubs Masculinos'].push(item);
  } else if (url.includes('/scrubs/feminino')) {
    categorias['Scrubs Femininos'].push(item);
  } else if (url.includes('/gorro')) {
    categorias['Gorros'].push(item);
  } else {
    categorias['Outros'].push(item);
  }
});

// Exibe estatísticas
console.log('\n📊 Produtos por categoria:');
Object.keys(categorias).forEach(cat => {
  console.log(`   ${cat}: ${categorias[cat].length}`);
});

// Limita a 20 produtos por categoria para não ficar gigante
const limite = 20;
const produtosLimitados = {};

Object.keys(categorias).forEach(cat => {
  produtosLimitados[cat] = categorias[cat].slice(0, limite);
});

// Gera o componente React
function gerarProdutoHTML(produto) {
  return `        <article className="produto">
          <h3>${produto.nome}</h3>
          <a href="${produto.url}" target="_blank" rel="noopener">Ver Produto →</a>
        </article>`;
}

let componenteReact = `export default function Home() {
  return (
    <html lang="pt-BR">
      <head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Catálogo Jana Dalecos - ${dados.metadata.total_products} Produtos</title>
        <meta name="description" content="Catálogo completo Jana Dalecos com ${dados.metadata.total_products} produtos: jalecos, scrubs, gorros e uniformes médicos profissionais." />
        <style>{\`
          * { margin: 0; padding: 0; box-sizing: border-box; }
          body { font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Arial, sans-serif; background: #f8f9fa; line-height: 1.6; }
          .container { max-width: 1400px; margin: 0 auto; padding: 20px; }
          h1 { color: #1a1a1a; font-size: 2.5rem; margin: 30px 0 20px; border-bottom: 4px solid #0066cc; padding-bottom: 15px; }
          .info { background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); color: white; padding: 25px; border-radius: 10px; margin: 25px 0; box-shadow: 0 4px 15px rgba(0,0,0,0.1); }
          .info p { margin: 8px 0; font-size: 1.1rem; }
          .info a { color: white; font-weight: bold; text-decoration: underline; }
          h2 { color: #0066cc; font-size: 1.8rem; margin: 50px 0 25px; padding-left: 15px; border-left: 6px solid #0066cc; }
          .grid { display: grid; grid-template-columns: repeat(auto-fill, minmax(280px, 1fr)); gap: 20px; margin: 25px 0; }
          .produto { background: white; padding: 20px; border-radius: 8px; box-shadow: 0 2px 8px rgba(0,0,0,0.08); transition: all 0.3s ease; border-left: 4px solid #0066cc; }
          .produto:hover { transform: translateY(-4px); box-shadow: 0 6px 20px rgba(0,0,0,0.15); }
          .produto h3 { color: #1a1a1a; font-size: 1.1rem; margin-bottom: 15px; min-height: 50px; }
          .produto a { display: inline-block; margin-top: 10px; padding: 10px 20px; background: #0066cc; color: white; text-decoration: none; border-radius: 5px; font-weight: 600; transition: background 0.3s; }
          .produto a:hover { background: #0052a3; }
          footer { margin: 60px 0 30px; padding: 30px 0; border-top: 3px solid #ddd; text-align: center; color: #666; }
          footer p { margin: 5px 0; }
          .stats { display: flex; gap: 20px; flex-wrap: wrap; margin: 20px 0; }
          .stat-card { flex: 1; min-width: 200px; background: white; padding: 20px; border-radius: 8px; box-shadow: 0 2px 8px rgba(0,0,0,0.08); text-align: center; }
          .stat-card .number { font-size: 2.5rem; font-weight: bold; color: #0066cc; }
          .stat-card .label { color: #666; margin-top: 5px; }
        \`}</style>
      </head>
      <body>
        <div className="container">
          <h1>🏥 Catálogo Completo Jana Dalecos</h1>
          
          <div className="info">
            <p><strong>🏪 Loja:</strong> Jana Dalecos - Uniformes Médicos Profissionais</p>
            <p><strong>🌐 Website:</strong> <a href="https://www.danajalecos.com.br">www.danajalecos.com.br</a></p>
            <p><strong>📅 Última atualização:</strong> ${new Date(dados.metadata.extracted_at).toLocaleDateString('pt-BR')}</p>
          </div>

          <div className="stats">
            <div className="stat-card">
              <div className="number">${dados.metadata.total_products}</div>
              <div className="label">Produtos Totais</div>
            </div>
            <div className="stat-card">
              <div className="number">${Object.keys(categorias).length}</div>
              <div className="label">Categorias</div>
            </div>
            <div className="stat-card">
              <div className="number">${Math.min(...Object.values(produtosLimitados).map(c => c.length))}-${Math.max(...Object.values(produtosLimitados).map(c => c.length))}</div>
              <div className="label">Produtos/Categoria</div>
            </div>
          </div>

`;

// Adiciona cada categoria
Object.keys(produtosLimitados).forEach(categoria => {
  const produtos = produtosLimitados[categoria];
  
  if (produtos.length > 0) {
    componenteReact += `          <h2>${categoria} (${categorias[categoria].length} produtos)</h2>
          <div className="grid">
${produtos.map(p => gerarProdutoHTML(p)).join('\n')}
          </div>

`;
  }
});

componenteReact += `          <footer>
            <p><strong>Jana Dalecos © 2026</strong> - Uniformes Médicos Profissionais</p>
            <p>Total de ${dados.metadata.total_products} produtos disponíveis no catálogo completo</p>
            <p>Dados extraídos em: {new Date('${dados.metadata.extracted_at}').toLocaleString('pt-BR')}</p>
          </footer>
        </div>
      </body>
    </html>
  );
}
`;

// Salva o arquivo
const outputPath = path.join(__dirname, 'pages', 'index.js');
fs.writeFileSync(outputPath, componenteReact, 'utf-8');

console.log(`\n✅ Arquivo gerado: ${outputPath}`);
console.log(`📄 Total de produtos na página: ${Object.values(produtosLimitados).reduce((a, b) => a + b.length, 0)}`);
console.log(`\n🚀 Próximo passo: git add, commit e push!`);
