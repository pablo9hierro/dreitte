// Versão 3: React
import { useState, useEffect } from 'react';

export default function V3React() {
  const [produtos, setProdutos] = useState([]);
  const [ok, setOk] = useState(false);

  useEffect(() => {
    const data = [
      {id: 1, nome: "JALECO MASCULINO MANOEL AZUL MARINHO", link: "https://www.danajalecos.com.br/shop/jalecos/masculinos/manoel/jaleco-manoel-azul-marinho/", preco: "R$ 209,00"},
      {id: 2, nome: "JALECO MASCULINO SAMUEL AMARELO", link: "https://www.danajalecos.com.br/shop/jalecos/masculinos/samuel/jaleco-samuel-amarelo/", preco: "R$ 145,00"},
      {id: 3, nome: "SCRUB MASCULINO MANGA CURTA AZUL MARINHO", link: "https://www.danajalecos.com.br/shop/scrubs/masculinos/manga-curta/scrub-azul-marinho/", preco: "R$ 177,65"}
    ];
    
    setTimeout(() => {
      setProdutos(data);
      setOk(true);
    }, 100);
  }, []);

  return (
    <div>
      <h1 style={{background: 'lightblue', padding: '10px'}}>VERSAO 3: REACT</h1>

      {!ok && <p style={{color: 'red'}}>Se você vê isso, React NAO renderizou</p>}

      <div id="search-area">
        <h2>Catalogo Jana Dalecos</h2>
        <ul>
          {produtos.map(p => (
            <li key={p.id}>
              <a href={p.link}>
                <strong>{p.nome}</strong><br/>
                Preço: {p.preco} no PIX
              </a>
            </li>
          ))}
        </ul>
      </div>

      <hr />
      {ok && <p style={{color: 'green'}}>✅ React FOI RENDERIZADO! {produtos.length} produtos</p>}
    </div>
  );
}
