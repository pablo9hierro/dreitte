// Endpoint de diagnóstico - retorna informações sobre acesso ao catálogo

export default function handler(req, res) {
  const timestamp = new Date().toISOString();
  const ip = req.headers['x-forwarded-for'] || req.socket.remoteAddress;
  const userAgent = req.headers['user-agent'] || 'Unknown';
  
  // Log informações no console do Vercel
  console.log('=== DIAGNÓSTICO ACESSADO ===');
  console.log('Timestamp:', timestamp);
  console.log('IP:', ip);
  console.log('User-Agent:', userAgent);
  console.log('Query:', req.query);
  console.log('============================');

  // Importa todos os catálogos
  const catalogos = [
    { tipo: 'JALECO', data: require('../../public/jaleco.json') },
    { tipo: 'SCRUB', data: require('../../public/scrub.json') },
    { tipo: 'GORRO', data: require('../../public/gorro.json') },
    { tipo: 'TOUCA', data: require('../../public/touca.json') },
    { tipo: 'AVENTAL', data: require('../../public/avental.json') },
    { tipo: 'DOLMA', data: require('../../public/dolma.json') },
    { tipo: 'ROBE', data: require('../../public/robe.json') },
    { tipo: 'TURBANTE', data: require('../../public/turbante.json') },
    { tipo: 'VESTIDO', data: require('../../public/vestido.json') },
    { tipo: 'MACACÃO', data: require('../../public/macacao.json') },
    { tipo: 'CRACHÁ', data: require('../../public/cracha.json') },
    { tipo: 'DESK PAD', data: require('../../public/desk-pad.json') },
    { tipo: 'KIT OFFICE', data: require('../../public/kit-office.json') },
    { tipo: 'MOUSE PAD', data: require('../../public/mouse-pad.json') },
    { tipo: 'PORTA CANETAS', data: require('../../public/porta-canetas.json') },
    { tipo: 'PORTA COPO', data: require('../../public/porta-copo.json') },
    { tipo: 'PORTA OBJETOS', data: require('../../public/porta-objetos.json') },
    { tipo: 'BANDEJA', data: require('../../public/bandeja.json') }
  ];

  // Conta total de produtos
  let totalProdutos = 0;
  const resumoPorTipo = {};
  
  catalogos.forEach(cat => {
    const produtos = cat.data.produtos || [];
    totalProdutos += produtos.length;
    resumoPorTipo[cat.tipo] = produtos.length;
  });

  // Busca específica: jaleco masculino amarelo
  const jalecos = catalogos.find(c => c.tipo === 'JALECO').data.produtos || [];
  const jalecosMasculinosAmarelos = jalecos.filter(p => 
    p.genero === 'Masculino' && p.cor === 'Amarelo'
  );

  const diagnostico = {
    status: 'OK',
    timestamp: timestamp,
    ip: ip,
    userAgent: userAgent,
    
    catalogo: {
      totalProdutos: totalProdutos,
      totalTipos: catalogos.length,
      resumoPorTipo: resumoPorTipo
    },

    testeEspecifico: {
      consulta: 'jaleco masculino amarelo',
      encontrados: jalecosMasculinosAmarelos.length,
      produtos: jalecosMasculinosAmarelos.map(p => ({
        nome: p.nome,
        link: p.link
      }))
    },

    urlsCatalogo: {
      texto: 'https://dreitte.vercel.app/api/catalogo-texto',
      diagnostico: 'https://dreitte.vercel.app/api/diagnostico',
      busca: 'https://dreitte.vercel.app/api/busca?genero=masculino&cor=amarelo&tipo=jaleco'
    }
  };

  // Retorna JSON formatado
  res.setHeader('Content-Type', 'application/json; charset=utf-8');
  res.setHeader('X-Diagnostic-Timestamp', timestamp);
  res.status(200).json(diagnostico);
}
