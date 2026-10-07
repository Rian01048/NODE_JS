const servidor = require("./servidor.js")

servidor.connect(function(err) {
    if (err) throw err;
    servidor.query("insert into produtos (nome, preco, estoque, categoria, descricao) values ('CPU','4490.90', '5', 'eletronico','um CPU')", function(err, result) {
        if (err) throw err
        console.log(result)
    })
})