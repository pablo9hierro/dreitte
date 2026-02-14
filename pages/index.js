export default function Home() {
  const produtos = [
    "https://www.danajalecos.com.br/shop/jalecos/masculinos/isac/jaleco-isac-branco/",
    "https://www.danajalecos.com.br/shop/jalecos/masculinos/samuel/jaleco-samuel-chumbo/",
    "https://www.danajalecos.com.br/shop/jalecos/masculinos/samuel/jaleco-samuel-branco/",
    "https://www.danajalecos.com.br/shop/jalecos/masculinos/isac/jaleco-isac-preto/",
    "https://www.danajalecos.com.br/shop/jalecos/masculinos/isac/jaleco-isac-azul-marinho/",
    "https://www.danajalecos.com.br/shop/jalecos/masculinos/noah/jaleco-noah-bege/",
    "https://www.danajalecos.com.br/shop/jalecos/masculinos/manoel/jaleco-manoel-bordo/",
    "https://www.danajalecos.com.br/shop/jalecos/masculinos/manoel/jaleco-manoel-azul-medio/",
    "https://www.danajalecos.com.br/shop/jalecos/masculinos/manoel/jaleco-manoel-verde-claro/",
    "https://www.danajalecos.com.br/shop/jalecos/masculinos/manoel/jaleco-manoel-bege/",
    "https://www.danajalecos.com.br/shop/jalecos/feminino/manuela/jaleco-feminino-manuela-estampado-fazendinha/",
    "https://www.danajalecos.com.br/shop/jalecos/femininos-ziper/heloisa/jaleco-heloisa-branco/",
    "https://www.danajalecos.com.br/shop/jalecos/femininos-ziper/heloisa/jaleco-heloisa-preto/",
    "https://www.danajalecos.com.br/shop/jalecos/feminino/lia/jaleco-lia-branco/",
    "https://www.danajalecos.com.br/shop/jalecos/feminino/dani/jaleco-feminino-dani-rosa-nude/",
    "https://www.danajalecos.com.br/shop/jalecos/feminino/dani/jaleco-dani-azul-bebe/",
    "https://www.danajalecos.com.br/shop/jalecos/feminino/dani/jaleco-dani-coral/",
    "https://www.danajalecos.com.br/shop/jalecos/feminino/dani/jaleco-dani-amarelo/",
    "https://www.danajalecos.com.br/shop/jalecos/feminino/lia/jaleco-lia-preto/",
    "https://www.danajalecos.com.br/shop/jalecos/feminino/beatriz/jaleco-beatriz-branco/",
    "https://www.danajalecos.com.br/shop/scrubs/feminino-scrubs/scrub-comfy/scrub-feminino-branco-confy-manga-curta/",
    "https://www.danajalecos.com.br/shop/scrubs/feminino-scrubs/scrub-comfy/scrub-feminino-preto-confy-manga-curta/",
    "https://www.danajalecos.com.br/shop/scrubs/masculino-scrubs/scrub-comfy-masculino-scrubs/scrub-masculino-branco-confy-manga-curta/",
    "https://www.danajalecos.com.br/shop/scrubs/masculino-scrubs/scrub-comfy-masculino-scrubs/scrub-masculino-preto-confy-manga-curta/",
    "https://www.danajalecos.com.br/shop/scrubs/feminino-scrubs/scrub-comfy/scrub-feminino-azul-claro-confy-manga-curta/",
    "https://www.danajalecos.com.br/shop/scrubs/feminino-scrubs/scrub-comfy/scrub-feminino-rosa-bebe-confy-manga-curta/",
    "https://www.danajalecos.com.br/shop/scrubs/feminino-scrubs/scrub-comfy/scrub-feminino-verde-hospitalar-confy-manga-curta/",
    "https://www.danajalecos.com.br/shop/scrubs/feminino-scrubs/scrub-comfy/scrub-feminino-azul-royal-confy-manga-curta/",
    "https://www.danajalecos.com.br/shop/scrubs/feminino-scrubs/scrub-comfy/scrub-feminino-verde-agua-confy-manga-curta/",
    "https://www.danajalecos.com.br/shop/scrubs/masculino-scrubs/scrub-comfy-masculino-scrubs/scrub-masculino-azul-claro-confy-manga-curta/",
    "https://www.danajalecos.com.br/shop/acessorios/gorros/gorro-unissex-a-pet-love/",
    "https://www.danajalecos.com.br/shop/acessorios/gorros/gorro-unissex-a-cardio-blue/",
    "https://www.danajalecos.com.br/gorro-amarelo/",
    "https://www.danajalecos.com.br/gorro-azul-marinho/",
    "https://www.danajalecos.com.br/gorro-verde/"
  ];

  return (
    <html lang="pt-BR">
      <head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Catálogo Produtos - Jana Dalecos</title>
        <style>{`
          * { margin: 0; padding: 0; box-sizing: border-box; }
          body { font-family: Arial, sans-serif; line-height: 1.6; background: #fff; color: #333; padding: 20px; }
          h1 { font-size: 24px; margin-bottom: 20px; }
          .info { margin-bottom: 20px; font-size: 14px; color: #666; }
          ul { list-style: none; }
          li { padding: 8px 0; font-size: 13px; border-bottom: 1px solid #eee; }
        `}</style>
      </head>
      <body>
        <h1>Jana Dalecos</h1>
        <div className="info">
          <p>Referência em Uniformes Médicos</p>
          <p>Última Atualização: {new Date().toLocaleDateString('pt-BR')}</p>
          <p>Total de Produtos: {produtos.length}</p>
        </div>

        <ul>
          {produtos.map((url, index) => (
            <li key={index}>{url}</li>
          ))}
        </ul>
      </body>
    </html>
  );
}


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
