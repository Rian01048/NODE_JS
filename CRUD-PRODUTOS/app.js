const express = require('express')
const conexao = require('./conexao')

const app = express()
app.use(express.json())


app.post('/criar-registro', (req, res) => {
    const nome = 'XBOX ONE S'
    const preco = 2500
    const quantidade = 10

    const query = `INSERT INTO Produtos (Nome, Preco, Quantidade) VALUES ('${nome}', '${preco}', '${quantidade}')`

    conexao.query(query, (err) => {
        if (err) return res.status(500).json({ erro: 'Erro ao salvar.' })
        res.status(201).json({ mensagem: 'Criado com sucesso!' })
    })
})


app.get('/listar-registros', (req, res) => {
    const query = 'SELECT * FROM Produtos';

    conexao.query(query, (err, result) => {
        if (err) {
            console.log('Erro no banco:', err);
            return res.status(500).json({ erro: 'Erro ao buscar dados.' });
        }

        res.status(200).json(result.recordset);
    });
});



app.get('/atualizar-registro', (req, res) => {
    const id = 1
    const novoNome = 'Sabonete'
    const novoPreco = 2.90
    const novaQuantidade = 7
    const query = `UPDATE Produtos SET Nome = '${novoNome}', Preco = ${novoPreco}, Quantidade = ${novaQuantidade} WHERE Id = ${id}`

    console.log("Query executada:", query)

    conexao.query(query, (err, resultados) => {
        if (err) {
            console.error("Erro retornado pelo banco:", err)
            return res.status(500).json({ erro: 'Erro ao atualizar.' })
        }

        console.log("Linhas alteradas:", resultados.affectedRows)

        res.status(200).json({ mensagem: 'Atualizado' })
    })
})

app.get('/deletar-registro', (req, res) => {
    const id = 1
    const query = `DELETE FROM Produtos WHERE Id = ${id}`

    conexao.query(query, (err) => {
        if (err) return res.status(500).json({ erro: 'Erro ao deletar.' })
        res.status(200).json({ mensagem: 'Deletado' })
    })
})



app.listen(3000, () => {
    console.log('Servidor rodando na porta 3000.')
})