const express = require("express");
const app = express();
const mysql = require("mysql");
const cors = require("cors");

const db = mysql.createPool({
    host: "localhost",
    user: "root",
    password: "",
    database: "colonia",
})


app.use(cors());
app.use(express.json());

app.post("/register",(req, res)=>{
    const {ficha} = req.body;
    const {nome} = req.body;
    const {endereco} = req.body;
    const {numero} = req.body;
    const {bairro} = req.body;
    const {cidade} = req.body;
    const {estado} = req.body;
    const {cep} = req.body;
    const {celular} = req.body;
    const {telefone} = req.body;
    const {tel_recado} = req.body;
    const {cpf} = req.body;
    const {rg} = req.body;
    const {orgao_emissor} = req.body;
    const {emissao_rg} = req.body;
    const {rgp} = req.body;
    const {pis} = req.body;
    const {cei} = req.body;
    const {cnh} = req.body;
    const {emissao_cnh} = req.body;
    const {email} = req.body;
    const {vencimento} = req.body;
    const {filiacao} = req.body;
    const {nascimento} = req.body;
    const {local_nascimento} = req.body;
    const {pai} = req.body;
    const {mae} = req.body;
    const {data_rgp} = req.body;
    const {titulo_eleitor} = req.body;
    const {carteira_trabalho} = req.body;
    const {profissao} = req.body;
    const {estado_civil} = req.body;
    const {senha_caepf} = req.body;

    let SQL = "INSERT INTO pescadores (ficha,nome,endereco,numero,bairro,cidade,estado,cep,celular,telefone,tel_recado,cpf,rg,orgao_emissor,emissao_rg,rgp,pis,cei,cnh,emissao_cnh,email,vencimento,filiacao,nascimento,local_nascimento,pai,mae,data_rgp,titulo_eleitor,carteira_trabalho,profissao,estado_civil,senha_caepf,acesso,ativo) VALUES (?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,1,1)"

    db.query(SQL, [ficha,nome,endereco,numero,bairro,cidade,estado,cep,celular,telefone,tel_recado,cpf,rg,orgao_emissor,emissao_rg,rgp,pis,cei,cnh,emissao_cnh,email,vencimento,filiacao,nascimento,local_nascimento,pai,mae,data_rgp,titulo_eleitor,carteira_trabalho,profissao,estado_civil,senha_caepf], (err, result)=>{
        console.log(err)
    })
})

app.get("/getPescadores",(req,res)=>{
    let SQL = "SELECT * FROM pescadores WHERE acesso = 3"

    db.query(SQL, (err,result)=>{
        if(err)console.log(err)
        else res.send(result)
    })
})

app.get("/getPescador/:id",(req,res)=>{
    let id = req.params.id;
    let SQL = `SELECT * FROM pescadores WHERE id = ${id}`
    db.query(SQL, (err,result)=>{
        if(err)console.log(err)
        else res.send(result)
    })
})
app.listen(3001, () => {
    console.log('rodando servidor')
})
