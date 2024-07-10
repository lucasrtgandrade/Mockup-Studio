const express = require('express');
const router = express.Router();
const fs = require('fs').promises;

async function readFileContents(path) {
    try {
        const data = await fs.readFile(path, 'utf8');
        return JSON.parse(data);
    } catch (err) {
        console.error(`Erro na leitura do arquivo ${path}:`, err);
        throw err;
    }
}

router.get('/', async (req, res) => {
    try {
        const projecaoAprovacao = await readFileContents('data/projecaoAprovacao.json');
        const doubleGoData = await readFileContents('data/doubleGo.json');
        const coresGravacao = await readFileContents('data/coresGravacao.json');

        res.render('pages/double-shaker-go', {
            title: 'Double Shaker Go',
            projecaoAprovacao: projecaoAprovacao[0],
            coresGravacao: coresGravacao,
            dimensoes: doubleGoData.dimensoes,
            sobretampas: doubleGoData.sobretampas,
            tampas: doubleGoData.tampas,
            copos: doubleGoData.copos,
            fundos: doubleGoData.copos,
        });
    } catch (err) {
        console.error('Erro no request:', err);
        res.status(500).send("Ocorreu um erro com a leitura de um dos arquivos JSON.");
    }
});

module.exports = router;