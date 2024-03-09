import { Request, Response } from "express"

export interface IClientController{
    createClient(req: Request, res: Response): void
    listClients(req: Request, res: Response): void
    findClientById(req: Request, res: Response): void
}