const express = require('express');
const router = express.Router();
const fs = require('fs').promises;

async function readFileContents(path){
    try {
        const data = await fs.readFile(path, 'utf8');
        return JSON.parse(data);
    } catch (err) {
        console.error(`Erro na leitura do arquivo ${path}:`, err);
        throw err;
    }
}

router.get('/', async  (req, res) => {
    try {
        const projecaoAprovacao = await readFileContents('data/projecaoAprovacao.json');
        const cavidadesData = await readFileContents('data/cavidades.json');
        const coresGravacao = await readFileContents('data/coresGravacao.json');

        res.render('pages/porta-capsulas', {
            title: 'Porta Cápsulas 4 Cavidades',
            projecaoAprovacao: projecaoAprovacao[0],
            coresGravacao: coresGravacao,
            cores: cavidadesData.cores,
            dimensoes: cavidadesData.dimensoes
        });
    } catch (err) {
        console.error('Erro na leitura do arquivo:', err);
        res.status(500).send("Ocorreu um erro com a leitura de um dos arquivos JSON.");
    }
});

module.exports = router;