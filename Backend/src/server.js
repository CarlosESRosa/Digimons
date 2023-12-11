require('dotenv').config();
const app = require('./api');
const digimonController = require('./controllers/digimonController');
const middlewares = require('./middlewares');

// não remova a variável `API_PORT` ou o `listen`
const port = process.env.API_PORT || 3001;

app.get('/digimons', digimonController.getDigimons);
app.get('/digimons/name/:name', digimonController.getDigimonsByName);
app.get('/digimons/level/:level', digimonController.getDigimonsByLevel);

app.post('/digimons', digimonController.postDigimons);
app.put('/digimons/:id', digimonController.updateDigimons);
app.delete('/digimons/:id', digimonController.deleteDigimons);

// não remova esse endpoint
app.get('/', (_request, response) => {
  response.send({message: 'API funcionando'});
});

app.use(middlewares.errorMiddleware);

app.listen(port, () => console.log(`API escutando a rota http://localhost:${port}`));

module.exports = app