import jalecoData from '../../public/jaleco.json';
import aventalData from '../../public/avental.json';
import bandejaData from '../../public/bandeja.json';
import crachaData from '../../public/cracha.json';
import deskPadData from '../../public/desk-pad.json';
import dolmaData from '../../public/dolma.json';
import gorroData from '../../public/gorro.json';
import kitOfficeData from '../../public/kit-office.json';
import macacaoData from '../../public/macacao.json';
import mousePadData from '../../public/mouse-pad.json';
import portaCanetasData from '../../public/porta-canetas.json';
import portaCopoData from '../../public/porta-copo.json';
import portaObjetosData from '../../public/porta-objetos.json';
import robeData from '../../public/robe.json';
import scrubData from '../../public/scrub.json';
import toucaData from '../../public/touca.json';
import turbanteData from '../../public/turbante.json';
import vestidoData from '../../public/vestido.json';

const catalogoCompleto = {
  jaleco: jalecoData,
  scrub: scrubData,
  gorro: gorroData,
  touca: toucaData,
  avental: aventalData,
  dolma: dolmaData,
  macacao: macacaoData,
  robe: robeData,
  vestido: vestidoData,
  turbante: turbanteData,
  cracha: crachaData,
  bandeja: bandejaData,
  'desk-pad': deskPadData,
  'mouse-pad': mousePadData,
  'kit-office': kitOfficeData,
  'porta-canetas': portaCanetasData,
  'porta-copo': portaCopoData,
  'porta-objetos': portaObjetosData,
};

export default function handler(req, res) {
  // Habilitar CORS
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  if (req.method === 'OPTIONS') {
    res.status(200).end();
    return;
  }

  if (req.method === 'GET') {
    const { produto } = req.query;
    
    // Se especificar um produto, retorna só ele
    if (produto && catalogoCompleto[produto]) {
      res.status(200).json(catalogoCompleto[produto]);
    } else {
      // Senão, retorna tudo
      res.status(200).json(catalogoCompleto);
    }
  } else {
    res.status(405).json({ error: 'Method not allowed' });
  }
}
