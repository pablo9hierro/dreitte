// Endpoint de teste com apenas 30 produtos

export default function handler(req, res) {
  const catalogo = `==================================================
CATÁLOGO TESTE - 30 PRODUTOS
==================================================

==================================================
JALECO
==================================================

--- MASCULINO ---

  Amarelo
  -------
  Nome: Jaleco Masculino Samuel Amarelo
  Link: https://www.danajalecos.com.br/shop/jalecos/masculinos/samuel/jaleco-samuel-amarelo/

  Azul
  ----
  Nome: Jaleco Masculino Paulo Azul Marinho
  Link: https://www.danajalecos.com.br/shop/jalecos/masculinos/paulo/jaleco-paulo-azul-marinho/

  Nome: Jaleco Masculino Manoel Azul Marinho
  Link: https://www.danajalecos.com.br/shop/jalecos/masculinos/manoel/jaleco-manoel-azul-marinho/

  Branco
  ------
  Nome: Jaleco Masculino Isac Branco
  Link: https://www.danajalecos.com.br/shop/jalecos/masculinos/isac/jaleco-isac-branco/

  Verde
  -----
  Nome: Jaleco Masculino Manoel Verde Escuro
  Link: https://www.danajalecos.com.br/shop/jalecos/masculinos/manoel/jaleco-manoel-verde-escuro/

  Nome: Jaleco Masculino Samuel Manga Longa Verde Militar
  Link: https://www.danajalecos.com.br/shop/jalecos/masculinos/samuel/jaleco-samuel-verde-militar/

--- FEMININO ---

  Amarelo
  -------
  Nome: Jaleco Feminino Heloisa Manga Longa Amarelo
  Link: https://www.danajalecos.com.br/shop/jalecos/feminino/femininos-ziper/heloisa/jaleco-heloisa-amarelo/

  Nome: Jaleco Feminino Rute Amarelo
  Link: https://www.danajalecos.com.br/shop/jalecos/feminino/rute/jaleco-rute-amarelo/

  Nome: Jaleco Feminino Dani Amarelo
  Link: https://www.danajalecos.com.br/shop/jalecos/feminino/dani/jaleco-dani-amarelo/

  Azul
  ----
  Nome: Jaleco Feminino Andressa Azul Marinho
  Link: https://www.danajalecos.com.br/shop/jalecos/feminino/femininos-gola-v/andressa/jaleco-andressa-azul-marinho/

  Nome: Jaleco Feminino Camila Azul Céu
  Link: https://www.danajalecos.com.br/shop/jalecos/feminino/femininos-ziper/camila/jaleco-camila-azul-ceu/

  Branco
  ------
  Nome: Jaleco Feminino Ana Manga Longa Branco
  Link: https://www.danajalecos.com.br/shop/jalecos/feminino/femininos-gola-v/ana/jaleco-ana-branco/

  Rosa
  ----
  Nome: Jaleco Feminino Clara Rosa
  Link: https://www.danajalecos.com.br/shop/jalecos/feminino/clara/jaleco-clara-rosa/

==================================================
SCRUB
==================================================

--- MASCULINO ---

  Azul
  ----
  Nome: Scrub Masculino Gabriel Azul Marinho
  Link: https://www.danajalecos.com.br/shop/scrubs/masculino/scrub-masculino-gabriel/scrub-gabriel-azul-marinho/

  Cinza
  -----
  Nome: Scrub Masculino Noah Cinza
  Link: https://www.danajalecos.com.br/shop/scrubs/masculino/scrub-masculino-noah/scrub-noah-cinza/

  Verde
  -----
  Nome: Scrub Masculino Noah Verde Militar
  Link: https://www.danajalecos.com.br/shop/scrubs/masculino/scrub-masculino-noah/scrub-noah-verde-militar/

--- FEMININO ---

  Azul
  ----
  Nome: Scrub Feminino Valentina Azul Marinho
  Link: https://www.danajalecos.com.br/shop/scrubs/feminino/scrub-feminino-valentina/scrub-valentina-azul-marinho/

  Rosa
  ----
  Nome: Scrub Feminino Bella Rosa
  Link: https://www.danajalecos.com.br/shop/scrubs/feminino/scrub-feminino-bella/scrub-bella-rosa/

  Verde
  -----
  Nome: Scrub Feminino Maya Verde Militar
  Link: https://www.danajalecos.com.br/shop/scrubs/feminino/scrub-feminino-maya/scrub-maya-verde-militar/

==================================================
GORRO
==================================================

--- UNISSEX ---

  Azul
  ----
  Nome: Gorro Cirurgico Azul Marinho
  Link: https://www.danajalecos.com.br/shop/gorros/gorro-cirurgico/gorro-cirurgico-azul-marinho/

  Branco
  ------
  Nome: Gorro Cirurgico Branco
  Link: https://www.danajalecos.com.br/shop/gorros/gorro-cirurgico/gorro-cirurgico-branco/

  Preto
  -----
  Nome: Gorro Cirurgico Preto
  Link: https://www.danajalecos.com.br/shop/gorros/gorro-cirurgico/gorro-cirurgico-preto/

  Rosa
  ----
  Nome: Gorro Cirurgico Rosa
  Link: https://www.danajalecos.com.br/shop/gorros/gorro-cirurgico/gorro-cirurgico-rosa/

  Verde
  -----
  Nome: Gorro Cirurgico Verde
  Link: https://www.danajalecos.com.br/shop/gorros/gorro-cirurgico/gorro-cirurgico-verde/

==================================================
AVENTAL
==================================================

--- UNISSEX ---

  Azul
  ----
  Nome: Avental Descartavel Azul
  Link: https://www.danajalecos.com.br/shop/aventais/avental-descartavel/avental-descartavel-azul/

  Branco
  ------
  Nome: Avental Descartavel Branco
  Link: https://www.danajalecos.com.br/shop/aventais/avental-descartavel/avental-descartavel-branco/

  Verde
  -----
  Nome: Avental Descartavel Verde
  Link: https://www.danajalecos.com.br/shop/aventais/avental-descartavel/avental-descartavel-verde/

==================================================
DOLMA
==================================================

--- FEMININO ---

  Branco
  ------
  Nome: Dolma Feminino Branco
  Link: https://www.danajalecos.com.br/shop/dolmas/dolma-feminino/dolma-feminino-branco/

  Marsala
  -------
  Nome: Dolma Feminino Marsala
  Link: https://www.danajalecos.com.br/shop/dolmas/dolma-feminino/dolma-feminino-marsala/

==================================================
FIM DO CATÁLOGO - TOTAL: 30 PRODUTOS
==================================================`;

  res.setHeader('Content-Type', 'text/plain; charset=utf-8');
  res.setHeader('Cache-Control', 'public, max-age=300');
  res.status(200).send(catalogo);
}
