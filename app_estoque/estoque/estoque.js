let produtos = Array();

function criar_produto(id,nome,qtd){

    let p= {
        id: id,
        nome: nome,
        quantidade: qtd
    };

    return p;
}

function adicionar_produto(p){
    produtos.push(p);
}

function listar_produtos(){
    return produtos;
}

function editar_produto(id, qtdAtual){

produtos.forEach(p => {
    if(p.id==id){
        p.quantidade =qtdAtual;
        pRetorno = p;
    }
});
    return pRetorno; 
}

function remover_produto (id){
    produtos.forEach (p => {
        if (p.id == id){
            produtos.splice(p, 1);
        }
    });
}

module.exports= {
    criar_produto,
    adicionar_produto,
    listar_produtos,
    editar_produto,
    remover_produto
}       