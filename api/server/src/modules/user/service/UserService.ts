import   argon2d from "argon2";
import { ResultsWrapper } from "../../../utils/ResultsWrapper";
import { UserDTO } from "../dto/UserDTO";
import { IUserRepository } from "../repository/IUserRepository";
import { UserRepository } from "../repository/UserRepository";
import { IUserService } from "./IUserService";
import { ErrorAccessDenied } from "../../../error/ErrorAcessoNegado";

export class UserService implements IUserService{
    repository: IUserRepository

    constructor(repository ?: IUserRepository){
        this.repository = repository || new UserRepository()
    }
    async validLogin(userName: string, password: string): Promise<ResultsWrapper<UserDTO>> {
        const userOrError = await this.repository.findUserByUserName(userName)
        if(!userOrError.isSucess) return ResultsWrapper.fail(new ErrorAccessDenied())
        
        const access = await argon2d.verify(userOrError.getValue().password, password)
        return access ? ResultsWrapper.ok(userOrError.getValue()) : ResultsWrapper.fail(new ErrorAccessDenied())
    }

    findUserById(id: number): Promise<ResultsWrapper<UserDTO>> {
        return this.repository.findUserById(id)
    }

}