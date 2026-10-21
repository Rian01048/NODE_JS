require('dotenv').config();
const sql = require('mssql')

const dbConfig = {
    server: process.env.DB_SERVER,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_DATABASE,
    options: {
        encrypt: false,
        trustServerCertificate: true
    }
}

const conexao = new sql.ConnectionPool(dbConfig)

conexao.connect((err) => {
    if (err) {
        console.log('Erro ao conectar', err)
        return
    }
    console.log('Conexão estabelecida')

    const query = `
    IF NOT EXISTS (SELECT * FROM sys.tables WHERE name = 'Produtos')
    BEGIN
        CREATE TABLE Produtos (
            Id INT IDENTITY(1,1) PRIMARY KEY,
            Nome VARCHAR(100) UNIQUE NOT NULL,
            Preco DECIMAL(10,2) NOT NULL,
            Quantidade INT NOT NULL
        )
    END
    `

    conexao.query(query, (err) => {
        if (err) throw err
        console.log("Tabela 'Clientes' verificada/criada com sucesso!")
    })
})

module.exports = conexao