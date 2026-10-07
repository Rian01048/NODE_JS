const servidor = require("./servidor.js")

const sql =
    `update produtos 
    set nome = 'Teclado', 
    preco = '85.90' 
    where nome = 'CPUUU'`


servidor.connect(function(err) {
    if (err) throw err;
    servidor.query(sql, function(err, result) {
        if (err) throw err
        console.log(result)
    })
})