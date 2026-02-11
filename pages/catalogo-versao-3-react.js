// VERSÃO 3: REACT CLIENT-SIDE
import { useState, useEffect } from 'react';

export default function CatalogoVersao3() {
  const [produtos, setProdutos] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const produtosData = [
      {id: 1, nome: "JALECO MASCULINO MANOEL AZUL MARINHO", link: "https://www.danajalecos.com.br/shop/jalecos/masculinos/manoel/jaleco-manoel-azul-marinho/", preco: "R$ 209,00"},
      {id: 2, nome: "JALECO MASCULINO SAMUEL AMARELO", link: "https://www.danajalecos.com.br/shop/jalecos/masculinos/samuel/jaleco-samuel-amarelo/", preco: "R$ 145,00"},
      {id: 3, nome: "SCRUB MASCULINO MANGA CURTA AZUL MARINHO", link: "https://www.danajalecos.com.br/shop/scrubs/masculinos/manga-curta/scrub-azul-marinho/", preco: "R$ 177,65"}
    ];
    
    setTimeout(() => {
      setProdutos(produtosData);
      setLoading(false);
    }, 100);
  }, []);

  return (
    <div>
      <p style={{background: 'lightblue', padding: '10px', fontWeight: 'bold'}}>
        VERSAO 3: REACT CLIENT-SIDE
      </p>

      {loading && (
        <p style={{color: 'red', fontWeight: 'bold'}}>
          Se voce ve isso, React NAO renderizou
        </p>
      )}

      <div id="search-area">
        <div className="pesquisa-produtos template-pesquisa-02">
          <h1>Catalogo Jana Dalecos</h1>
          
          <div id="vitrine-react-app-2001296325">
            <ul>
              {produtos.map(p => (
                <li key={p.id}>
                  <a href={p.link}>
                    <h3>{p.nome}</h3>
                    <p className="price">{p.preco} no PIX</p>
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      <hr />
      {!loading && (
        <p style={{color: 'green'}}>
          React FOI RENDERIZADO! {produtos.length} produtos via React
        </p>
      )}
    </div>
  );
}
