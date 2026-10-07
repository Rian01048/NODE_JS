const servidor = require("./servidor.js")

const sql =
    `insert into produtos 
    (nome, preco, estoque, categoria, descricao) 
    values ('Monitorr','490.90', '100', 'eletronico','um monitor')`


servidor.connect(function(err) {
    if (err) throw err;
    servidor.query(sql, function(err, result) {
        if (err) throw err
        console.log(result)
    })
})