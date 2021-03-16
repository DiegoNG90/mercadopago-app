const express = require('express');
const app = express();
const PORT = 3000 || process.env.PORT;
const bodyParser = require('body-parser');
//Agregamos/instanciamos el SDK (Software Development Kit) mercadopago
const mercadopago = require('mercadopago');



//Middleware
app.use(bodyParser.urlencoded({ extended: false }))
app.use(express.json()); 
app.use(express.urlencoded({extended: true}));
// SDK de Mercado Pago

// Agrega credenciales
mercadopago.configure({
  access_token: "APP_USR-6308537224528879-031521-a5fcad24749177e4f6604d77f70b2c9c-729167170" //Todavía no vamos a poner el TOKET real: para hacer prueba vamos a usar USUARIOS DE PRUEBA.
});

//Server

app.post('/checkout', (req,res) => {
    // res.send(`<h1>Hola desde checkout  </h1>`)

    // Crea un objeto de preferencia
    let preference = {
        items: [
          {
            title: req.body.title,
            unit_price: parseInt(req.body.price),
            quantity: 1,
          }
        ]
      };
      
      mercadopago.preferences.create(preference)
      .then(function(response){

        // console.log(response.body);
        res.redirect(response.body.init_point); 

      }).catch(function(error){
        console.log(error);

      });
})



app.listen(PORT, ()=> {
    console.log(`Servidor escuchando en puerto ${PORT}`);
})