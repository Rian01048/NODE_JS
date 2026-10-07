const servidor = require("./servidor.js")

servidor.connect(function(err) {
    if (err) throw err;
    servidor.query("select * from produtos", function(err, result) {
        if (err) throw err
        console.log(result)
    })
})