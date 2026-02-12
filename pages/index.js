export default function Home() {
  return (
    <html lang="pt-BR">
      <head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Catálogo Jana Dalecos - 35 Produtos: Jalecos, Scrubs e Uniformes Médicos</title>
        <meta name="description" content="Catálogo completo Jana Dalecos com 35 produtos: jalecos masculinos e femininos, scrubs, gorros cirúrgicos e uniformes médicos profissionais." />
        <meta name="keywords" content="jaleco, scrub, gorro cirúrgico, uniforme médico, jaleco masculino, jaleco feminino, dana jalecos" />
        <style>{`
          * { margin: 0; padding: 0; box-sizing: border-box; }
          body { font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Arial, sans-serif; line-height: 1.6; background: #f7f8fa; color: #2c3e50; }
          .container { max-width: 1200px; margin: 0 auto; padding: 20px; }
          header { background: linear-gradient(135deg, #3498db 0%, #2980b9 100%); color: white; padding: 40px 20px; text-align: center; box-shadow: 0 4px 6px rgba(0,0,0,0.1); }
          h1 { font-size: 2.5em; margin-bottom: 10px; font-weight: 700; }
          .subtitle { font-size: 1.2em; opacity: 0.95; }
          .info-box { background: white; border-radius: 10px; padding: 25px; margin: 30px 0; box-shadow: 0 2px 8px rgba(0,0,0,0.08); border-left: 5px solid #3498db; }
          .info-box h2 { color: #3498db; font-size: 1.4em; margin-bottom: 15px; }
          .info-box p { margin: 8px 0; font-size: 1.05em; }
          .info-box a { color: #3498db; text-decoration: none; font-weight: 600; }
          .info-box a:hover { text-decoration: underline; }
          .category { margin: 50px 0; }
          .category h2 { color: #2c3e50; font-size: 2em; margin-bottom: 25px; padding-bottom: 12px; border-bottom: 3px solid #3498db; display: flex; align-items: center; gap: 10px; }
          .products-grid { display: grid; grid-template-columns: repeat(auto-fill, minmax(300px, 1fr)); gap: 25px; }
          .product-card { background: white; border-radius: 10px; padding: 25px; box-shadow: 0 2px 10px rgba(0,0,0,0.08); transition: all 0.3s ease; border: 2px solid transparent; }
          .product-card:hover { transform: translateY(-5px); box-shadow: 0 8px 20px rgba(0,0,0,0.15); border-color: #3498db; }
          .product-card h3 { color: #2c3e50; font-size: 1.3em; margin-bottom: 12px; line-height: 1.4; }
          .product-meta { color: #7f8c8d; font-size: 0.9em; margin: 8px 0; }
          .product-link { display: inline-block; margin-top: 15px; padding: 12px 24px; background: #3498db; color: white; text-decoration: none; border-radius: 6px; font-weight: 600; transition: background 0.3s ease; }
          .product-link:hover { background: #2980b9; }
          footer { background: #2c3e50; color: white; text-align: center; padding: 30px 20px; margin-top: 60px; }
          footer p { margin: 5px 0; }
          .stats { display: grid; grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); gap: 15px; margin: 20px 0; }
          .stat-item { background: #ecf0f1; padding: 15px; border-radius: 8px; text-align: center; }
          .stat-number { font-size: 2em; font-weight: bold; color: #3498db; }
          .stat-label { color: #7f8c8d; font-size: 0.9em; }
        `}</style>
      </head>
      <body>
        <header>
          <h1>📦 Catálogo Jana Dalecos</h1>
          <p className="subtitle">Uniformes Médicos Profissionais</p>
        </header>

        <div className="container">
          <div className="info-box">
            <h2>🏪 Informações da Loja</h2>
            <p><strong>Loja:</strong> Jana Dalecos - Referência em Uniformes Médicos</p>
            <p><strong>Website:</strong> <a href="https://www.danajalecos.com.br" target="_blank">www.danajalecos.com.br</a></p>
            <p><strong>Última Atualização:</strong> {new Date().toLocaleDateString('pt-BR', { day: '2-digit', month: 'long', year: 'numeric' })}</p>
            
            <div className="stats">
              <div className="stat-item">
                <div className="stat-number">35</div>
                <div className="stat-label">Produtos em Destaque</div>
              </div>
              <div className="stat-item">
                <div className="stat-number">467</div>
                <div className="stat-label">Total no Catálogo</div>
              </div>
              <div className="stat-item">
                <div className="stat-number">4</div>
                <div className="stat-label">Categorias</div>
              </div>
            </div>
          </div>

          <section className="category">
            <h2>👨‍⚕️ Jalecos Masculinos</h2>
            <div className="products-grid">
              <article className="product-card">
                <h3>Jaleco Isac Branco</h3>
                <p className="product-meta">Categoria: Jalecos Masculinos | Modelo: Isac</p>
                <a className="product-link" href="https://www.danajalecos.com.br/shop/jalecos/masculinos/isac/jaleco-isac-branco/" target="_blank" rel="noopener">Ver Produto →</a>
              </article>

              <article className="product-card">
                <h3>Jaleco Samuel Chumbo</h3>
                <p className="product-meta">Categoria: Jalecos Masculinos | Modelo: Samuel</p>
                <a className="product-link" href="https://www.danajalecos.com.br/shop/jalecos/masculinos/samuel/jaleco-samuel-chumbo/" target="_blank" rel="noopener">Ver Produto →</a>
              </article>

              <article className="product-card">
                <h3>Jaleco Samuel Branco</h3>
                <p className="product-meta">Categoria: Jalecos Masculinos | Modelo: Samuel</p>
                <a className="product-link" href="https://www.danajalecos.com.br/shop/jalecos/masculinos/samuel/jaleco-samuel-branco/" target="_blank" rel="noopener">Ver Produto →</a>
              </article>

              <article className="product-card">
                <h3>Jaleco Isac Preto</h3>
                <p className="product-meta">Categoria: Jalecos Masculinos | Modelo: Isac</p>
                <a className="product-link" href="https://www.danajalecos.com.br/shop/jalecos/masculinos/isac/jaleco-isac-preto/" target="_blank" rel="noopener">Ver Produto →</a>
              </article>

              <article className="product-card">
                <h3>Jaleco Isac Azul Marinho</h3>
                <p className="product-meta">Categoria: Jalecos Masculinos | Modelo: Isac</p>
                <a className="product-link" href="https://www.danajalecos.com.br/shop/jalecos/masculinos/isac/jaleco-isac-azul-marinho/" target="_blank" rel="noopener">Ver Produto →</a>
              </article>

              <article className="product-card">
                <h3>Jaleco Noah Bege</h3>
                <p className="product-meta">Categoria: Jalecos Masculinos | Modelo: Noah</p>
                <a className="product-link" href="https://www.danajalecos.com.br/shop/jalecos/masculinos/noah/jaleco-noah-bege/" target="_blank" rel="noopener">Ver Produto →</a>
              </article>

              <article className="product-card">
                <h3>Jaleco Manoel Bordô</h3>
                <p className="product-meta">Categoria: Jalecos Masculinos | Modelo: Manoel</p>
                <a className="product-link" href="https://www.danajalecos.com.br/shop/jalecos/masculinos/manoel/jaleco-manoel-bordo/" target="_blank" rel="noopener">Ver Produto →</a>
              </article>

              <article className="product-card">
                <h3>Jaleco Manoel Azul Médio</h3>
                <p className="product-meta">Categoria: Jalecos Masculinos | Modelo: Manoel</p>
                <a className="product-link" href="https://www.danajalecos.com.br/shop/jalecos/masculinos/manoel/jaleco-manoel-azul-medio/" target="_blank" rel="noopener">Ver Produto →</a>
              </article>

              <article className="product-card">
                <h3>Jaleco Manoel Verde Claro</h3>
                <p className="product-meta">Categoria: Jalecos Masculinos | Modelo: Manoel</p>
                <a className="product-link" href="https://www.danajalecos.com.br/shop/jalecos/masculinos/manoel/jaleco-manoel-verde-claro/" target="_blank" rel="noopener">Ver Produto →</a>
              </article>

              <article className="product-card">
                <h3>Jaleco Manoel Bege</h3>
                <p className="product-meta">Categoria: Jalecos Masculinos | Modelo: Manoel</p>
                <a className="product-link" href="https://www.danajalecos.com.br/shop/jalecos/masculinos/manoel/jaleco-manoel-bege/" target="_blank" rel="noopener">Ver Produto →</a>
              </article>
            </div>
          </section>

          <section className="category">
            <h2>👩‍⚕️ Jalecos Femininos</h2>
            <div className="products-grid">
              <article className="product-card">
                <h3>Jaleco Feminino Manuela Estampado Fazendinha</h3>
                <p className="product-meta">Categoria: Jalecos Femininos | Modelo: Manuela</p>
                <a className="product-link" href="https://www.danajalecos.com.br/shop/jalecos/feminino/manuela/jaleco-feminino-manuela-estampado-fazendinha/" target="_blank" rel="noopener">Ver Produto →</a>
              </article>

              <article className="product-card">
                <h3>Jaleco Heloísa Branco</h3>
                <p className="product-meta">Categoria: Jalecos Femininos | Modelo: Heloísa</p>
                <a className="product-link" href="https://www.danajalecos.com.br/shop/jalecos/femininos-ziper/heloisa/jaleco-heloisa-branco/" target="_blank" rel="noopener">Ver Produto →</a>
              </article>

              <article className="product-card">
                <h3>Jaleco Heloísa Preto</h3>
                <p className="product-meta">Categoria: Jalecos Femininos | Modelo: Heloísa</p>
                <a className="product-link" href="https://www.danajalecos.com.br/shop/jalecos/femininos-ziper/heloisa/jaleco-heloisa-preto/" target="_blank" rel="noopener">Ver Produto →</a>
              </article>

              <article className="product-card">
                <h3>Jaleco Lia Branco</h3>
                <p className="product-meta">Categoria: Jalecos Femininos | Modelo: Lia</p>
                <a className="product-link" href="https://www.danajalecos.com.br/shop/jalecos/feminino/lia/jaleco-lia-branco/" target="_blank" rel="noopener">Ver Produto →</a>
              </article>

              <article className="product-card">
                <h3>Jaleco Feminino Dani Rosa Nude</h3>
                <p className="product-meta">Categoria: Jalecos Femininos | Modelo: Dani</p>
                <a className="product-link" href="https://www.danajalecos.com.br/shop/jalecos/feminino/dani/jaleco-feminino-dani-rosa-nude/" target="_blank" rel="noopener">Ver Produto →</a>
              </article>

              <article className="product-card">
                <h3>Jaleco Dani Azul Bebê</h3>
                <p className="product-meta">Categoria: Jalecos Femininos | Modelo: Dani</p>
                <a className="product-link" href="https://www.danajalecos.com.br/shop/jalecos/feminino/dani/jaleco-dani-azul-bebe/" target="_blank" rel="noopener">Ver Produto →</a>
              </article>

              <article className="product-card">
                <h3>Jaleco Dani Coral</h3>
                <p className="product-meta">Categoria: Jalecos Femininos | Modelo: Dani</p>
                <a className="product-link" href="https://www.danajalecos.com.br/shop/jalecos/feminino/dani/jaleco-dani-coral/" target="_blank" rel="noopener">Ver Produto →</a>
              </article>

              <article className="product-card">
                <h3>Jaleco Dani Amarelo</h3>
                <p className="product-meta">Categoria: Jalecos Femininos | Modelo: Dani</p>
                <a className="product-link" href="https://www.danajalecos.com.br/shop/jalecos/feminino/dani/jaleco-dani-amarelo/" target="_blank" rel="noopener">Ver Produto →</a>
              </article>

              <article className="product-card">
                <h3>Jaleco Lia Preto</h3>
                <p className="product-meta">Categoria: Jalecos Femininos | Modelo: Lia</p>
                <a className="product-link" href="https://www.danajalecos.com.br/shop/jalecos/feminino/lia/jaleco-lia-preto/" target="_blank" rel="noopener">Ver Produto →</a>
              </article>

              <article className="product-card">
                <h3>Jaleco Beatriz Branco</h3>
                <p className="product-meta">Categoria: Jalecos Femininos | Modelo: Beatriz</p>
                <a className="product-link" href="https://www.danajalecos.com.br/shop/jalecos/feminino/beatriz/jaleco-beatriz-branco/" target="_blank" rel="noopener">Ver Produto →</a>
              </article>
            </div>
          </section>

          <section className="category">
            <h2>🩺 Scrubs Profissionais</h2>
            <div className="products-grid">
              <article className="product-card">
                <h3>Scrub Feminino Branco Confy Manga Curta</h3>
                <p className="product-meta">Categoria: Scrubs | Linha: Confy</p>
                <a className="product-link" href="https://www.danajalecos.com.br/shop/scrubs/feminino-scrubs/scrub-comfy/scrub-feminino-branco-confy-manga-curta/" target="_blank" rel="noopener">Ver Produto →</a>
              </article>

              <article className="product-card">
                <h3>Scrub Feminino Preto Confy Manga Curta</h3>
                <p className="product-meta">Categoria: Scrubs | Linha: Confy</p>
                <a className="product-link" href="https://www.danajalecos.com.br/shop/scrubs/feminino-scrubs/scrub-comfy/scrub-feminino-preto-confy-manga-curta/" target="_blank" rel="noopener">Ver Produto →</a>
              </article>

              <article className="product-card">
                <h3>Scrub Masculino Branco Confy Manga Curta</h3>
                <p className="product-meta">Categoria: Scrubs | Linha: Confy</p>
                <a className="product-link" href="https://www.danajalecos.com.br/shop/scrubs/masculino-scrubs/scrub-comfy-masculino-scrubs/scrub-masculino-branco-confy-manga-curta/" target="_blank" rel="noopener">Ver Produto →</a>
              </article>

              <article className="product-card">
                <h3>Scrub Masculino Preto Confy Manga Curta</h3>
                <p className="product-meta">Categoria: Scrubs | Linha: Confy</p>
                <a className="product-link" href="https://www.danajalecos.com.br/shop/scrubs/masculino-scrubs/scrub-comfy-masculino-scrubs/scrub-masculino-preto-confy-manga-curta/" target="_blank" rel="noopener">Ver Produto →</a>
              </article>

              <article className="product-card">
                <h3>Scrub Feminino Azul Claro Confy Manga Curta</h3>
                <p className="product-meta">Categoria: Scrubs | Linha: Confy</p>
                <a className="product-link" href="https://www.danajalecos.com.br/shop/scrubs/feminino-scrubs/scrub-comfy/scrub-feminino-azul-claro-confy-manga-curta/" target="_blank" rel="noopener">Ver Produto →</a>
              </article>

              <article className="product-card">
                <h3>Scrub Feminino Rosa Bebê Confy Manga Curta</h3>
                <p className="product-meta">Categoria: Scrubs | Linha: Confy</p>
                <a className="product-link" href="https://www.danajalecos.com.br/shop/scrubs/feminino-scrubs/scrub-comfy/scrub-feminino-rosa-bebe-confy-manga-curta/" target="_blank" rel="noopener">Ver Produto →</a>
              </article>

              <article className="product-card">
                <h3>Scrub Feminino Verde Hospitalar Confy Manga Curta</h3>
                <p className="product-meta">Categoria: Scrubs | Linha: Confy</p>
                <a className="product-link" href="https://www.danajalecos.com.br/shop/scrubs/feminino-scrubs/scrub-comfy/scrub-feminino-verde-hospitalar-confy-manga-curta/" target="_blank" rel="noopener">Ver Produto →</a>
              </article>

              <article className="product-card">
                <h3>Scrub Feminino Azul Royal Confy Manga Curta</h3>
                <p className="product-meta">Categoria: Scrubs | Linha: Confy</p>
                <a className="product-link" href="https://www.danajalecos.com.br/shop/scrubs/feminino-scrubs/scrub-comfy/scrub-feminino-azul-royal-confy-manga-curta/" target="_blank" rel="noopener">Ver Produto →</a>
              </article>

              <article className="product-card">
                <h3>Scrub Feminino Verde Água Confy Manga Curta</h3>
                <p className="product-meta">Categoria: Scrubs | Linha: Confy</p>
                <a className="product-link" href="https://www.danajalecos.com.br/shop/scrubs/feminino-scrubs/scrub-comfy/scrub-feminino-verde-agua-confy-manga-curta/" target="_blank" rel="noopener">Ver Produto →</a>
              </article>

              <article className="product-card">
                <h3>Scrub Masculino Azul Claro Confy Manga Curta</h3>
                <p className="product-meta">Categoria: Scrubs | Linha: Confy</p>
                <a className="product-link" href="https://www.danajalecos.com.br/shop/scrubs/masculino-scrubs/scrub-comfy-masculino-scrubs/scrub-masculino-azul-claro-confy-manga-curta/" target="_blank" rel="noopener">Ver Produto →</a>
              </article>
            </div>
          </section>

          <section className="category">
            <h2>🧢 Gorros e Acessórios</h2>
            <div className="products-grid">
              <article className="product-card">
                <h3>Gorro Unissex A Pet Love</h3>
                <p className="product-meta">Categoria: Gorros | Tipo: Unissex</p>
                <a className="product-link" href="https://www.danajalecos.com.br/shop/acessorios/gorros/gorro-unissex-a-pet-love/" target="_blank" rel="noopener">Ver Produto →</a>
              </article>

              <article className="product-card">
                <h3>Gorro Unissex A Cardio Blue</h3>
                <p className="product-meta">Categoria: Gorros | Tipo: Unissex</p>
                <a className="product-link" href="https://www.danajalecos.com.br/shop/acessorios/gorros/gorro-unissex-a-cardio-blue/" target="_blank" rel="noopener">Ver Produto →</a>
              </article>

              <article className="product-card">
                <h3>Gorro Profissional Amarelo</h3>
                <p className="product-meta">Categoria: Gorros | Tipo: Profissional</p>
                <a className="product-link" href="https://www.danajalecos.com.br/gorro-amarelo/" target="_blank" rel="noopener">Ver Produto →</a>
              </article>

              <article className="product-card">
                <h3>Gorro Profissional Azul Marinho</h3>
                <p className="product-meta">Categoria: Gorros | Tipo: Profissional</p>
                <a className="product-link" href="https://www.danajalecos.com.br/gorro-azul-marinho/" target="_blank" rel="noopener">Ver Produto →</a>
              </article>

              <article className="product-card">
                <h3>Gorro Profissional Verde</h3>
                <p className="product-meta">Categoria: Gorros | Tipo: Profissional</p>
                <a className="product-link" href="https://www.danajalecos.com.br/gorro-verde/" target="_blank" rel="noopener">Ver Produto →</a>
              </article>
            </div>
          </section>
        </div>

        <footer>
          <p><strong>Jana Dalecos © 2026</strong></p>
          <p>Uniformes Médicos Profissionais de Alta Qualidade</p>
          <p>Catálogo atualizado via Web Scraping - Dados extraídos do sitemap oficial</p>
          <p><a href="https://www.danajalecos.com.br" target="_blank" style={{color: '#3498db'}}>www.danajalecos.com.br</a></p>
        </footer>
      </body>
    </html>
  );
}
