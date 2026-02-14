import Head from 'next/head';
import scrubData from '../public/scrub.json';

export default function Scrub() {
  const renderProdutos = (generoData, generoNome) => {
    if (!generoData) return null;

    const cores = Object.keys(generoData.cadaCor || {});
    
    return (
      <div style={{ marginBottom: '40px' }}>
        <h3 style={{ 
          fontSize: '24px', 
          fontWeight: 'bold', 
          color: '#2563eb',
          marginBottom: '20px',
          borderBottom: '2px solid #2563eb',
          paddingBottom: '10px'
        }}>
          Scrubs {generoNome}
        </h3>
        {cores.map(cor => {
          const produtos = generoData.cadaCor[cor];
          if (!produtos || produtos.length === 0) return null;

          return (
            <div key={cor} style={{ marginBottom: '30px', paddingLeft: '20px' }}>
              <h4 style={{ 
                fontSize: '20px', 
                fontWeight: '600', 
                color: '#059669',
                marginBottom: '15px'
              }}>
                🎨 Cor: {cor}
              </h4>
              <ul style={{ listStyle: 'none', padding: 0 }}>
                {produtos.map((produto, idx) => (
                  <li key={idx} style={{ 
                    marginBottom: '10px',
                    padding: '10px',
                    backgroundColor: '#f9fafb'
                  }}>
                    <div style={{ color: '#1f2937', marginBottom: '3px' }}>
                      {produto.nomeCompleto || produto.nome}
                    </div>
                    <div style={{ fontSize: '13px', color: '#6b7280' }}>
                      {produto.link}
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          );
        })}
      </div>
    );
  };

  return (
    <>
      <Head>
        <title>Catálogo de Scrubs - Dana Jalecos</title>
        <meta name="description" content="Catálogo completo de scrubs da Dana Jalecos" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <div style={{ 
        maxWidth: '1200px', 
        margin: '0 auto', 
        padding: '40px 20px',
        fontFamily: 'system-ui, -apple-system, sans-serif'
      }}>
        <header style={{ 
          textAlign: 'center', 
          marginBottom: '60px',
          borderBottom: '3px solid #2563eb',
          paddingBottom: '30px'
        }}>
          <h1 style={{ 
            fontSize: '48px', 
            fontWeight: 'bold', 
            color: '#1e40af',
            marginBottom: '10px'
          }}>
            👔 Catálogo de Scrubs
          </h1>
          <p style={{ fontSize: '20px', color: '#6b7280' }}>
            Dana Jalecos - Vestuário Profissional
          </p>
          <p style={{ 
            fontSize: '16px', 
            color: '#059669',
            marginTop: '20px',
            fontWeight: '600'
          }}>
            Total de produtos: {scrubData.metadata?.totalProdutos || 0}
          </p>
        </header>

        <main>
          {scrubData.masculino && renderProdutos(scrubData.masculino, 'Masculinos')}
          {scrubData.feminino && renderProdutos(scrubData.feminino, 'Femininos')}
          {scrubData.unissex && renderProdutos(scrubData.unissex, 'Unissex')}
        </main>
      </div>
    </>
  );
}
