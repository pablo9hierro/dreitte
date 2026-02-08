// Endpoint de DEBUG - Captura TUDO que o Stevo envia para Tools

export default function handler(req, res) {
  try {
    const timestamp = new Date().toISOString();
    
    // Captura TUDO
    const debugInfo = {
      timestamp: timestamp,
      method: req.method,
      url: req.url,
      headers: req.headers || {},
      query: req.query || {},
      body: req.body || {},
    };

    // LOGS SUPER DETALHADOS
    console.log('\n');
    console.log('═══════════════════════════════════════════════════════');
    console.log('🔍 STEVO TOOL DEBUG - REQUISIÇÃO CAPTURADA');
    console.log('═══════════════════════════════════════════════════════');
    console.log('⏰ Timestamp:', timestamp);
    console.log('───────────────────────────────────────────────────────');
    
    console.log('📍 METHOD:', req.method);
    console.log('📍 URL:', req.url);
    console.log('📍 FULL URL:', `https://${req.headers?.host || 'unknown'}${req.url}`);
    console.log('───────────────────────────────────────────────────────');
    
    console.log('🔑 HEADERS:');
    console.log(JSON.stringify(req.headers || {}, null, 2));
    console.log('───────────────────────────────────────────────────────');
    
    console.log('🔍 QUERY PARAMS:');
    console.log(JSON.stringify(req.query || {}, null, 2));
    console.log('───────────────────────────────────────────────────────');
    
    console.log('📦 BODY:');
    console.log(JSON.stringify(req.body || {}, null, 2));
    console.log('───────────────────────────────────────────────────────');
    
    // Se tiver parâmetros na URL
    if (req.query && Object.keys(req.query).length > 0) {
      console.log('🎯 PARÂMETROS DETECTADOS:');
      for (const [key, value] of Object.entries(req.query)) {
        console.log(`   ${key}: ${value}`);
      }
      console.log('───────────────────────────────────────────────────────');
    }

    console.log('═══════════════════════════════════════════════════════');
    console.log('\n');

    // Retorna sucesso com os dados capturados
    res.status(200).json({
      success: true,
      message: 'Debug: Requisição capturada com sucesso',
      timestamp: timestamp,
      receivedData: {
        method: req.method,
        queryParams: req.query || {},
        bodyData: req.body || {},
        headersReceived: Object.keys(req.headers || {}),
      },
      // Echo de volta o que recebeu
      echo: debugInfo,
      // Resposta fake para o Stevo não dar erro
      result: {
        status: 'ok',
        message: 'Tool executada com sucesso (DEBUG MODE)',
        data: '✅ Dados recebidos e logados no console do Vercel'
      }
    });
  } catch (error) {
    console.error('❌ ERRO NO DEBUG TOOL:', error);
    res.status(200).json({
      success: false,
      error: error.message,
      message: 'Erro capturado, mas endpoint funcionou',
      timestamp: new Date().toISOString()
    });
  }
}
