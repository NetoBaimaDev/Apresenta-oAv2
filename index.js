const express = require("express");
const app = express();

app.get("/", function(req,res){
    res.send("Bem vindo ao meu site!"); //rota 1 criada
})

app.get("/produtos", function(req,res){     //rota2 criada, para ela ser acessada, devo parar a rota anterior(rota1) no terminal
 res.send("<h1>Lista de Produtos!</h1>");   //do cmd com o comando crtl + c e em seguida iniciar novamente o servidor, com o 
                                            //comando node index.js e carregar o localhost:4000/produtos  
})

app.get("/consulta/:parametro", function(req,res){
    //req --> dados enviados pelo cliente
    //res --> resposta enviada pelo servidor de volta ao cliente
    res.send("retorno consulta:" + req.params.parametro);
})

app.get("/cadastro/:nome?", function(req,res){
    //req --> dados enviados pelo cliente
    var nome = req.params.nome;
    if (nome){
        res.send("<h1>produto " + nome + " criado!</h1>");
    }else{
        res.send("produto criado!");
    }
})

app.listen(4000,function(erro){
    if (erro){
        console.log("erro ao iniciar.");
    }else{
        console.log("servidor iniciado...");
    }
})