// VERSÃO 3: REACT CLIENT-SIDE
// Página Next.js com React renderizando no cliente
// Testa se Stevo consegue ver conteúdo React

import { useState, useEffect } from 'react';

export default function CatalogoVersao3React() {
  const [produtos, setProdutos] = useState([]);
  const [carregado, setCarregado] = useState(false);

  // Simula carregamento de dados (como site real faz)
  useEffect(() => {
    const produtosData = [
      {
        id: 1,
        nome: "JALECO MASCULINO MANOEL AZUL MARINHO",
        link: "https://www.danajalecos.com.br/shop/jalecos/masculinos/manoel/jaleco-manoel-azul-marinho/",
        preco: "R$ 209,00"
      },
      {
        id: 2,
        nome: "JALECO MASCULINO SAMUEL AMARELO",
        link: "https://www.danajalecos.com.br/shop/jalecos/masculinos/samuel/jaleco-samuel-amarelo/",
        preco: "R$ 145,00"
      },
      {
        id: 3,
        nome: "SCRUB MASCULINO MANGA CURTA AZUL MARINHO",
        link: "https://www.danajalecos.com.br/shop/scrubs/masculinos/manga-curta/scrub-azul-marinho/",
        preco: "R$ 177,65"
      }
    ];

    // Simula delay de API/carregamento (como site real)
    setTimeout(() => {
      setProdutos(produtosData);
      setCarregado(true);
    }, 100);
  }, []);

  return (
    <>
      {/* MARCADOR DE VERSÃO */}
      <p style={{ background: 'lightblue', padding: '10px', fontWeight: 'bold' }}>
        ⚛️ VERSÃO 3: REACT CLIENT-SIDE (Renderizado no navegador)
      </p>

      {/* ESTRUTURA IDÊNTICA AO SITE REAL */}
      <div id="search-area">
        <div className="pesquisa-produtos template-pesquisa-02">
          
          <h1>Catalogo Jana Dalecos</h1>
          
          {!carregado && (
            <p style={{ color: 'red', fontWeight: 'bold' }}>
              ⏳ Se você vê esta mensagem, o React NÃO renderizou os produtos
            </p>
          )}
          
          <div id="vitrine-react-app-2001296325">
            <div>
              <div>
                <ul>
                  
                  {produtos.map(produto => (
                    <li key={produto.id} className="relative items-center justify-center">
                      <a 
                        href={produto.link}
                        className="text-cor-base w-full block"
                        title={produto.nome}
                      >
                        <div className="product-info flex flex-col">
                          <h3 className="text-cor-base w-full block">
                            {produto.nome}
                          </h3>
                          
                          <div className="vitrine-default">
                            <p className="price">
                              <span>{produto.preco}</span> no PIX
                            </p>
                          </div>
                        </div>
                      </a>
                    </li>
                  ))}
                  
                </ul>
              </div>
            </div>
          </div>
          
        </div>
      </div>

      {/* RESUMO */}
      <hr />
      {carregado ? (
        <div style={{ color: 'green' }}>
          <h2>✅ React FOI RENDERIZADO!</h2>
          <p>{produtos.length} produtos foram renderizados via React</p>
          <p>Estrutura HTML identica ao site real</p>
          <p>Client-side rendering (igual ao site danajalecos.com.br)</p>
        </div>
      ) : (
        <div style={{ color: 'red' }}>
          <p>❌ Se você vê isso, o React NÃO foi executado</p>
        </div>
      )}
    </>
  );
}
