const express = require('express');
const bodyParser = require('body-parser');
const { ErrorMiddleware } = require('./middlewares/ErrorMiddleware');

const { routerLogin } = require('./controllers');

const app = express();
const port = process.env.PORT || 3001;

app.use(express.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use('/login', routerLogin);
// app.use('/register', routerRegister);
// app.use('/profile', routerProfile);

app.listen(port, () => console.log(`Ouvindo na porta ${port}`));

app.use(ErrorMiddleware);
