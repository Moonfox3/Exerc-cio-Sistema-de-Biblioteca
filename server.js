const express = require('express');
const app = express();

// Rota para servir o conteúdo estático
app.use(express.static('public'));

// Rota de exemplo para cadastrar livro
app.get('/cadastrar_livro', (req, res) => {
    // Implementação do cadastro de livro
    res.send('Livro cadastrado com sucesso!');
});

// Rota de exemplo para listar livros
app.get('/listar_livros', (req, res) => {
    // Implementação da listagem de livros
    // Aqui você pode retornar os dados dos livros em formato JSON ou HTML
    res.send('<h2>Lista de Livros</h2><ul><li>Livro 1</li><li>Livro 2</li></ul>');
});

// Rota de exemplo para emprestar livro
app.get('/emprestar_livro', (req, res) => {
    // Implementação do empréstimo de livro
    res.send('Livro emprestado com sucesso!');
});

// Rota de exemplo para devolver livro
app.get('/devolver_livro', (req, res) => {
    // Implementação da devolução de livro
    res.send('Livro devolvido com sucesso!');
});

// Iniciar o servidor na porta 3000
app.listen(3000, () => {
    console.log('Servidor iniciado na porta 3000');
});
