const servidor = require("./servidor.js")

const sql = `select * from produtos`

servidor.connect(function(err) {
    if (err) throw err;
    servidor.query(sql, function(err, result) {
        if (err) throw err
        console.log(result)
    })
})