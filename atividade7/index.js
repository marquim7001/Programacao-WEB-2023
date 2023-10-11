const express = require('express');
const mustacheExpress = require('mustache-express'); 
const app = express();

app.engine('html', mustacheExpress()); 
app.set('view engine', 'html'); 
app.set('views', __dirname + '/views'); 

const PORT = 8080;

app.use(express.urlencoded({ extended: true }));

app.get('/', (req, res) => res.render('index.html'));

app.post('/dados', (req, res) => {
    const dadosPaciente = {
        name: req.body.name,
        cpf: req.body.cpf,
        birthDate: req.body.birthDate,
        address: req.body.address,
        uf: req.body.uf,
        cep: req.body.cep,
        email: req.body.email,
        telefone: req.body.telefone,
    };

    const dadosConsulta = {
        doctor: req.body.doctor,
        dateTime: req.body.dateTime,
        drug: req.body.drug,
        textInfo: req.body.textInfo,
    };

    const fieldsName = {
        name: "Nome Completo",
        cpf: "CPF",
        birthDate: "Data de Nascimento",
        address: "Endereço",
        uf: "UF",
        cep: "CEP",
        email: "Email",
        telefone: "Telefone",
        doctor: "Selecione o Especialista",
        dateTime: "Data e Hora",
        drug: "Selecione o Medicamento Alérgico",
        textInfo: "Informações Adicionais"
    }

    let erro_form = [];

    Object.entries(dadosPaciente).forEach(info => {
        if(info[1] == "") {
            const fieldWithError = fieldsName[info[0]]
            console.log('dados do paciente', fieldWithError)
            erro_form.push(fieldWithError)
        }
    });

    Object.entries(dadosConsulta).forEach(info => {
        if(info[1] == "") {
            const fieldWithError = fieldsName[info[0]]
            console.log('dados da consulta', fieldWithError)
            erro_form.push(fieldWithError)
        }
    });

    console.log(erro_form);

    res.render("dados.html", {dadosPaciente, dadosConsulta, erro_form});

});

app.listen(PORT, () => console.log(`app rodando na porta ${PORT}`));