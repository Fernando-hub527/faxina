import express, { Request, Response, Router } from "express"
import { ClientController } from "../modules/client/controller/ClientController"
import { UserController } from "../modules/user/controller/UserController"
import { ErrorAccessDenied } from "../error/ErrorAcessoNegado"
import { ErrorUnauthenticatedUser } from "../error/ErrorUnauthenticatedUser"

export function setRouts(app: express.Application){
    const routs = Router()
    const clientController = new ClientController()
    const userController = new UserController()

    routs.post("/api/faxina/v1/client", validSession, clientController.createClient.bind(clientController))
    
    routs.post("/api/faxina/v1/login", userController.login.bind(userController))

    app.use(routs)
}

export function validSession(req:Request, res: Response, next: any){
    if(!req.session['user']) next(new ErrorUnauthenticatedUser(""))
    else next()
}