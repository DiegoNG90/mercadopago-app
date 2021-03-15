const express = require('express');
const app = express();
const PORT = 3000 || process.env.PORT;
//Agregamos/instanciamos el SDK (Software Development Kit) mercadopago
const mercadopago = require('mercadopago');

// SDK de Mercado Pago
const mercadopago = require ('mercadopago');

// Agrega credenciales
mercadopago.configure({
  access_token: 'PROD_ACCESS_TOKEN' //Todavía no vamos a poner el TOKET real: para hacer prueba vamos a usar USUARIOS DE PRUEBA.
});

        

//Server

app.get('/checkout', (req,res) => {
    res.send(`<h1>Hola desde checkout  </h1>`)
})



app.listen(PORT, ()=> {
    console.log(`Servidor escuchando en puerto ${PORT}`);
})