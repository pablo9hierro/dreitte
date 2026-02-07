import Head from 'next/head';
import jalecoData from '../public/jaleco.json';
import aventalData from '../public/avental.json';
import bandejaData from '../public/bandeja.json';
import crachaData from '../public/cracha.json';
import deskPadData from '../public/desk-pad.json';
import dolmaData from '../public/dolma.json';
import gorroData from '../public/gorro.json';
import kitOfficeData from '../public/kit-office.json';
import macacaoData from '../public/macacao.json';
import mousePadData from '../public/mouse-pad.json';
import portaCanetasData from '../public/porta-canetas.json';
import portaCopoData from '../public/porta-copo.json';
import portaObjetosData from '../public/porta-objetos.json';
import robeData from '../public/robe.json';
import scrubData from '../public/scrub.json';
import toucaData from '../public/touca.json';
import turbanteData from '../public/turbante.json';
import vestidoData from '../public/vestido.json';

const catalogos = [
  { nome: 'Jaleco', data: jalecoData, emoji: '🥼' },
  { nome: 'Scrub', data: scrubData, emoji: '👔' },
  { nome: 'Gorro', data: gorroData, emoji: '👒' },
  { nome: 'Touca', data: toucaData, emoji: '🧢' },
  { nome: 'Avental', data: aventalData, emoji: '👘' },
  { nome: 'Dolma', data: dolmaData, emoji: '👚' },
  { nome: 'Macacao', data: macacaoData, emoji: '🦺' },
  { nome: 'Robe', data: robeData, emoji: '🥻' },
  { nome: 'Vestido', data: vestidoData, emoji: '👗' },
  { nome: 'Turbante', data: turbanteData, emoji: '🎀' },
  { nome: 'Cracha', data: crachaData, emoji: '🪪' },
  { nome: 'Bandeja', data: bandejaData, emoji: '📦' },
  { nome: 'Desk-pad', data: deskPadData, emoji: '🖥️' },
  { nome: 'Mouse-pad', data: mousePadData, emoji: '🖱️' },
  { nome: 'Kit-office', data: kitOfficeData, emoji: '📎' },
  { nome: 'Porta-canetas', data: portaCanetasData, emoji: '✏️' },
  { nome: 'Porta-copo', data: portaCopoData, emoji: '☕' },
  { nome: 'Porta-objetos', data: portaObjetosData, emoji: '🗄️' },
];

