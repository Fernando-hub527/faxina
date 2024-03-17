import { Request, Response } from "express";
import { IClientController } from "./IClientController";
import { IUserService } from "../../user/service/IUserService";
import { ErrorAccessDenied } from "../../../error/ErrorAcessoNegado";
import { Profile } from "../../user/dto/UserDTO";
import { IClientService } from "../service/IClientService";
import { ClientDTO } from "../dtos/ClientDTO";
import { ErrorInvalidParams } from "../../../error/ErrorInvalidParams";
import { ClienQueryParametersDTO } from "../dtos/QueryParametersDTO";
import { UserService } from "../../user/service/UserService";

export class ClientController implements IClientController{
    userService: IUserService
    clientService: IClientService

    constructor(userService?: IUserService, clientService ?: IClientService){
        this.userService = userService || new UserService()
        this.clientService = clientService
    }
    
    async createClient(req: Request, res: Response) {
        // const userOrError = await this.userService.findUserById(Number(req.session.user.id))
        // if(!userOrError.isSucess || userOrError.getValue().profile != Profile.admin) return res.status(userOrError.getError().statusCode).send(new ErrorAccessDenied())
        
        // const newClientOrError = ClientDTO.factoryNewClient(req.body.name, req.body.email, req.body.telephone, req.body.address, req.body.cleaningDay)
        // if(!newClientOrError.isSucess) return res.status(newClientOrError.getError().statusCode).send(newClientOrError.getValue())

        // const clientCreatedOrError = await this.clientService.createClient(newClientOrError.getValue())
        // if(!clientCreatedOrError.isSucess) return res.status(clientCreatedOrError.getError().statusCode).send(clientCreatedOrError.getValue())

        // return res.status(200).send(clientCreatedOrError)
        return res.status(200).send({})
    }

    async listClients(req: Request, res: Response) {
        const userOrError = await this.userService.findUserById(Number(req.params.id))
        if(!userOrError.isSucess || userOrError.getValue().profile != Profile.admin) return res.status(userOrError.getError().statusCode).send(new ErrorAccessDenied())
        
        const parameters = ClienQueryParametersDTO.factoryQueryParameters(req.query.limit, req.query.page, req.query.name.toString(), req.query.telephone, req.query.email, req.query.address, req.query.cleaningDay)
        if(!parameters.isSucess) return res.status(parameters.getError().statusCode).send(parameters.getError())

        const clientsOrError = await this.clientService.listClients(parameters.getValue())
        if(!clientsOrError.isSucess) return res.status(clientsOrError.getError().statusCode).send(clientsOrError.getError())

        return res.status(200).send(clientsOrError)
    }
    
    async findClientById(req: Request, res: Response) {
        const userOrError = await this.userService.findUserById(Number(req.params.id))
        if(!userOrError.isSucess || userOrError.getValue().profile != Profile.admin) return res.status(userOrError.getError().statusCode).send(new ErrorAccessDenied())
        
        if(!Number.parseInt(req.query.clientId.toString())) return res.status(400).send(new ErrorInvalidParams("client id not found"))

        const clientOrError = await this.clientService.findClientById(Number(req.query.clientId))
        if(!clientOrError.isSucess) return res.status(clientOrError.getError().statusCode).send(clientOrError.getError())

        res.status(200).send(clientOrError.getValue())
    }
}