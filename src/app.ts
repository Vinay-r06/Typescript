import express from 'express';
import bodyParser from 'body-parser';

import todosRouter from './routes/todos';                 // default import..

const app= express();

app.use(bodyParser.json());
app.use(todosRouter);                           //using routes as middleware

//app.listen(3000);

//app.listen({port:3000});

app.listen(3000);