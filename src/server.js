const express = require('express');
const app = express();
const PORT = 3000 || process.env.PORT;
//Server

app.get('/checkout', (req,res) => {
    res.send(`<h1>Hola desde checkout </h1>`)
})



app.listen(PORT, ()=> {
    console.log(`Servidor escuchando en puerto ${PORT}`);
})