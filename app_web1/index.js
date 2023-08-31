const calc = require('./util/calculadora');
const express = require('express');

const app = express();


app.get("/somar/:n1/:n2", function (req,res){
    let n1 = req.params.n1;
    let n2 = req.params.n2;
   res.send (`${n1} + ${n2} = ${calc.somar(n1 , n2)}`);

}); 


const PORT = 1000;

app.listen( PORT, function () {
    console.log("app rodando na porta" + PORT);
});