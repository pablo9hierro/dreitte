// Pixel transparente para rastrear acessos (funciona sem JavaScript)
import fs from 'fs';
import path from 'path';

export default async function handler(req, res) {
  const timestamp = new Date().toISOString();
  const userAgent = req.headers['user-agent'] || 'unknown';
  const referer = req.headers['referer'] || 'none';
  const ip = req.headers['x-forwarded-for'] || req.connection.remoteAddress;
  const query = req.query;

  const logEntry = {
    timestamp,
    userAgent,
    referer,
    ip,
    type: 'pixel',
    query,
  };

  try {
    const logPath = path.join(process.cwd(), 'logs', 'tracking.log');
    const logsDir = path.join(process.cwd(), 'logs');
    
    if (!fs.existsSync(logsDir)) {
      fs.mkdirSync(logsDir, { recursive: true });
    }

    fs.appendFileSync(logPath, JSON.stringify(logEntry) + '\n');
  } catch (error) {
    console.error('Erro no tracking:', error);
  }

  // Retorna imagem transparente 1x1 pixel
  const pixel = Buffer.from(
    'R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7',
    'base64'
  );

  res.setHeader('Content-Type', 'image/gif');
  res.setHeader('Content-Length', pixel.length);
  res.setHeader('Cache-Control', 'no-cache, no-store, must-revalidate');
  res.status(200).send(pixel);
}
