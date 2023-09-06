const calc = require('./util/calculadora');
const express = require('express');

const app = express();


app.get("/somar/:n1/:n2", function (req,res){
    let n1 = req.params.n1;
    let n2 = req.params.n2;
   res.send (`${n1} + ${n2} = ${calc.somar(n1 , n2)}`);

}); 
app.get("/subtrair/:a/:b", function (req, res) {
    let a = req.params.a;
    let b = req.params.b;
    res.send(`${a} - ${b} = ${calc.subtrair(a,b)}`);
})

app.get("/multiplicar/:a/:b", function (req, res) {    
    let a = req.params.a;
    let b = req.params.b;
    res.send(`${a} * ${b} = ${calc.multiplicar(a,b)}`);
})

app.get("/dividir/:a/:b", function (req, res) {
    let a = req.params.a;
    let b = req.params.b;
    res.send(`${a} / ${b} = ${calc.dividir(a,b)}`);
})

const PORT = 1000;

app.listen( PORT, function () {
    console.log("app rodando na porta" + PORT);
});