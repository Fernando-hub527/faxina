import { Request, Response } from "express";
import { IClientController } from "./IClientController";

export class ClientController implements IClientController{
    constructor(){
        
    }
    
    createClient(req: Request, res: Response): void {
        throw new Error("Method not implemented.");
    }
    listClients(req: Request, res: Response): void {
        throw new Error("Method not implemented.");
    }
    findClientById(req: Request, res: Response): void {
        throw new Error("Method not implemented.");
    }
}