export default function Home() {
  const calcularTotalProdutos = () => {
    return catalogos.reduce((total, catalogo) => {
      return total + (catalogo.data.metadata?.totalProdutos || 0);
    }, 0);
  };

  const renderProdutos = (generoData, generoNome, tipoProduto) => {
    if (!generoData) return null;
    
    return (
      <section style={{ marginBottom: '2.5rem' }}>
        <h3 style={{ 
          fontSize: '1.6rem', 
          color: '#2563eb',
          borderBottom: '2px solid #2563eb',
          paddingBottom: '0.4rem',
          marginBottom: '1rem'
        }}>
          {generoNome} - {generoData.totalProdutos} disponíveis
        </h3>
        
        {generoData.todasCores && generoData.todasCores.length > 0 && (
          <div style={{ marginBottom: '1.5rem', fontSize: '0.9rem', color: '#6b7280' }}>
            <strong>Cores:</strong> {generoData.todasCores.join(', ')}
          </div>
        )}

        {Object.entries(generoData.cadaCor || {}).map(([cor, produtos]) => (
          <div key={cor} style={{ marginBottom: '1.5rem' }}>
            <h4 style={{ 
              fontSize: '1.2rem', 
              color: '#059669',
              marginBottom: '0.75rem',
              borderLeft: '3px solid #059669',
              paddingLeft: '0.5rem'
            }}>
              {cor} ({produtos.length})
            </h4>
            
            {produtos.map((produto, idx) => (
              <div 
                key={idx} 
                style={{ 
                  backgroundColor: '#f9fafb',
                  padding: '1rem',
                  marginBottom: '0.75rem',
                  borderRadius: '6px',
                  border: '1px solid #e5e7eb'
                }}
              >
                <h5 style={{ 
                  fontSize: '1.05rem', 
                  color: '#111827',
                  marginBottom: '0.5rem',
                  fontWeight: 'bold'
                }}>
                  {produto.nome}
                </h5>
                
                <div style={{ fontSize: '0.85rem', lineHeight: '1.6', color: '#374151' }}>
                  <p><strong>SKU:</strong> {produto.sku}</p>
                  <p><strong>Tipo:</strong> {produto.tipoProduto || tipoProduto}</p>
                  <p><strong>Gênero:</strong> {produto.genero}</p>
                  <p><strong>Cor:</strong> {produto.cor}</p>
                  <p><strong>Link:</strong> <a href={produto.link} target="_blank" rel="noopener" style={{ color: '#2563eb', wordBreak: 'break-all' }}>{produto.link}</a></p>
                </div>
              </div>
            ))}
          </div>
        ))}
      </section>
    );
  };

  const renderCatalogo = (catalogo) => {
    const { nome, data, emoji } = catalogo;
    const { metadata, masculino, feminino, unissex } = data;

    if (!metadata) return null;

    return (
      <article 
        key={nome} 
        style={{ 
          marginBottom: '4rem',
          padding: '2rem',
          backgroundColor: '#ffffff',
          borderRadius: '12px',
          border: '2px solid #e5e7eb',
          boxShadow: '0 2px 8px rgba(0,0,0,0.05)'
        }}
      >
        <header style={{ 
          marginBottom: '2rem',
          paddingBottom: '1rem',
          borderBottom: '3px solid #f3f4f6'
        }}>
          <h2 style={{ 
            fontSize: '2.2rem', 
            color: '#1f2937',
            marginBottom: '0.5rem',
            display: 'flex',
            alignItems: 'center',
            gap: '0.75rem'
          }}>
            <span>{emoji}</span>
            <span>{nome}</span>
          </h2>
          
          <div style={{ 
            display: 'flex',
            gap: '1.5rem',
            flexWrap: 'wrap',
            fontSize: '0.95rem',
            color: '#6b7280'
          }}>
            <p><strong>Total:</strong> {metadata.totalProdutos} produtos</p>
            {metadata.generosDisponiveis && (
              <p><strong>Gêneros:</strong> {metadata.generosDisponiveis.join(', ')}</p>
            )}
            {metadata.dataProcessamento && (
              <p><strong>Atualizado:</strong> {new Date(metadata.dataProcessamento).toLocaleDateString('pt-BR')}</p>
            )}
          </div>
        </header>

        {masculino && renderProdutos(masculino, `${nome} Masculinos`, nome)}
        {feminino && renderProdutos(feminino, `${nome} Femininos`, nome)}
        {unissex && renderProdutos(unissex, `${nome} Unissex`, nome)}
      </article>
    );
  };

  return (
    <>
      <Head>
        <title>Catálogo Completo Dana Jalecos - Base de Conhecimento IA</title>
        <meta name="description" content="Catálogo completo com todos os produtos Dana Jalecos para assistente virtual Stevo.chat" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <main style={{ 
        maxWidth: '1200px', 
        margin: '0 auto', 
        padding: '2rem',
        fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
        backgroundColor: '#fafafa'
      }}>
        <header style={{ 
          textAlign: 'center', 
          marginBottom: '3rem',
          padding: '3rem 2rem',
          backgroundColor: '#ffffff',
          borderRadius: '12px',
          border: '3px solid #2563eb',
          boxShadow: '0 4px 12px rgba(37, 99, 235, 0.1)'
        }}>
          <h1 style={{ 
            fontSize: '3rem', 
            color: '#1f2937',
            marginBottom: '1rem'
          }}>
            🩺 Catálogo Completo Dana Jalecos
          </h1>
          <p style={{ 
            fontSize: '1.3rem', 
            color: '#6b7280',
            marginBottom: '1.5rem'
          }}>
            Base de Conhecimento RAG para Assistente Virtual
          </p>
          
          <div style={{ 
            display: 'inline-block',
            backgroundColor: '#dbeafe',
            padding: '1.25rem 2.5rem',
            borderRadius: '10px',
            marginTop: '1rem',
            border: '2px solid #2563eb'
          }}>
            <p style={{ fontSize: '1.1rem', color: '#1e40af', margin: 0, fontWeight: 'bold' }}>
              📊 {calcularTotalProdutos()} produtos totais | 🏷️ {catalogos.length} categorias
            </p>
          </div>

          <div style={{ 
            marginTop: '2rem',
            display: 'flex',
            flexWrap: 'wrap',
            gap: '0.75rem',
            justifyContent: 'center',
            fontSize: '0.9rem'
          }}>
            {catalogos.map(cat => (
              <span 
                key={cat.nome}
                style={{ 
                  padding: '0.5rem 1rem',
                  backgroundColor: '#f3f4f6',
                  borderRadius: '20px',
                  border: '1px solid #d1d5db'
                }}
              >
                {cat.emoji} {cat.nome}
              </span>
            ))}
          </div>
        </header>

        <section style={{ marginBottom: '3rem' }}>
          {catalogos.map(catalogo => renderCatalogo(catalogo))}
        </section>

        <footer style={{ 
          textAlign: 'center', 
          marginTop: '4rem',
          padding: '2rem',
          backgroundColor: '#ffffff',
          borderRadius: '12px',
          border: '2px solid #e5e7eb'
        }}>
          <p style={{ fontSize: '1.1rem', color: '#374151', marginBottom: '1rem' }}>
            💡 Esta página serve como base de conhecimento RAG para o assistente virtual <strong>Stevo.chat</strong>
          </p>
          <p style={{ marginTop: '0.75rem' }}>
            <a href="/api/catalogo" style={{ color: '#2563eb', fontWeight: 'bold', fontSize: '1rem' }}>
              📄 Acessar todos os dados em JSON
            </a>
          </p>
        </footer>
      </main>
    </>
  );
}
