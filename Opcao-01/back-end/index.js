const express = require('express');
const cors = require('cors');

const { ErrorMiddleware } = require('./middlewares/ErrorMiddleware');

const controller = require('./controllers');

const app = express();
const port = process.env.PORT || 3001;

app.use(cors());
app.use(express.json());

app.use('/client', controller.client);
app.use('/movie', controller.movie);
app.use('/register', controller.register);
app.use('/rental', controller.rental);

app.listen(port, () => console.log(`Ouvindo na porta ${port}`));

app.use(ErrorMiddleware);
