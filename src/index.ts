//Doc principal da aplicacão
import express, {Request,Response,NextFunction}  from 'express';
import userRoute from './routes/users.route';
import statusRoute from './routes/status.route';

const app = express();

//configuracão da aplicacão.
app.use(express.json());
app.use(express.urlencoded({extended:true}));

//Configuracão das routas
app.use(userRoute);
app.use(statusRoute);

app.get('/status', (req:Request, res:Response, next:NextFunction) => {
    res.status(200).send({ foo: 'bar' });

});



// inicializacão do servidor
app.listen(3000, () => {
    console.log('Aplicacão executando na porta 3000');
   
});