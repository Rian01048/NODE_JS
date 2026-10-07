const servidor = require("./servidor.js")

servidor.connect(function(err) {
    if (err) throw err;
    servidor.query("update produtos set nome = 'Teclado', preco = '85.90' where nome = 'CPU'", function(err, result) {
        if (err) throw err
        console.log(result)
    })
})