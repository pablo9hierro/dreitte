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
          <p>Última Atualização: {new Date().toLocaleDateString("pt-BR")}</p>
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
