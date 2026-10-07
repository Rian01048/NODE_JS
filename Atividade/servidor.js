require('dotenv').config();

const mysql = require('mysql2')

const conexao = mysql.createConnection({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    port: process.env.DB_PORT,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME
})

conexao.connect((err) => {
    if (err) {
        console.log('Erro ao conectar', err)
        return
    }
    console.log('Conexão estabelecida')
})

const sql = `
  CREATE TABLE IF NOT EXISTS produtos (
    nome VARCHAR(100) NOT NULL PRIMARY KEY,
    preco DECIMAL (10, 2) NOT NULL,
    estoque INT NULL,
    categoria VARCHAR(100) NULL,
    descricao VARCHAR(100) NULL
    
  )
`

conexao.query(sql, (err) => {
    if (err) throw err;
    console.log('Tabela criada com sucesso')
})


module.exports = conexao