const express = require('express');
const cors = require("cors");

const port = process.env.PORT || 3001;

const moviesRoutes = require('./routes/moviesRoutes');
const genresRoutes = require('./routes/genresRoutes');

const app = express();

//URL encode  - Para que nos pueda llegar la información desde el formulario al req.body
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(cors());

app.use(moviesRoutes);
app.use(genresRoutes);

app.listen(port, () => console.log(`Servidor corriendo en el puerto ${port}`));
