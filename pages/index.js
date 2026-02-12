export default function Home() {
  return (
    <html lang="pt-BR">
      <head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Catálogo Jana Dalecos - 467 Produtos</title>
        <meta name="description" content="Catálogo completo Jana Dalecos com 467 produtos: jalecos, scrubs, gorros e uniformes médicos profissionais." />
        <style>{`
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
        `}</style>
      </head>
      <body>
        <div className="container">
          <h1>🏥 Catálogo Completo Jana Dalecos</h1>
          
          <div className="info">
            <p><strong>🏪 Loja:</strong> Jana Dalecos - Uniformes Médicos Profissionais</p>
            <p><strong>🌐 Website:</strong> <a href="https://www.danajalecos.com.br">www.danajalecos.com.br</a></p>
            <p><strong>📅 Última atualização:</strong> 12/02/2026</p>
          </div>

          <div className="stats">
            <div className="stat-card">
              <div className="number">467</div>
              <div className="label">Produtos Totais</div>
            </div>
            <div className="stat-card">
              <div className="number">6</div>
              <div className="label">Categorias</div>
            </div>
            <div className="stat-card">
              <div className="number">15-20</div>
              <div className="label">Produtos/Categoria</div>
            </div>
          </div>

          <h2>Jalecos Masculinos (42 produtos)</h2>
          <div className="grid">
        <article className="produto">
          <h3>Jaleco Isac Branco</h3>
          <a href="https://www.danajalecos.com.br/shop/jalecos/masculinos/isac/jaleco-isac-branco/" target="_blank" rel="noopener">Ver Produto →</a>
        </article>
        <article className="produto">
          <h3>Jaleco Samuel Chumbo</h3>
          <a href="https://www.danajalecos.com.br/shop/jalecos/masculinos/samuel/jaleco-samuel-chumbo/" target="_blank" rel="noopener">Ver Produto →</a>
        </article>
        <article className="produto">
          <h3>Jaleco Samuel Branco</h3>
          <a href="https://www.danajalecos.com.br/shop/jalecos/masculinos/samuel/jaleco-samuel-branco/" target="_blank" rel="noopener">Ver Produto →</a>
        </article>
        <article className="produto">
          <h3>Dolma Masculina Algodao Preto</h3>
          <a href="https://www.danajalecos.com.br/shop/jalecos/dolmas/masculino/dolma-masculina-algodao-preto/" target="_blank" rel="noopener">Ver Produto →</a>
        </article>
        <article className="produto">
          <h3>Dolma Masculina Algodao Branco</h3>
          <a href="https://www.danajalecos.com.br/shop/jalecos/dolmas/masculino/dolma-masculina-algodao-branco/" target="_blank" rel="noopener">Ver Produto →</a>
        </article>
        <article className="produto">
          <h3>Jaleco Isac Preto</h3>
          <a href="https://www.danajalecos.com.br/shop/jalecos/masculinos/isac/jaleco-isac-preto/" target="_blank" rel="noopener">Ver Produto →</a>
        </article>
        <article className="produto">
          <h3>Jaleco Isac Azul Marinho</h3>
          <a href="https://www.danajalecos.com.br/shop/jalecos/masculinos/isac/jaleco-isac-azul-marinho/" target="_blank" rel="noopener">Ver Produto →</a>
        </article>
        <article className="produto">
          <h3>Jaleco Noah Bege</h3>
          <a href="https://www.danajalecos.com.br/shop/jalecos/masculinos/noah/jaleco-noah-bege/" target="_blank" rel="noopener">Ver Produto →</a>
        </article>
        <article className="produto">
          <h3>Jaleco Manoel Bordo</h3>
          <a href="https://www.danajalecos.com.br/shop/jalecos/masculinos/manoel/jaleco-manoel-bordo/" target="_blank" rel="noopener">Ver Produto →</a>
        </article>
        <article className="produto">
          <h3>Jaleco Manoel Azul Medio</h3>
          <a href="https://www.danajalecos.com.br/shop/jalecos/masculinos/manoel/jaleco-manoel-azul-medio/" target="_blank" rel="noopener">Ver Produto →</a>
        </article>
        <article className="produto">
          <h3>Jaleco Manoel Verde Claro</h3>
          <a href="https://www.danajalecos.com.br/shop/jalecos/masculinos/manoel/jaleco-manoel-verde-claro/" target="_blank" rel="noopener">Ver Produto →</a>
        </article>
        <article className="produto">
          <h3>Jaleco Manoel Bege</h3>
          <a href="https://www.danajalecos.com.br/shop/jalecos/masculinos/manoel/jaleco-manoel-bege/" target="_blank" rel="noopener">Ver Produto →</a>
        </article>
        <article className="produto">
          <h3>Jaleco Manoel Cinza</h3>
          <a href="https://www.danajalecos.com.br/shop/jalecos/masculinos/manoel/jaleco-manoel-cinza/" target="_blank" rel="noopener">Ver Produto →</a>
        </article>
        <article className="produto">
          <h3>Jaleco Manoel Azul Marinho</h3>
          <a href="https://www.danajalecos.com.br/shop/jalecos/masculinos/manoel/jaleco-manoel-azul-marinho/" target="_blank" rel="noopener">Ver Produto →</a>
        </article>
        <article className="produto">
          <h3>Jaleco Manoel Chumbo</h3>
          <a href="https://www.danajalecos.com.br/shop/jalecos/masculinos/manoel/jaleco-manoel-chumbo/" target="_blank" rel="noopener">Ver Produto →</a>
        </article>
        <article className="produto">
          <h3>Jaleco Bernardo Branco</h3>
          <a href="https://www.danajalecos.com.br/shop/jalecos/masculinos/bernardo/jaleco-bernardo-branco/" target="_blank" rel="noopener">Ver Produto →</a>
        </article>
        <article className="produto">
          <h3>Jaleco Heitor Branco</h3>
          <a href="https://www.danajalecos.com.br/shop/jalecos/masculinos/heitor/jaleco-heitor-branco/" target="_blank" rel="noopener">Ver Produto →</a>
        </article>
        <article className="produto">
          <h3>Jaleco Samuel Azul Marinho</h3>
          <a href="https://www.danajalecos.com.br/shop/jalecos/masculinos/samuel/jaleco-samuel-azul-marinho/" target="_blank" rel="noopener">Ver Produto →</a>
        </article>
        <article className="produto">
          <h3>Jaleco Paulo Preto</h3>
          <a href="https://www.danajalecos.com.br/shop/jalecos/masculinos/paulo/jaleco-paulo-preto/" target="_blank" rel="noopener">Ver Produto →</a>
        </article>
        <article className="produto">
          <h3>Jaleco Paulo Azul Marinho</h3>
          <a href="https://www.danajalecos.com.br/shop/jalecos/masculinos/paulo/jaleco-paulo-azul-marinho/" target="_blank" rel="noopener">Ver Produto →</a>
        </article>
          </div>

          <h2>Jalecos Femininos (138 produtos)</h2>
          <div className="grid">
        <article className="produto">
          <h3>Jaleco Feminino Manuela Estampado Fazendinha</h3>
          <a href="https://www.danajalecos.com.br/jaleco-feminino-manuela-estampado-fazendinha" target="_blank" rel="noopener">Ver Produto →</a>
        </article>
        <article className="produto">
          <h3>Jaleco Lia Branco</h3>
          <a href="https://www.danajalecos.com.br/shop/jalecos/feminino/lia/jaleco-lia-branco/" target="_blank" rel="noopener">Ver Produto →</a>
        </article>
        <article className="produto">
          <h3>Jaleco Feminino Dani Rosa Nude</h3>
          <a href="https://www.danajalecos.com.br/jaleco-feminino-dani-rosa-nude" target="_blank" rel="noopener">Ver Produto →</a>
        </article>
        <article className="produto">
          <h3>Jaleco Dani Azul Bebe</h3>
          <a href="https://www.danajalecos.com.br/shop/jalecos/feminino/dani/jaleco-dani-azul-bebe/" target="_blank" rel="noopener">Ver Produto →</a>
        </article>
        <article className="produto">
          <h3>Jaleco Dani Coral</h3>
          <a href="https://www.danajalecos.com.br/shop/jalecos/feminino/dani/jaleco-dani-coral/" target="_blank" rel="noopener">Ver Produto →</a>
        </article>
        <article className="produto">
          <h3>Preto</h3>
          <a href="https://www.danajalecos.com.br/shop/jalecos/feminino/dani/preto/" target="_blank" rel="noopener">Ver Produto →</a>
        </article>
        <article className="produto">
          <h3>Jaleco Dani Amarelo</h3>
          <a href="https://www.danajalecos.com.br/shop/jalecos/feminino/dani/jaleco-dani-amarelo/" target="_blank" rel="noopener">Ver Produto →</a>
        </article>
        <article className="produto">
          <h3>Jaleco Lia Preto</h3>
          <a href="https://www.danajalecos.com.br/shop/jalecos/feminino/lia/jaleco-lia-preto/" target="_blank" rel="noopener">Ver Produto →</a>
        </article>
        <article className="produto">
          <h3>Jaleco Beatriz Branco</h3>
          <a href="https://www.danajalecos.com.br/shop/jalecos/feminino/beatriz/jaleco-beatriz-branco/" target="_blank" rel="noopener">Ver Produto →</a>
        </article>
        <article className="produto">
          <h3>Jaleco Feminino Manuela Estampado Liga Da Fofura</h3>
          <a href="https://www.danajalecos.com.br/jaleco-feminino-manuela-estampado-liga-da-fofura" target="_blank" rel="noopener">Ver Produto →</a>
        </article>
        <article className="produto">
          <h3>Jaleco Feminino Manuela Estampado Pecas De Amor</h3>
          <a href="https://www.danajalecos.com.br/jaleco-feminino-manuela-estampado-pecas-de-amor" target="_blank" rel="noopener">Ver Produto →</a>
        </article>
        <article className="produto">
          <h3>Jaleco Beatriz Preto</h3>
          <a href="https://www.danajalecos.com.br/shop/jalecos/feminino/beatriz/jaleco-beatriz-preto/" target="_blank" rel="noopener">Ver Produto →</a>
        </article>
        <article className="produto">
          <h3>Jaleco Ester Preto</h3>
          <a href="https://www.danajalecos.com.br/shop/jalecos/feminino/ester/jaleco-ester-preto/" target="_blank" rel="noopener">Ver Produto →</a>
        </article>
        <article className="produto">
          <h3>Jaleco Rute Branco</h3>
          <a href="https://www.danajalecos.com.br/shop/jalecos/feminino/rute/jaleco-rute-branco/" target="_blank" rel="noopener">Ver Produto →</a>
        </article>
        <article className="produto">
          <h3>Jaleco Rute Preto</h3>
          <a href="https://www.danajalecos.com.br/shop/jalecos/feminino/rute/jaleco-rute-preto/" target="_blank" rel="noopener">Ver Produto →</a>
        </article>
        <article className="produto">
          <h3>Jaleco Feminino Rute Verde Claro</h3>
          <a href="https://www.danajalecos.com.br/jaleco-feminino-rute-verde-claro" target="_blank" rel="noopener">Ver Produto →</a>
        </article>
        <article className="produto">
          <h3>Jaleco Rute Amarelo</h3>
          <a href="https://www.danajalecos.com.br/shop/jalecos/feminino/rute/jaleco-rute-amarelo/" target="_blank" rel="noopener">Ver Produto →</a>
        </article>
        <article className="produto">
          <h3>Jaleco Rute Rosa Nude</h3>
          <a href="https://www.danajalecos.com.br/shop/jalecos/feminino/rute/jaleco-rute-rosa-nude/" target="_blank" rel="noopener">Ver Produto →</a>
        </article>
        <article className="produto">
          <h3>Jaleco Rute Bordo</h3>
          <a href="https://www.danajalecos.com.br/shop/jalecos/feminino/rute/jaleco-rute-bordo/" target="_blank" rel="noopener">Ver Produto →</a>
        </article>
        <article className="produto">
          <h3>Jaleco Rute Azul Bebe</h3>
          <a href="https://www.danajalecos.com.br/shop/jalecos/feminino/rute/jaleco-rute-azul-bebe/" target="_blank" rel="noopener">Ver Produto →</a>
        </article>
          </div>

          <h2>Scrubs Masculinos (15 produtos)</h2>
          <div className="grid">
        <article className="produto">
          <h3>Scrub Masculino Branco Confy Manga Curta</h3>
          <a href="https://www.danajalecos.com.br/shop/scrubs/masculino-scrubs/scrub-comfy-masculino-scrubs/scrub-masculino-branco-confy-manga-curta/" target="_blank" rel="noopener">Ver Produto →</a>
        </article>
        <article className="produto">
          <h3>Scrub Masculino Preto Confy Manga Curta</h3>
          <a href="https://www.danajalecos.com.br/shop/scrubs/masculino-scrubs/scrub-comfy-masculino-scrubs/scrub-masculino-preto-confy-manga-curta/" target="_blank" rel="noopener">Ver Produto →</a>
        </article>
        <article className="produto">
          <h3>Scrub Masculinotec Easy Lorenzo Azul Marinho</h3>
          <a href="https://www.danajalecos.com.br/shop/scrubs/masculino-scrubs/scrub-masculinotec-easy-lorenzo-azul-marinho/" target="_blank" rel="noopener">Ver Produto →</a>
        </article>
        <article className="produto">
          <h3>Scrub Masculino Chumbo Confy Manga Curta</h3>
          <a href="https://www.danajalecos.com.br/shop/scrubs/masculino-scrubs/scrub-comfy-masculino-scrubs/scrub-masculino-chumbo-confy-manga-curta/" target="_blank" rel="noopener">Ver Produto →</a>
        </article>
        <article className="produto">
          <h3>Scrub Masculino Bordo Confy Manga Curta</h3>
          <a href="https://www.danajalecos.com.br/shop/scrubs/masculino-scrubs/scrub-comfy-masculino-scrubs/scrub-masculino-bordo-confy-manga-curta/" target="_blank" rel="noopener">Ver Produto →</a>
        </article>
        <article className="produto">
          <h3>Scrub Masculino Preto</h3>
          <a href="https://www.danajalecos.com.br/shop/scrubs/masculino-scrubs/scrub-tradicional-masculino-scrubs/scrub-masculino-preto/" target="_blank" rel="noopener">Ver Produto →</a>
        </article>
        <article className="produto">
          <h3>Scrub Masculino Chumbo</h3>
          <a href="https://www.danajalecos.com.br/shop/scrubs/masculino-scrubs/scrub-tradicional-masculino-scrubs/scrub-masculino-chumbo/" target="_blank" rel="noopener">Ver Produto →</a>
        </article>
        <article className="produto">
          <h3>Scrub Masculinotec Easy Lorenzo Verde Militar</h3>
          <a href="https://www.danajalecos.com.br/shop/scrubs/masculino-scrubs/scrub-masculinotec-easy-lorenzo-verde-militar/" target="_blank" rel="noopener">Ver Produto →</a>
        </article>
        <article className="produto">
          <h3>Scrub Masculinotec Easy Lorenzo Azul Royal</h3>
          <a href="https://www.danajalecos.com.br/shop/scrubs/masculino-scrubs/scrub-masculinotec-easy-lorenzo-azul-royal/" target="_blank" rel="noopener">Ver Produto →</a>
        </article>
        <article className="produto">
          <h3>Scrub Masculinotec Easy Lorenzo Preto</h3>
          <a href="https://www.danajalecos.com.br/shop/scrubs/masculino-scrubs/scrub-masculinotec-easy-lorenzo-preto/" target="_blank" rel="noopener">Ver Produto →</a>
        </article>
        <article className="produto">
          <h3>Scrub Masculinotec Easy Lorenzo Branco</h3>
          <a href="https://www.danajalecos.com.br/shop/scrubs/masculino-scrubs/scrub-masculinotec-easy-lorenzo-branco/" target="_blank" rel="noopener">Ver Produto →</a>
        </article>
        <article className="produto">
          <h3>Scrub Masculinotec Easy Lorenzo Camel</h3>
          <a href="https://www.danajalecos.com.br/shop/scrubs/masculino-scrubs/scrub-masculinotec-easy-lorenzo-camel/" target="_blank" rel="noopener">Ver Produto →</a>
        </article>
        <article className="produto">
          <h3>Scrub Masculino Azul Marinho Confy Manga Curta</h3>
          <a href="https://www.danajalecos.com.br/shop/scrubs/masculino-scrubs/scrub-comfy-masculino-scrubs/scrub-masculino-azul-marinho-confy-manga-curta/" target="_blank" rel="noopener">Ver Produto →</a>
        </article>
        <article className="produto">
          <h3>Scrub Masculino Bordo</h3>
          <a href="https://www.danajalecos.com.br/shop/scrubs/masculino-scrubs/scrub-tradicional-masculino-scrubs/scrub-masculino-bordo/" target="_blank" rel="noopener">Ver Produto →</a>
        </article>
        <article className="produto">
          <h3>Scrub Masculino Azul Marinho</h3>
          <a href="https://www.danajalecos.com.br/shop/scrubs/masculino-scrubs/scrub-tradicional-masculino-scrubs/scrub-masculino-azul-marinho/" target="_blank" rel="noopener">Ver Produto →</a>
        </article>
          </div>

          <h2>Scrubs Femininos (36 produtos)</h2>
          <div className="grid">
        <article className="produto">
          <h3>Scrub Feminino Branco Confy Manga Curta</h3>
          <a href="https://www.danajalecos.com.br/shop/scrubs/feminino-scrubs/scrub-comfy/scrub-feminino-branco-confy-manga-curta/" target="_blank" rel="noopener">Ver Produto →</a>
        </article>
        <article className="produto">
          <h3>Scrub Feminino Preto Confy Manga Curta</h3>
          <a href="https://www.danajalecos.com.br/shop/scrubs/feminino-scrubs/scrub-comfy/scrub-feminino-preto-confy-manga-curta/" target="_blank" rel="noopener">Ver Produto →</a>
        </article>
        <article className="produto">
          <h3>Scrub Feminino Azul Bebe Confy Manga Curta</h3>
          <a href="https://www.danajalecos.com.br/shop/scrubs/feminino-scrubs/scrub-comfy/scrub-feminino-azul-bebe-confy-manga-curta/" target="_blank" rel="noopener">Ver Produto →</a>
        </article>
        <article className="produto">
          <h3>Scrub Feminino Amarelo Confy Manga Curta</h3>
          <a href="https://www.danajalecos.com.br/shop/scrubs/feminino-scrubs/scrub-comfy/scrub-feminino-amarelo-confy-manga-curta/" target="_blank" rel="noopener">Ver Produto →</a>
        </article>
        <article className="produto">
          <h3>Scrub Feminino Verde Claro Confy Manga Curta</h3>
          <a href="https://www.danajalecos.com.br/shop/scrubs/feminino-scrubs/scrub-comfy/scrub-feminino-verde-claro-confy-manga-curta/" target="_blank" rel="noopener">Ver Produto →</a>
        </article>
        <article className="produto">
          <h3>Scrub Feminino Bordo Confy Manga Curta</h3>
          <a href="https://www.danajalecos.com.br/shop/scrubs/feminino-scrubs/scrub-comfy/scrub-feminino-bordo-confy-manga-curta/" target="_blank" rel="noopener">Ver Produto →</a>
        </article>
        <article className="produto">
          <h3>Scrub Feminino Rosa Nude Confy Manga Curta</h3>
          <a href="https://www.danajalecos.com.br/shop/scrubs/feminino-scrubs/scrub-comfy/scrub-feminino-rosa-nude-confy-manga-curta/" target="_blank" rel="noopener">Ver Produto →</a>
        </article>
        <article className="produto">
          <h3>Scrub Feminino Coral Confy Manga Curta</h3>
          <a href="https://www.danajalecos.com.br/shop/scrubs/feminino-scrubs/scrub-comfy/scrub-feminino-coral-confy-manga-curta/" target="_blank" rel="noopener">Ver Produto →</a>
        </article>
        <article className="produto">
          <h3>Scrub Feminino Azul Marinho</h3>
          <a href="https://www.danajalecos.com.br/shop/scrubs/feminino-scrubs/scrub-tradicional/scrub-feminino-azul-marinho/" target="_blank" rel="noopener">Ver Produto →</a>
        </article>
        <article className="produto">
          <h3>Scrub Feminino Chumbo</h3>
          <a href="https://www.danajalecos.com.br/shop/scrubs/feminino-scrubs/scrub-tradicional/scrub-feminino-chumbo/" target="_blank" rel="noopener">Ver Produto →</a>
        </article>
        <article className="produto">
          <h3>Scrub Feminino Azul Bebe</h3>
          <a href="https://www.danajalecos.com.br/shop/scrubs/feminino-scrubs/scrub-tradicional/scrub-feminino-azul-bebe" target="_blank" rel="noopener">Ver Produto →</a>
        </article>
        <article className="produto">
          <h3>Scrub Feminino Bege</h3>
          <a href="https://www.danajalecos.com.br/shop/scrubs/feminino-scrubs/scrub-tradicional/scrub-feminino-bege/" target="_blank" rel="noopener">Ver Produto →</a>
        </article>
        <article className="produto">
          <h3>Scrub Feminino Rosa Pink</h3>
          <a href="https://www.danajalecos.com.br/shop/scrubs/feminino-scrubs/scrub-tradicional/scrub-feminino-rosa-pink/" target="_blank" rel="noopener">Ver Produto →</a>
        </article>
        <article className="produto">
          <h3>Scrub Feminino Rosa Nude</h3>
          <a href="https://www.danajalecos.com.br/shop/scrubs/feminino-scrubs/scrub-tradicional/scrub-feminino-rosa-nude/" target="_blank" rel="noopener">Ver Produto →</a>
        </article>
        <article className="produto">
          <h3>Scrub Feminino Branco</h3>
          <a href="https://www.danajalecos.com.br/shop/scrubs/feminino-scrubs/scrub-tradicional/scrub-feminino-branco/" target="_blank" rel="noopener">Ver Produto →</a>
        </article>
        <article className="produto">
          <h3>Scrub Feminino Verde Claro</h3>
          <a href="https://www.danajalecos.com.br/shop/scrubs/feminino-scrubs/scrub-tradicional/scrub-feminino-verde-claro/" target="_blank" rel="noopener">Ver Produto →</a>
        </article>
        <article className="produto">
          <h3>Scrub Feminino Preto</h3>
          <a href="https://www.danajalecos.com.br/shop/scrubs/feminino-scrubs/scrub-tradicional/scrub-feminino-preto/" target="_blank" rel="noopener">Ver Produto →</a>
        </article>
        <article className="produto">
          <h3>Scrub Feminino Azul Medio</h3>
          <a href="https://www.danajalecos.com.br/shop/scrubs/feminino-scrubs/scrub-tradicional/scrub-feminino-azul-medio/" target="_blank" rel="noopener">Ver Produto →</a>
        </article>
        <article className="produto">
          <h3>Scrub Feminino Rosa Bebe</h3>
          <a href="https://www.danajalecos.com.br/shop/scrubs/feminino-scrubs/scrub-tradicional/scrub-feminino-rosa-bebe/" target="_blank" rel="noopener">Ver Produto →</a>
        </article>
        <article className="produto">
          <h3>Scrub Feminino Verde Escuro</h3>
          <a href="https://www.danajalecos.com.br/shop/scrubs/feminino-scrubs/scrub-tradicional/scrub-feminino-verde-escuro/" target="_blank" rel="noopener">Ver Produto →</a>
        </article>
          </div>

          <h2>Gorros (89 produtos)</h2>
          <div className="grid">
        <article className="produto">
          <h3>Gorro Unissex A Pet Love</h3>
          <a href="https://www.danajalecos.com.br/gorro-unissex-a-pet-love" target="_blank" rel="noopener">Ver Produto →</a>
        </article>
        <article className="produto">
          <h3>Gorro Unissex A Cardio Blue</h3>
          <a href="https://www.danajalecos.com.br/gorro-unissex-a-cardio-blue" target="_blank" rel="noopener">Ver Produto →</a>
        </article>
        <article className="produto">
          <h3>Gorro Unissex D Geometria</h3>
          <a href="https://www.danajalecos.com.br/gorro-unissex-d-geometria" target="_blank" rel="noopener">Ver Produto →</a>
        </article>
        <article className="produto">
          <h3>Gorro Unissex A Fazendinha</h3>
          <a href="https://www.danajalecos.com.br/gorro-unissex-a-fazendinha" target="_blank" rel="noopener">Ver Produto →</a>
        </article>
        <article className="produto">
          <h3>Gorro Unissex A Pecas De Amor</h3>
          <a href="https://www.danajalecos.com.br/gorro-unissex-a-pecas-de-amor" target="_blank" rel="noopener">Ver Produto →</a>
        </article>
        <article className="produto">
          <h3>Gorro Unissex A Geometria</h3>
          <a href="https://www.danajalecos.com.br/gorro-unissex-a-geometria" target="_blank" rel="noopener">Ver Produto →</a>
        </article>
        <article className="produto">
          <h3>Gorro Unissex A Linguas Bocas Blah</h3>
          <a href="https://www.danajalecos.com.br/gorro-unissex-a-linguas-bocas-blah" target="_blank" rel="noopener">Ver Produto →</a>
        </article>
        <article className="produto">
          <h3>Gorro Unissex D Linguas Blah</h3>
          <a href="https://www.danajalecos.com.br/gorro-unissex-d-linguas-blah" target="_blank" rel="noopener">Ver Produto →</a>
        </article>
        <article className="produto">
          <h3>Gorro Unissex A Rock</h3>
          <a href="https://www.danajalecos.com.br/gorro-unissex-a-rock" target="_blank" rel="noopener">Ver Produto →</a>
        </article>
        <article className="produto">
          <h3>Gorro Unissex D Tec Easy Rosa</h3>
          <a href="https://www.danajalecos.com.br/gorro-unissex-d-tec-easy-rosa" target="_blank" rel="noopener">Ver Produto →</a>
        </article>
        <article className="produto">
          <h3>Gorro Unissex D Bege</h3>
          <a href="https://www.danajalecos.com.br/gorro-unissex-d-bege" target="_blank" rel="noopener">Ver Produto →</a>
        </article>
        <article className="produto">
          <h3>Gorro Feminino Marmore</h3>
          <a href="https://www.danajalecos.com.br/gorro-feminino-marmore" target="_blank" rel="noopener">Ver Produto →</a>
        </article>
        <article className="produto">
          <h3>Gorro Feminino Piel De Pouli</h3>
          <a href="https://www.danajalecos.com.br/shop/acessorios/gorros/gorro-feminino-piel-de-pouli/" target="_blank" rel="noopener">Ver Produto →</a>
        </article>
        <article className="produto">
          <h3>Gorro Feminino Animal Print</h3>
          <a href="https://www.danajalecos.com.br/gorro-feminino-animal-print" target="_blank" rel="noopener">Ver Produto →</a>
        </article>
        <article className="produto">
          <h3>Gorro Feminino Animal Print Cinza</h3>
          <a href="https://www.danajalecos.com.br/gorro-feminino-animal-print-cinza" target="_blank" rel="noopener">Ver Produto →</a>
        </article>
        <article className="produto">
          <h3>Gorro Feminino Xadrez</h3>
          <a href="https://www.danajalecos.com.br/gorro-feminino-xadrez" target="_blank" rel="noopener">Ver Produto →</a>
        </article>
        <article className="produto">
          <h3>Gorro Feminino Cilios</h3>
          <a href="https://www.danajalecos.com.br/shop/acessorios/gorros/gorro-feminino-cilios/" target="_blank" rel="noopener">Ver Produto →</a>
        </article>
        <article className="produto">
          <h3>Gorro Feminino Dente Love</h3>
          <a href="https://www.danajalecos.com.br/shop/acessorios/gorros/gorro-feminino-dente-love/" target="_blank" rel="noopener">Ver Produto →</a>
        </article>
        <article className="produto">
          <h3>Gorro Feminino Fitas Tape</h3>
          <a href="https://www.danajalecos.com.br/shop/acessorios/gorros/gorro-feminino-fitas-tape/" target="_blank" rel="noopener">Ver Produto →</a>
        </article>
        <article className="produto">
          <h3>Gorro Masculino Fitas Tape</h3>
          <a href="https://www.danajalecos.com.br/shop/acessorios/gorros/gorro-masculino-fitas-tape/" target="_blank" rel="noopener">Ver Produto →</a>
        </article>
          </div>

          <h2>Outros (147 produtos)</h2>
          <div className="grid">
        <article className="produto">
          <h3>Kit Office</h3>
          <a href="https://www.danajalecos.com.br/kit-office" target="_blank" rel="noopener">Ver Produto →</a>
        </article>
        <article className="produto">
          <h3>Jaleco Heloisa Branco</h3>
          <a href="https://www.danajalecos.com.br/jaleco-heloisa-branco" target="_blank" rel="noopener">Ver Produto →</a>
        </article>
        <article className="produto">
          <h3>Jaleco Heloisa Preto</h3>
          <a href="https://www.danajalecos.com.br/jaleco-heloisa-preto" target="_blank" rel="noopener">Ver Produto →</a>
        </article>
        <article className="produto">
          <h3>Vestido Feminino Comfy Preto</h3>
          <a href="https://www.danajalecos.com.br/vestido-feminino-comfy-preto" target="_blank" rel="noopener">Ver Produto →</a>
        </article>
        <article className="produto">
          <h3>Turbante Lurex Branco Dourado</h3>
          <a href="https://www.danajalecos.com.br/shop/acessorios/turbantes/turbante-lurex-branco-dourado/" target="_blank" rel="noopener">Ver Produto →</a>
        </article>
        <article className="produto">
          <h3>Avental Cozinha Gabardine Preto</h3>
          <a href="https://www.danajalecos.com.br/avental-cozinha-gabardine-preto" target="_blank" rel="noopener">Ver Produto →</a>
        </article>
        <article className="produto">
          <h3>Kit Avental Infantil Rosa Bebe Unico</h3>
          <a href="https://www.danajalecos.com.br/kit-avental-infantil-rosa-bebe-unico" target="_blank" rel="noopener">Ver Produto →</a>
        </article>
        <article className="produto">
          <h3>Macacao Feminino Manga Longa Branco</h3>
          <a href="https://www.danajalecos.com.br/macacao-feminino-manga-longa-branco" target="_blank" rel="noopener">Ver Produto →</a>
        </article>
        <article className="produto">
          <h3>Jaleco Masculino Manoel Estampado Pecas De Amor</h3>
          <a href="https://www.danajalecos.com.br/jaleco-masculino-manoel-estampado-pecas-de-amor" target="_blank" rel="noopener">Ver Produto →</a>
        </article>
        <article className="produto">
          <h3>Dolma Feminina Algodao Branco</h3>
          <a href="https://www.danajalecos.com.br/shop/jalecos/dolmas/feminino-dolmas/dolma-feminina-algodao-branco/" target="_blank" rel="noopener">Ver Produto →</a>
        </article>
        <article className="produto">
          <h3>Dolma Feminina Algodao Preto</h3>
          <a href="https://www.danajalecos.com.br/shop/jalecos/dolmas/feminino-dolmas/dolma-feminina-algodao-preto/" target="_blank" rel="noopener">Ver Produto →</a>
        </article>
        <article className="produto">
          <h3>Avental Linho Longo Ferrugem</h3>
          <a href="https://www.danajalecos.com.br/avental-linho-longo-ferrugem" target="_blank" rel="noopener">Ver Produto →</a>
        </article>
        <article className="produto">
          <h3>Scrub Masculino Tec Easy Lorenzo Azul Ciano</h3>
          <a href="https://www.danajalecos.com.br/scrub-masculino-tec-easy-lorenzo-azul-ciano" target="_blank" rel="noopener">Ver Produto →</a>
        </article>
        <article className="produto">
          <h3>Jaleco Masculino Isac Chumbo</h3>
          <a href="https://www.danajalecos.com.br/jaleco-masculino-isac-chumbo" target="_blank" rel="noopener">Ver Produto →</a>
        </article>
        <article className="produto">
          <h3>Jaleco Masculino Isac Bordo</h3>
          <a href="https://www.danajalecos.com.br/jaleco-masculino-isac-bordo" target="_blank" rel="noopener">Ver Produto →</a>
        </article>
        <article className="produto">
          <h3>Jaleco Masculino Isac Bege</h3>
          <a href="https://www.danajalecos.com.br/jaleco-masculino-isac-bege" target="_blank" rel="noopener">Ver Produto →</a>
        </article>
        <article className="produto">
          <h3>Kit Avental Infantil Azul Bebe Unico</h3>
          <a href="https://www.danajalecos.com.br/kit-avental-infantil-azul-bebe-unico" target="_blank" rel="noopener">Ver Produto →</a>
        </article>
        <article className="produto">
          <h3>Macacao Feminino Manga Curta Branco</h3>
          <a href="https://www.danajalecos.com.br/shop/macacao/macacao-feminino-manga-curta-branco/" target="_blank" rel="noopener">Ver Produto →</a>
        </article>
        <article className="produto">
          <h3>Macacao Feminino Manga Curta Chumbo</h3>
          <a href="https://www.danajalecos.com.br/shop/macacao/macacao-feminino-manga-curta-chumbo/" target="_blank" rel="noopener">Ver Produto →</a>
        </article>
        <article className="produto">
          <h3>Macacao Feminino Manga Curta Verde Claro</h3>
          <a href="https://www.danajalecos.com.br/shop/macacao/macacao-feminino-manga-curta-verde-claro/" target="_blank" rel="noopener">Ver Produto →</a>
        </article>
          </div>

          <footer>
            <p><strong>Jana Dalecos © 2026</strong> - Uniformes Médicos Profissionais</p>
            <p>Total de 467 produtos disponíveis no catálogo completo</p>
            <p>Dados extraídos em: {new Date('2026-02-12T23:15:20.845Z').toLocaleString('pt-BR')}</p>
          </footer>
        </div>
      </body>
    </html>
  );
}
