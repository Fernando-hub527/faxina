import { ResultsWrapper } from "../../../ResultsWrapper";
import { UserDTO } from "../dto/UserDTO";
import { IUserService } from "./IUserService";

export class UserService implements IUserService{
    findUserById(id: number): Promise<ResultsWrapper<UserDTO>> {
        throw new Error("Method not implemented.");
    }

}