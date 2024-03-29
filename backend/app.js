const express = require('express'); // importa express
const cors = require('cors');
const app = express();

app.use(cors());
app.use(express.json()); // Se le dice a express que use este middleware
app.use(express.urlencoded({extended: true}));

app.use('/pizzaPre', require('./routes/pizzaPredeterminada'));
app.use('/ingredientes', require('./routes/Ingredientes'));
app.use('/tamanios', require('./routes/tamanio'));
app.use('/ordenes', require('./routes/Orden'));
app.use('/pizzaPersonalizada', require('./routes/pizzaPersonalizada'));
app.use('/receta', require('./routes/Receta'));
app.use('/ticket', require('./routes/ticket'));

app.get('/', (req, res) => {
    res.send("GET desde app.js");
});

const port = 3000;

app.listen(port, () => {
    console.log(`Escuchando en el puerto ${port}.`);
});