import Head from 'next/head';
import catalogoData from '../public/jaleco.json';

export default function Home() {
  const { metadata, masculino, feminino, unissex } = catalogoData;

  const renderProdutos = (generoData, generoNome) => {
    if (!generoData) return null;
    
    return (
      <section style={{ marginBottom: '3rem' }}>
        <h2 style={{ 
          fontSize: '2rem', 
          color: '#2563eb',
          borderBottom: '3px solid #2563eb',
          paddingBottom: '0.5rem',
          marginBottom: '1.5rem'
        }}>
          {generoNome} - {generoData.totalProdutos} produtos disponíveis
        </h2>
        
        <div style={{ marginBottom: '2rem' }}>
          <h3 style={{ fontSize: '1.3rem', color: '#4b5563', marginBottom: '0.5rem' }}>
            Cores disponíveis:
          </h3>
          <p style={{ fontSize: '1rem', lineHeight: '1.8' }}>
            {generoData.todasCores?.join(', ')}
          </p>
        </div>

        {Object.entries(generoData.cadaCor || {}).map(([cor, produtos]) => (
          <div key={cor} style={{ marginBottom: '2rem' }}>
            <h3 style={{ 
              fontSize: '1.5rem', 
              color: '#059669',
              marginBottom: '1rem',
              borderLeft: '4px solid #059669',
              paddingLeft: '0.75rem'
            }}>
              Cor: {cor} ({produtos.length} {produtos.length === 1 ? 'produto' : 'produtos'})
            </h3>
            
            {produtos.map((produto, idx) => (
              <div 
                key={idx} 
                style={{ 
                  backgroundColor: '#f9fafb',
                  padding: '1.5rem',
                  marginBottom: '1rem',
                  borderRadius: '8px',
                  border: '1px solid #e5e7eb'
                }}
              >
                <h4 style={{ 
                  fontSize: '1.2rem', 
                  color: '#111827',
                  marginBottom: '0.75rem',
                  fontWeight: 'bold'
                }}>
                  {produto.nome}
                </h4>
                
                <div style={{ fontSize: '0.95rem', lineHeight: '1.8', color: '#374151' }}>
                  <p><strong>SKU:</strong> {produto.sku}</p>
                  <p><strong>Nome Completo:</strong> {produto.nomeCompleto}</p>
                  <p><strong>Tipo:</strong> {produto.tipoProduto}</p>
                  <p><strong>Gênero:</strong> {produto.genero}</p>
                  <p><strong>Cor:</strong> {produto.cor}</p>
                  <p><strong>Link:</strong> <a href={produto.link} target="_blank" rel="noopener" style={{ color: '#2563eb' }}>{produto.link}</a></p>
                  
                  {produto.cores && produto.cores.length > 0 && (
                    <div style={{ marginTop: '0.5rem' }}>
                      <strong>Variações de cores disponíveis:</strong>
                      <ul style={{ marginLeft: '1.5rem', marginTop: '0.25rem' }}>
                        {produto.cores.map((varCor, i) => (
                          <li key={i}>
                            {varCor.nome} - <a href={varCor.link} target="_blank" rel="noopener" style={{ color: '#2563eb' }}>{varCor.link}</a>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        ))}
      </section>
    );
  };

  return (
    <>
      <Head>
        <title>Catálogo Dana Jalecos - IA Knowledge Base</title>
        <meta name="description" content="Base de conhecimento completa do catálogo de jalecos Dana para assistente virtual" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <main style={{ 
        maxWidth: '1200px', 
        margin: '0 auto', 
        padding: '2rem',
        fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif'
      }}>
        <header style={{ 
          textAlign: 'center', 
          marginBottom: '3rem',
          borderBottom: '4px solid #2563eb',
          paddingBottom: '2rem'
        }}>
          <h1 style={{ 
            fontSize: '3rem', 
            color: '#1f2937',
            marginBottom: '1rem'
          }}>
            📦 Catálogo Dana Jalecos
          </h1>
          <p style={{ 
            fontSize: '1.2rem', 
            color: '#6b7280',
            marginBottom: '1rem'
          }}>
            Base de conhecimento completa para assistente virtual
          </p>
          
          <div style={{ 
            display: 'inline-block',
            backgroundColor: '#eff6ff',
            padding: '1rem 2rem',
            borderRadius: '8px',
            marginTop: '1rem'
          }}>
            <p style={{ fontSize: '1rem', color: '#1e40af', margin: 0 }}>
              <strong>Total de produtos:</strong> {metadata.totalProdutos} | 
              <strong> Gêneros:</strong> {metadata.generosDisponiveis.join(', ')} | 
              <strong> Atualizado:</strong> {new Date(metadata.dataProcessamento).toLocaleDateString('pt-BR')}
            </p>
          </div>
        </header>

        {renderProdutos(masculino, 'Jalecos Masculinos')}
        {renderProdutos(feminino, 'Jalecos Femininos')}
        {renderProdutos(unissex, 'Jalecos Unissex')}

        <footer style={{ 
          textAlign: 'center', 
          marginTop: '4rem',
          paddingTop: '2rem',
          borderTop: '2px solid #e5e7eb',
          color: '#6b7280'
        }}>
          <p>💡 Esta página serve como base de conhecimento RAG para o assistente virtual Stevo.chat</p>
          <p style={{ marginTop: '0.5rem' }}>
            <a href="/api/jaleco" style={{ color: '#2563eb' }}>Acessar dados em JSON</a>
          </p>
        </footer>
      </main>
    </>
  );
}
