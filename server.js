const express = require('express');
const app = express();

app.get('/',(req,res) => {
    res.status(200).send({message: 'Olá Mundo! Estou funcionando.'});
})
app.listen(3001, () =>{
    console.log('API rodando na porta 3001');
})