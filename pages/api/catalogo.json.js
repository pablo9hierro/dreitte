export default function handler(req, res) {
  res.setHeader('Content-Type', 'application/json; charset=utf-8');
  
  const produtos = {
    catalogo: {
      loja: "Jana Dalecos",
      website: "https://www.danajalecos.com.br",
      total_produtos: 11,
      ultima_atualizacao: new Date().toISOString(),
      categorias: [
        {
          nome: "Jalecos Masculinos",
          total: 4,
          produtos: [
            {
              id: "j_m_001",
              nome: "Jaleco Masculino Samuel Amarelo",
              categoria: "Jalecos",
              genero: "Masculino",
              cor: "Amarelo",
              preco: 145.00,
              moeda: "BRL",
              link: "https://www.danajalecos.com.br/shop/jalecos/masculinos/samuel/jaleco-samuel-amarelo/"
            },
            {
              id: "j_m_002",
              nome: "Jaleco Masculino Samuel Azul",
              categoria: "Jalecos",
              genero: "Masculino",
              cor: "Azul",
              preco: 145.00,
              moeda: "BRL",
              link: "https://www.danajalecos.com.br/shop/jalecos/masculinos/samuel/jaleco-samuel-azul/"
            },
            {
              id: "j_m_003",
              nome: "Jaleco Masculino Samuel Verde",
              categoria: "Jalecos",
              genero: "Masculino",
              cor: "Verde",
              preco: 145.00,
              moeda: "BRL",
              link: "https://www.danajalecos.com.br/shop/jalecos/masculinos/samuel/jaleco-samuel-verde/"
            },
            {
              id: "j_m_004",
              nome: "Jaleco Masculino Manoel Azul Marinho",
              categoria: "Jalecos",
              genero: "Masculino",
              cor: "Azul Marinho",
              preco: 209.00,
              moeda: "BRL",
              link: "https://www.danajalecos.com.br/shop/jalecos/masculinos/manoel/jaleco-manoel-azul-marinho/"
            }
          ]
        },
        {
          nome: "Jalecos Femininos",
          total: 2,
          produtos: [
            {
              id: "j_f_001",
              nome: "Jaleco Feminino Giovana Rosa",
              categoria: "Jalecos",
              genero: "Feminino",
              cor: "Rosa",
              preco: 165.00,
              moeda: "BRL",
              link: "https://www.danajalecos.com.br/shop/jalecos/femininos/giovana/jaleco-giovana-rosa/"
            },
            {
              id: "j_f_002",
              nome: "Jaleco Feminino Giovana Azul",
              categoria: "Jalecos",
              genero: "Feminino",
              cor: "Azul",
              preco: 165.00,
              moeda: "BRL",
              link: "https://www.danajalecos.com.br/shop/jalecos/femininos/giovana/jaleco-giovana-azul/"
            }
          ]
        },
        {
          nome: "Scrubs",
          total: 3,
          produtos: [
            {
              id: "s_m_001",
              nome: "Scrub Masculino Pedro Azul",
              categoria: "Scrubs",
              genero: "Masculino",
              cor: "Azul",
              preco: 177.65,
              moeda: "BRL",
              link: "https://www.danajalecos.com.br/shop/scrubs/masculinos/pedro/scrub-pedro-azul/"
            },
            {
              id: "s_m_002",
              nome: "Scrub Masculino Pedro Verde",
              categoria: "Scrubs",
              genero: "Masculino",
              cor: "Verde",
              preco: 177.65,
              moeda: "BRL",
              link: "https://www.danajalecos.com.br/shop/scrubs/masculinos/pedro/scrub-pedro-verde/"
            },
            {
              id: "s_f_001",
              nome: "Scrub Feminino Ana Rosa",
              categoria: "Scrubs",
              genero: "Feminino",
              cor: "Rosa",
              preco: 145.35,
              moeda: "BRL",
              link: "https://www.danajalecos.com.br/shop/scrubs/femininos/ana/scrub-ana-rosa/"
            }
          ]
        },
        {
          nome: "Gorros",
          total: 2,
          produtos: [
            {
              id: "g_001",
              nome: "Gorro Cirúrgico Verde",
              categoria: "Gorros",
              genero: "Unissex",
              cor: "Verde",
              preco: 45.00,
              moeda: "BRL",
              link: "https://www.danajalecos.com.br/shop/gorros/cirurgicos/gorro-verde/"
            },
            {
              id: "g_002",
              nome: "Gorro Cirúrgico Azul",
              categoria: "Gorros",
              genero: "Unissex",
              cor: "Azul",
              preco: 45.00,
              moeda: "BRL",
              link: "https://www.danajalecos.com.br/shop/gorros/cirurgicos/gorro-azul/"
            }
          ]
        }
      ]
    }
  };
  
  res.status(200).json(produtos);
}
