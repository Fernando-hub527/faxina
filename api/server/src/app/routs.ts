import express, { Router } from "express"
import { ClientController } from "../modules/client/controller/ClientController"

export function setRouts(app: express.Application){
    const routs = Router()
    const controllerClient = new ClientController()

    routs.post("/api/faxina/v1/client", controllerClient.createClient.bind(controllerClient))
    
    app.use(routs)
}