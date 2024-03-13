import { ResultsWrapper } from "../../../utils/ResultsWrapper";
import { UserDTO } from "../dto/UserDTO";

 export interface IUserService{
   findUserById(id: number): Promise<ResultsWrapper<UserDTO>>
   validLogin(userName: string, password: string): Promise<ResultsWrapper<UserDTO>>
 }