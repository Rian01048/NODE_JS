const express = require('express')
const conexao = require('./conexao')

const app = express()
app.use(express.json())


app.post('/produtos', (req, res) => {
    const nome = 'XBOX ONE S'
    const preco = 2399.90
    const quantidade = 100

    const sql = `INSERT INTO Produtos (Nome, Preco, Quantidade) VALUES ('${nome}', '${preco}', '${quantidade}')`

    conexao.query(sql, (err) => {
        if (err) return res.status(500).json({ erro: 'Erro ao salvar.' })
        res.status(201).json({ mensagem: 'Criado com sucesso!' })
    })
})




app.get('/produtos', (req, res) => {
    const sql = 'SELECT * FROM Produtos'

    conexao.query(sql, (err, result) => {
        if (err) return res.status(500).json({ erro: err.message });
        res.status(200).json(result.recordset)
    })
})




app.put('/produtos/:id', (req, res) => {
    const id = req.params.id
    const novoNome = 'Sabonete'
    const novoPreco = 2.90
    const novaQuantidade = 7

    const sql = `UPDATE Produtos SET Nome = '${novoNome}', Preco = ${novoPreco}, Quantidade = ${novaQuantidade} WHERE Id = ${id}`

    conexao.query(sql, (err, resultados) => {
        if (err) {
            console.error("Erro retornado pelo banco:", err);
            return res.status(500).json({ erro: 'Erro ao atualizar.' });
        }

        console.log("Linhas alteradas:", resultados.affectedRows);
        res.status(200).json({ mensagem: 'Atualizado' });
    })
})




app.delete('/produtos/:id', (req, res) => {
    const id = req.params.id
    const sql = `DELETE FROM Produtos WHERE Id = ${id}`

    conexao.query(sql, (err) => {
        if (err) return res.status(500).json({ erro: err.message })
        res.status(200).json({ mensagem: 'Produto deletado' });
    })
})




app.listen(3000, () => {
    console.log('Servidor rodando na porta 3000.')
})