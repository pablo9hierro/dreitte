export default function handler(req, res) {
  const { format } = req.query;
  
  // Dados dos produtos
  const produtos = [
    {
      id: 1,
      nome: "Jaleco Masculino Samuel Amarelo",
      categoria: "Jalecos Masculinos",
      preco: "R$ 145,00",
      link: "https://www.danajalecos.com.br/shop/jalecos/masculinos/samuel/jaleco-samuel-amarelo/"
    },
    {
      id: 2,
      nome: "Jaleco Masculino Samuel Azul",
      categoria: "Jalecos Masculinos",
      preco: "R$ 145,00",
      link: "https://www.danajalecos.com.br/shop/jalecos/masculinos/samuel/jaleco-samuel-azul/"
    },
    {
      id: 3,
      nome: "Jaleco Masculino Samuel Verde",
      categoria: "Jalecos Masculinos",
      preco: "R$ 145,00",
      link: "https://www.danajalecos.com.br/shop/jalecos/masculinos/samuel/jaleco-samuel-verde/"
    },
    {
      id: 4,
      nome: "Jaleco Masculino Manoel Azul Marinho",
      categoria: "Jalecos Masculinos",
      preco: "R$ 209,00",
      link: "https://www.danajalecos.com.br/shop/jalecos/masculinos/manoel/jaleco-manoel-azul-marinho/"
    },
    {
      id: 5,
      nome: "Jaleco Feminino Giovana Rosa",
      categoria: "Jalecos Femininos",
      preco: "R$ 165,00",
      link: "https://www.danajalecos.com.br/shop/jalecos/femininos/giovana/jaleco-giovana-rosa/"
    },
    {
      id: 6,
      nome: "Jaleco Feminino Giovana Azul",
      categoria: "Jalecos Femininos",
      preco: "R$ 165,00",
      link: "https://www.danajalecos.com.br/shop/jalecos/femininos/giovana/jaleco-giovana-azul/"
    },
    {
      id: 7,
      nome: "Scrub Masculino Pedro Azul",
      categoria: "Scrubs",
      preco: "R$ 177,65",
      link: "https://www.danajalecos.com.br/shop/scrubs/masculinos/pedro/scrub-pedro-azul/"
    },
    {
      id: 8,
      nome: "Scrub Masculino Pedro Verde",
      categoria: "Scrubs",
      preco: "R$ 177,65",
      link: "https://www.danajalecos.com.br/shop/scrubs/masculinos/pedro/scrub-pedro-verde/"
    },
    {
      id: 9,
      nome: "Scrub Feminino Ana Rosa",
      categoria: "Scrubs",
      preco: "R$ 145,35",
      link: "https://www.danajalecos.com.br/shop/scrubs/femininos/ana/scrub-ana-rosa/"
    },
    {
      id: 10,
      nome: "Gorro Cirúrgico Verde",
      categoria: "Gorros",
      preco: "R$ 45,00",
      link: "https://www.danajalecos.com.br/shop/gorros/cirurgicos/gorro-verde/"
    },
    {
      id: 11,
      nome: "Gorro Cirúrgico Azul",
      categoria: "Gorros",
      preco: "R$ 45,00",
      link: "https://www.danajalecos.com.br/shop/gorros/cirurgicos/gorro-azul/"
    }
  ];
  
  // FORMATO JSON (use ?format=json)
  if (format === 'json') {
    res.setHeader('Content-Type', 'application/json; charset=utf-8');
    return res.status(200).json({
      loja: "Jana Dalecos",
      website: "https://www.danajalecos.com.br",
      total_produtos: produtos.length,
      produtos: produtos
    });
  }
  
  // FORMATO TEXTO PLANO (use ?format=text)
  if (format === 'text') {
    res.setHeader('Content-Type', 'text/plain; charset=utf-8');
    let texto = 'CATALOGO JANA DALECOS\n';
    texto += '='.repeat(50) + '\n\n';
    produtos.forEach(p => {
      texto += `${p.nome}\n`;
      texto += `Categoria: ${p.categoria}\n`;
      texto += `Preço: ${p.preco}\n`;
      texto += `Link: ${p.link}\n`;
      texto += '-'.repeat(50) + '\n\n';
    });
    return res.status(200).send(texto);
  }
  
  // FORMATO HTML (padrão) - Otimizado para Web Crawlers
  res.setHeader('Content-Type', 'text/html; charset=utf-8');
  
  const html = [
    '<!DOCTYPE html>',
    '<html lang="pt-BR">',
    '<head>',
    '<meta charset="UTF-8">',
    '<meta name="viewport" content="width=device-width, initial-scale=1.0">',
    '<title>Catálogo Jana Dalecos - Jalecos, Scrubs e Uniformes Médicos</title>',
    '<meta name="description" content="Catálogo completo de produtos Jana Dalecos: jalecos masculinos e femininos, scrubs, gorros cirúrgicos e uniformes médicos.">',
    '<style>',
    'body { font-family: Arial, sans-serif; max-width: 1200px; margin: 0 auto; padding: 20px; line-height: 1.6; }',
    'h1 { color: #2c3e50; border-bottom: 3px solid #3498db; padding-bottom: 10px; }',
    'h2 { color: #3498db; margin-top: 30px; border-left: 4px solid #3498db; padding-left: 10px; }',
    '.produto { background: #f8f9fa; padding: 15px; margin: 15px 0; border-radius: 5px; border-left: 4px solid #3498db; }',
    '.produto h3 { margin: 0 0 10px 0; color: #2c3e50; }',
    '.produto .info { margin: 5px 0; }',
    '.produto .preco { color: #27ae60; font-weight: bold; font-size: 1.1em; }',
    '.produto a { color: #3498db; text-decoration: none; display: inline-block; margin-top: 10px; padding: 8px 15px; background: #3498db; color: white; border-radius: 3px; }',
    '.produto a:hover { background: #2980b9; }',
    '.resumo { background: #e8f4f8; padding: 15px; border-radius: 5px; margin: 20px 0; }',
    '</style>',
    '</head>',
    '<body>',
    '',
    '<h1>📦 Catálogo Jana Dalecos</h1>',
    '<div class="resumo">',
    '<p><strong>Loja:</strong> Jana Dalecos - Uniformes Médicos</p>',
    '<p><strong>Website:</strong> <a href="https://www.danajalecos.com.br">www.danajalecos.com.br</a></p>',
    '<p><strong>Total de Produtos:</strong> ' + produtos.length + ' produtos disponíveis</p>',
    '<p><strong>Formatos disponíveis:</strong></p>',
    '<ul>',
    '<li>HTML: <a href="/api/catalogo-simples">https://dreitte.vercel.app/api/catalogo-simples</a></li>',
    '<li>JSON: <a href="/api/catalogo-simples?format=json">https://dreitte.vercel.app/api/catalogo-simples?format=json</a></li>',
    '<li>Texto: <a href="/api/catalogo-simples?format=text">https://dreitte.vercel.app/api/catalogo-simples?format=text</a></li>',
    '</ul>',
    '</div>',
    ''
  ];
  
  // Agrupar por categoria
  const categorias = {};
  produtos.forEach(p => {
    if (!categorias[p.categoria]) {
      categorias[p.categoria] = [];
    }
    categorias[p.categoria].push(p);
  });
  
  // Gerar HTML por categoria
  Object.keys(categorias).forEach(cat => {
    html.push(`<h2>${cat}</h2>`);
    categorias[cat].forEach(p => {
      html.push('<div class="produto">');
      html.push(`  <h3>${p.nome}</h3>`);
      html.push(`  <div class="info"><strong>ID:</strong> ${p.id}</div>`);
      html.push(`  <div class="info"><strong>Categoria:</strong> ${p.categoria}</div>`);
      html.push(`  <div class="preco">Preço: ${p.preco} no PIX</div>`);
      html.push(`  <a href="${p.link}" target="_blank">Ver Produto →</a>`);
      html.push('</div>');
    });
    html.push('');
  });
  
  html.push('<hr style="margin: 40px 0; border: none; border-top: 2px solid #ddd;">');
  html.push('<p style="text-align: center; color: #7f8c8d; font-size: 0.9em;">');
  html.push('Última atualização: ' + new Date().toLocaleString('pt-BR'));
  html.push('</p>');
  html.push('</body>');
  html.push('</html>');
  
  res.status(200).send(html.join('\n'));
}
