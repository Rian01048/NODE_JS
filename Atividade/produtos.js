const servidor = require("./servidor.js")

servidor.connect(function(err) {
    if (err) throw err;
    console.log("Conectado");

    criar();

})


function criar() {
    const sql = `insert into produtos 
    (nome, preco, estoque, categoria, descricao) 
    values ('Sabonete','2.50', '100', 'limpeza','um sabonete')`;

    servidor.query(sql, function(err, result) {
        if (err) throw err;
        console.log("Produto inserido", result);
    });
}


function ler() {
    const sql = `select * from produtos`;

    servidor.query(sql, function(err, result) {
        if (err) throw err;
        console.log("Lista de produtos:", result);
    });
}


function atualizar() {
    const sql = `update produtos 
    set preco = '450.00', nome = 'CPU' , categoria = 'eletronico', descricao = 'um CPU'
    where nome = 'Monitor'`;

    servidor.query(sql, function(err, result) {
        if (err) throw err;
        console.log("Produto atualizado", result);
    });
}


function deletar() {
    const sql = `delete from produtos`;

    servidor.query(sql, function(err, result) {
        if (err) throw err;
        console.log("Produto deletado", result);
    });
}