const servidor = require("./servidor.js")

servidor.connect(function(err) {
    if (err) throw err;
    servidor.query("delete from produtos where preco < 50", function(err, result) {
        if (err) throw err
        console.log(result)
    })
})