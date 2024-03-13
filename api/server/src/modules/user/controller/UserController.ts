import { Request, Response } from "express";
import { ParamsDictionary } from "express-serve-static-core";
import { ParsedQs } from "qs";
import { IUserController } from "./IUserController";
import { IUserService } from "../service/IUserService";
import { UserService } from "../service/UserService";
import { STATUS_CODES } from "http";
import { ErrorAccessDenied } from "../../../error/ErrorAcessoNegado";

export class UserController implements IUserController{
    userService: IUserService

    constructor(userService ?: IUserService){
        this.userService = userService || new UserService()
    }

    async login(req: Request, res: Response) {
        if(!req.body.userName || !req.body.password){
            const error = new ErrorAccessDenied()
            return res.status(error.statusCode).send(error)
        }

        const accessOrError = await this.userService.validLogin(req.body.userName, req.body.password)
        if(!accessOrError.isSucess) return res.status(accessOrError.getError().statusCode).send(accessOrError)

        
    }
    
}