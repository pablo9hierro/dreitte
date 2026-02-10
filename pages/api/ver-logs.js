// Endpoint para visualizar os logs coletados
import fs from 'fs';
import path from 'path';

export default async function handler(req, res) {
  try {
    const logsDir = path.join(process.cwd(), 'logs');
    
    if (!fs.existsSync(logsDir)) {
      return res.status(200).send(`
        <!DOCTYPE html>
        <html>
        <head>
          <meta charset="utf-8">
          <title>Logs Stevo - Vazio</title>
          <style>
            body { font-family: monospace; padding: 20px; background: #1a1a1a; color: #0f0; }
          </style>
        </head>
        <body>
          <h1>📊 Nenhum log registrado ainda</h1>
          <p>Aguardando primeira visita do Stevo...</p>
        </body>
        </html>
      `);
    }

    // Lê arquivo de logs
    const acessoLogPath = path.join(logsDir, 'acesso.log');
    const trackingLogPath = path.join(logsDir, 'tracking.log');

    let acessoLogs = [];
    let trackingLogs = [];

    if (fs.existsSync(acessoLogPath)) {
      const content = fs.readFileSync(acessoLogPath, 'utf-8');
      acessoLogs = content
        .split('\n')
        .filter(line => line.trim())
        .map(line => JSON.parse(line));
    }

    if (fs.existsSync(trackingLogPath)) {
      const content = fs.readFileSync(trackingLogPath, 'utf-8');
      trackingLogs = content
        .split('\n')
        .filter(line => line.trim())
        .map(line => JSON.parse(line));
    }

    // Renderiza HTML com os logs
    const html = `
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <title>Logs Stevo</title>
  <style>
    body {
      font-family: 'Courier New', monospace;
      padding: 20px;
      background: #0d1117;
      color: #c9d1d9;
    }
    h1 { color: #58a6ff; }
    h2 { color: #f85149; margin-top: 30px; }
    .log-entry {
      background: #161b22;
      border: 1px solid #30363d;
      padding: 15px;
      margin: 10px 0;
      border-radius: 6px;
    }
    .timestamp { color: #8b949e; font-size: 0.9em; }
    .user-agent { color: #79c0ff; margin: 5px 0; }
    .data { color: #56d364; }
    .label { color: #f0883e; font-weight: bold; }
    pre { 
      background: #0d1117;
      padding: 10px;
      border-radius: 3px;
      overflow-x: auto;
    }
    .stats {
      background: #1c2128;
      padding: 15px;
      border-radius: 6px;
      margin: 20px 0;
    }
    .refresh {
      position: fixed;
      top: 20px;
      right: 20px;
      padding: 10px 20px;
      background: #238636;
      color: white;
      border: none;
      border-radius: 6px;
      cursor: pointer;
    }
    .refresh:hover { background: #2ea043; }
  </style>
</head>
<body>
  <button class="refresh" onclick="location.reload()">🔄 Atualizar</button>
  
  <h1>📊 Logs de Acesso - Rastreamento Stevo</h1>
  
  <div class="stats">
    <p><span class="label">Total de acessos JavaScript:</span> ${acessoLogs.length}</p>
    <p><span class="label">Total de tracking pixels:</span> ${trackingLogs.length}</p>
    <p><span class="label">Última atualização:</span> ${new Date().toLocaleString('pt-BR')}</p>
  </div>

  <h2>🟢 Logs de JavaScript (POST /api/log-acesso)</h2>
  ${acessoLogs.length === 0 ? '<p>Nenhum acesso via JavaScript registrado</p>' : ''}
  ${acessoLogs.reverse().map(log => `
    <div class="log-entry">
      <p class="timestamp">🕐 ${new Date(log.timestamp).toLocaleString('pt-BR')}</p>
      <p class="user-agent"><span class="label">User-Agent:</span> ${log.userAgent}</p>
      <p><span class="label">IP:</span> ${log.ip}</p>
      <p><span class="label">Referer:</span> ${log.referer}</p>
      ${log.body ? `
        <p class="label">Dados enviados:</p>
        <pre>${JSON.stringify(log.body, null, 2)}</pre>
      ` : ''}
    </div>
  `).join('')}

  <h2>🔵 Logs de Tracking Pixel (GET /api/tracking-pixel)</h2>
  ${trackingLogs.length === 0 ? '<p>Nenhum pixel carregado</p>' : ''}
  ${trackingLogs.reverse().map(log => `
    <div class="log-entry">
      <p class="timestamp">🕐 ${new Date(log.timestamp).toLocaleString('pt-BR')}</p>
      <p class="user-agent"><span class="label">User-Agent:</span> ${log.userAgent}</p>
      <p><span class="label">IP:</span> ${log.ip}</p>
      <p><span class="label">Referer:</span> ${log.referer}</p>
      ${log.query && Object.keys(log.query).length > 0 ? `
        <p class="label">Query params:</p>
        <pre>${JSON.stringify(log.query, null, 2)}</pre>
      ` : ''}
    </div>
  `).join('')}

  <script>
    // Auto-refresh a cada 10 segundos
    setTimeout(() => location.reload(), 10000);
  </script>
</body>
</html>
    `;

    return res.status(200).send(html);
  } catch (error) {
    console.error('Erro ao ler logs:', error);
    return res.status(500).json({ error: 'Erro ao ler logs' });
  }
}
