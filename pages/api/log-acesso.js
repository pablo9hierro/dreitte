// Endpoint para receber logs de como o Stevo acessa a página
import fs from 'fs';
import path from 'path';

export default async function handler(req, res) {
  // Aceita apenas POST
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Método não permitido' });
  }

  try {
    const timestamp = new Date().toISOString();
    const userAgent = req.headers['user-agent'] || 'unknown';
    const referer = req.headers['referer'] || 'none';
    const ip = req.headers['x-forwarded-for'] || req.connection.remoteAddress;

    const logEntry = {
      timestamp,
      userAgent,
      referer,
      ip,
      body: req.body,
    };

    // Salva em arquivo (em produção, usar banco de dados)
    const logPath = path.join(process.cwd(), 'logs', 'acesso.log');
    
    // Cria diretório de logs se não existir
    const logsDir = path.join(process.cwd(), 'logs');
    if (!fs.existsSync(logsDir)) {
      fs.mkdirSync(logsDir, { recursive: true });
    }

    // Append ao arquivo de log
    fs.appendFileSync(logPath, JSON.stringify(logEntry) + '\n');

    return res.status(200).json({ 
      success: true, 
      message: 'Log registrado',
      received: logEntry 
    });
  } catch (error) {
    console.error('Erro ao registrar log:', error);
    return res.status(500).json({ error: 'Erro ao registrar log' });
  }
}
