const express = require('express');

const app = express();

const port = 3000;

app.get('/', (req, res) => {
    res.status(200).send('Entrou');
});

app.get('/generate-words/:slug', (req, res) => {

    const slug = req.params.slug;

    // considerar os textos que estão na pasta "original", na ordem em que estão
    // passos: 
    // 1. gerar os arquivos com as palavras isoladas e salvar nos arquivos da pasta "words", com o mesmo nome do arquivo original
    // 2. gerar os arquivos com as palavras novas em cada arquivo, que seja diferente dos arquivos anteriores, dentro da pasta "diff_words"

    res.status(200).send(slug);
    

})


app.listen(port, () => {
    console.log(`Rodando a aplicação na porta ${port}`);
});

