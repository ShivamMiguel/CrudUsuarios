//Doc principal da aplicacão
import express, { NextFunction, Request, Response }  from 'express';


import errorHandler from './middlewares/error-handler middleware';
import authorizationRoute from './routes/authorization.routes';
import statusRoute from './routes/status.route';
import userRoute from './routes/users.route';

const app = express();

//configuracão da aplicacão.
app.use(express.json());
app.use(express.urlencoded({extended:true}));

//Configuracão das routas
app.use(userRoute);
app.use(statusRoute);
app.use(authorizationRoute);


app.get('/status', (req:Request, res:Response, next:NextFunction) => {
    res.status(200).send({ foo: 'bar' });

});

//configuracão dos handler de erros
app.use(errorHandler);




// inicializacão do servidor
const port = 3001
const host = "http://localhost"
app.listen(3001, () => {
    console.log(`server is running in ${host}:${port}`);
   
});