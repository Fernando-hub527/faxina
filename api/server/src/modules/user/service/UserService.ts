import { ResultsWrapper } from "../../../utils/ResultsWrapper";
import { UserDTO } from "../dto/UserDTO";
import { IUserRepository } from "../repository/IUserRepository";
import { UserRepository } from "../repository/UserRepository";
import { IUserService } from "./IUserService";

export class UserService implements IUserService{
    repository: IUserRepository

    constructor(repository ?: IUserRepository){
        this.repository = repository || new UserRepository()
    }

    findUserById(id: number): Promise<ResultsWrapper<UserDTO>> {
        return this.repository.findUserById(id)
    }

}