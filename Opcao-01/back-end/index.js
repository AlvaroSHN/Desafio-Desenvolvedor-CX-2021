const express = require('express');
const cors = require('cors');

const { ErrorMiddleware } = require('./middlewares/ErrorMiddleware');

const controller = require('./controllers');

const app = express();
const port = process.env.PORT || 3001;

app.use(cors());
app.use(express.json());

console.log('chegou no backed');

app.use('/client', controller.client);
app.use('/movie', controller.movie);

app.listen(port, () => console.log(`Ouvindo na porta ${port}`));

app.use(ErrorMiddleware);
