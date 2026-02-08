// Endpoint de busca - retorna produtos filtrados

export default function handler(req, res) {
  const { tipo, genero, cor } = req.query;
  
  // Log da busca
  console.log('=== BUSCA REALIZADA ===');
  console.log('Tipo:', tipo);
  console.log('Gênero:', genero);
  console.log('Cor:', cor);
  console.log('Timestamp:', new Date().toISOString());
  console.log('=======================');

  // Valida parâmetros
  if (!tipo) {
    return res.status(400).json({ 
      erro: 'Parâmetro "tipo" é obrigatório',
      exemplo: '/api/busca?tipo=jaleco&genero=masculino&cor=amarelo'
    });
  }

  // Mapeamento de tipos para arquivos
  const tipoParaArquivo = {
    'jaleco': 'jaleco',
    'scrub': 'scrub',
    'gorro': 'gorro',
    'touca': 'touca',
    'avental': 'avental',
    'dolma': 'dolma',
    'robe': 'robe',
    'turbante': 'turbante',
    'vestido': 'vestido',
    'macacão': 'macacao',
    'macacao': 'macacao',
    'crachá': 'cracha',
    'cracha': 'cracha',
    'desk pad': 'desk-pad',
    'desk-pad': 'desk-pad',
    'kit office': 'kit-office',
    'kit-office': 'kit-office',
    'mouse pad': 'mouse-pad',
    'mouse-pad': 'mouse-pad',
    'porta canetas': 'porta-canetas',
    'porta-canetas': 'porta-canetas',
    'porta copo': 'porta-copo',
    'porta-copo': 'porta-copo',
    'porta objetos': 'porta-objetos',
    'porta-objetos': 'porta-objetos',
    'bandeja': 'bandeja'
  };

  const arquivo = tipoParaArquivo[tipo.toLowerCase()];
  
  if (!arquivo) {
    return res.status(404).json({ 
      erro: `Tipo "${tipo}" não encontrado`,
      tiposDisponiveis: Object.keys(tipoParaArquivo)
    });
  }

  try {
    // Carrega o catálogo específico
    const catalogo = require(`../../public/${arquivo}.json`);
    let produtos = catalogo.produtos || [];

    // Filtra por gênero (case-insensitive)
    if (genero) {
      const generoNorm = genero.toLowerCase();
      produtos = produtos.filter(p => 
        p.genero && p.genero.toLowerCase() === generoNorm
      );
    }

    // Filtra por cor (case-insensitive)
    if (cor) {
      const corNorm = cor.toLowerCase();
      produtos = produtos.filter(p => 
        p.cor && p.cor.toLowerCase() === corNorm
      );
    }

    // Formata resposta
    const resultado = {
      busca: {
        tipo: tipo,
        genero: genero || 'todos',
        cor: cor || 'todas'
      },
      encontrados: produtos.length,
      produtos: produtos.map(p => ({
        nome: p.nome || p.nomeCompleto,
        link: p.link,
        sku: p.sku,
        cor: p.cor,
        genero: p.genero
      }))
    };

    res.setHeader('Content-Type', 'application/json; charset=utf-8');
    res.status(200).json(resultado);

  } catch (error) {
    console.error('Erro ao carregar catálogo:', error);
    res.status(500).json({ 
      erro: 'Erro ao carregar catálogo',
      detalhe: error.message 
    });
  }
}
