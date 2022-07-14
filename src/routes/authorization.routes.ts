import { NextFunction, Request, Response, Router } from 'express';
import forbiddenError from '../models/errors/forbidden.error.model';
import userRepository from '../repositories/user.repository';

const authorizationRoute = Router();




authorizationRoute.post ('/token',async(req:Request, res:Response, next:NextFunction) => { // declaração da rota authorizarização


try {

      const authorisationHeader = req.headers['authorization']; //pegar os header aonde vem o basic

    if(!authorisationHeader){ //verificar se inseriu as credencias
        throw new forbiddenError('Credenciais não informadas')// se não inseriu recebe esta msg
    }

    //Basic bHVpejphZG1pbg==
    const [authenticationType,token] = authorisationHeader.split(''); // separamos os valores

    if(authenticationType !== 'Basic' || !token){// verificamos se o authe e o Basic são iguais
        throw new forbiddenError('Tipo de autenticação invalida');// se forem diferentes recebem isto
    }

   const tokenContent = Buffer.from(token, 'base64').toString('utf-8'); //convertemos o token em string
   const [username, password] = tokenContent.split(':'); // separamos o token e atribuimos aousernae e a password
    
   if(!username || !password){ //verificar a existencia do username e password
    throw new forbiddenError('Credenciais não preenchidas') // caso não insira o username ou password recebe esta mensagem.
   }
   const user = userRepository.findByUsernameAndPassword(username, password); // declaramos o user e atribuimos o metodo query do que vem do repository
   console.log(user)
    
} catch (error) {
    next(error);
    
}

  
});

export default authorizationRoute;