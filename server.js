const express = require('express');
const app = express();
const hbs = require('hbs');
require('./hbs/helpers');

const port = process.env.PORT || 3000;

app.use(express.static(__dirname + '/public'));
hbs.registerPartials(__dirname + '/views/partials', (err) => {});

app.set('view engine', 'hbs');


// app.get('/', (req, res) => {
//     // res.send('Hola Mundo');

//     let salida = {
//         nombre: 'Facundo',
//         edad: 32,
//         url: req.url
//     };

//     res.send(salida);
// });

// app.get('/data', (req, res) => {
//     res.send('seccion data');
// });


app.get('/', (req, res) => {
    res.render('home', { name: 'facundo nicolas campos' });
});

app.get('/about', (req, res) => res.render('about'));


app.listen(port, () => console.log(`Escuchando peticiones en el puerto ${port}`));