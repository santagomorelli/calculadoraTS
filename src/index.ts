import express from 'express';
import * as http from 'http';
import {engine} from 'express-handlebars';
import api from './routes/calculadora';

const puerto = 8081;
const app = express();

const myServer = new http.Server(app);

myServer.listen(puerto, ()=> console.log('Servidor listo en el puerto ',puerto));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/',api);

app.set('view engine', 'hbs');
app.engine('handlebars', engine({
    layoutsDir:'../views/layouts',
    defaultLayout:'../views/layouts/index.hbs',
    extname: 'hbs'
}));
app.set('views','../views');
 
