import express, { Router } from "express"
import { ClientController } from "../modules/client/controller/ClientController"
import { UserController } from "../modules/user/controller/UserController"

export function setRouts(app: express.Application){
    const routs = Router()
    const clientController = new ClientController()
    const userController = new UserController()

    routs.post("/api/faxina/v1/client", clientController.createClient.bind(clientController))
    
    routs.post("/api/faxina/v1/login", userController.login.bind(userController))

    app.use(routs)
}