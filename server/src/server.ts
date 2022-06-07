//GET = Buscar informações
//post = Cadastrar informações
//PUT = Atualizar informações de um entidade
//PATCH = Atualizar uma informação única de uma intidade 

//import { prisma } from '@prisma/client';
import express from 'express'
import { routes } from './routes';

const app = express();

app.use(express.json());



app.use(routes);

app.listen(3333, () => {
    console.log('HTTP server running!');
});