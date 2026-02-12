export default function Home() {
  return (
    <html lang="pt-BR">
      <head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Catálogo Jana Dalecos - Jalecos, Scrubs e Uniformes Médicos</title>
        <meta name="description" content="Catálogo completo Jana Dalecos: jalecos masculinos e femininos, scrubs, gorros cirúrgicos e uniformes médicos profissionais." />
        <style>{`
          body { font-family: Arial, sans-serif; max-width: 1200px; margin: 0 auto; padding: 20px; line-height: 1.6; background: #f5f5f5; }
          h1 { color: #2c3e50; font-size: 2.5em; border-bottom: 4px solid #3498db; padding-bottom: 15px; margin-bottom: 30px; }
          h2 { color: #3498db; font-size: 1.8em; margin-top: 40px; border-left: 5px solid #3498db; padding-left: 15px; }
          .info { background: #e8f4f8; padding: 20px; border-radius: 8px; margin: 25px 0; }
          .info p { margin: 8px 0; font-size: 1.1em; }
          .produto { background: white; padding: 20px; margin: 20px 0; border-radius: 8px; box-shadow: 0 2px 5px rgba(0,0,0,0.1); border-left: 5px solid #3498db; }
          .produto h3 { margin: 0 0 12px 0; color: #2c3e50; font-size: 1.4em; }
          .produto .categoria { color: #7f8c8d; font-size: 0.95em; margin: 5px 0; }
          .produto .preco { color: #27ae60; font-weight: bold; font-size: 1.3em; margin: 10px 0; }
          .produto a { display: inline-block; margin-top: 12px; padding: 12px 25px; background: #3498db; color: white; text-decoration: none; border-radius: 5px; font-weight: bold; }
          .produto a:hover { background: #2980b9; }
          footer { margin-top: 60px; padding-top: 30px; border-top: 3px solid #ddd; text-align: center; color: #7f8c8d; }
        `}</style>
      </head>
      <body>
        <h1>📦 Catálogo Jana Dalecos</h1>
        
        <div className="info">
          <p><strong>Loja:</strong> Jana Dalecos - Uniformes Médicos</p>
          <p><strong>Website:</strong> <a href="https://www.danajalecos.com.br">www.danajalecos.com.br</a></p>
          <p><strong>Total de Produtos:</strong> 11 produtos em destaque</p>
        </div>

        <h2>Jalecos Masculinos</h2>
        
        <article className="produto">
          <h3>Jaleco Masculino Samuel Amarelo</h3>
          <p className="categoria">Categoria: Jalecos Masculinos</p>
          <p className="preco">R$ 145,00 no PIX</p>
          <a href="https://www.danajalecos.com.br/shop/jalecos/masculinos/samuel/jaleco-samuel-amarelo/">Ver Produto</a>
        </article>

        <article className="produto">
          <h3>Jaleco Masculino Samuel Azul</h3>
          <p className="categoria">Categoria: Jalecos Masculinos</p>
          <p className="preco">R$ 145,00 no PIX</p>
          <a href="https://www.danajalecos.com.br/shop/jalecos/masculinos/samuel/jaleco-samuel-azul/">Ver Produto</a>
        </article>

        <article className="produto">
          <h3>Jaleco Masculino Samuel Verde</h3>
          <p className="categoria">Categoria: Jalecos Masculinos</p>
          <p className="preco">R$ 145,00 no PIX</p>
          <a href="https://www.danajalecos.com.br/shop/jalecos/masculinos/samuel/jaleco-samuel-verde/">Ver Produto</a>
        </article>

        <article className="produto">
          <h3>Jaleco Masculino Manoel Azul Marinho</h3>
          <p className="categoria">Categoria: Jalecos Masculinos</p>
          <p className="preco">R$ 209,00 no PIX</p>
          <a href="https://www.danajalecos.com.br/shop/jalecos/masculinos/manoel/jaleco-manoel-azul-marinho/">Ver Produto</a>
        </article>

        <h2>Jalecos Femininos</h2>
        
        <article className="produto">
          <h3>Jaleco Feminino Giovana Rosa</h3>
          <p className="categoria">Categoria: Jalecos Femininos</p>
          <p className="preco">R$ 165,00 no PIX</p>
          <a href="https://www.danajalecos.com.br/shop/jalecos/femininos/giovana/jaleco-giovana-rosa/">Ver Produto</a>
        </article>

        <article className="produto">
          <h3>Jaleco Feminino Giovana Azul</h3>
          <p className="categoria">Categoria: Jalecos Femininos</p>
          <p className="preco">R$ 165,00 no PIX</p>
          <a href="https://www.danajalecos.com.br/shop/jalecos/femininos/giovana/jaleco-giovana-azul/">Ver Produto</a>
        </article>

        <h2>Scrubs</h2>
        
        <article className="produto">
          <h3>Scrub Masculino Pedro Azul</h3>
          <p className="categoria">Categoria: Scrubs</p>
          <p className="preco">R$ 177,65 no PIX</p>
          <a href="https://www.danajalecos.com.br/shop/scrubs/masculinos/pedro/scrub-pedro-azul/">Ver Produto</a>
        </article>

        <article className="produto">
          <h3>Scrub Masculino Pedro Verde</h3>
          <p className="categoria">Categoria: Scrubs</p>
          <p className="preco">R$ 177,65 no PIX</p>
          <a href="https://www.danajalecos.com.br/shop/scrubs/masculinos/pedro/scrub-pedro-verde/">Ver Produto</a>
        </article>

        <article className="produto">
          <h3>Scrub Feminino Ana Rosa</h3>
          <p className="categoria">Categoria: Scrubs</p>
          <p className="preco">R$ 145,35 no PIX</p>
          <a href="https://www.danajalecos.com.br/shop/scrubs/femininos/ana/scrub-ana-rosa/">Ver Produto</a>
        </article>

        <h2>Gorros Cirúrgicos</h2>
        
        <article className="produto">
          <h3>Gorro Cirúrgico Verde</h3>
          <p className="categoria">Categoria: Gorros</p>
          <p className="preco">R$ 45,00 no PIX</p>
          <a href="https://www.danajalecos.com.br/shop/gorros/cirurgicos/gorro-verde/">Ver Produto</a>
        </article>

        <article className="produto">
          <h3>Gorro Cirúrgico Azul</h3>
          <p className="categoria">Categoria: Gorros</p>
          <p className="preco">R$ 45,00 no PIX</p>
          <a href="https://www.danajalecos.com.br/shop/gorros/cirurgicos/gorro-azul/">Ver Produto</a>
        </article>

        <footer>
          <p>Jana Dalecos © 2026 - Uniformes Médicos Profissionais</p>
          <p>Última atualização: {new Date().toLocaleString('pt-BR')}</p>
        </footer>
      </body>
    </html>
  );
}
