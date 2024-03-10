import { ResultsWrapper } from "../../../utils/ResultsWrapper";
import { UserDTO } from "../dto/UserDTO";

export interface IUserRepository{
    findUserById(id: number): Promise<ResultsWrapper<UserDTO>>

}