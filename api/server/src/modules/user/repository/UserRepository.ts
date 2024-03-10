import { pool } from "../../../../infra/database/data-source";
import { ResultsWrapper } from "../../../utils/ResultsWrapper";
import { ErrorAccessDenied } from "../../../error/ErrorAcessoNegado";
import { UserDTO } from "../dto/UserDTO";
import { IUserRepository } from "./IUserRepository";

export class UserRepository implements IUserRepository{
    async findUserById(id: number): Promise<ResultsWrapper<UserDTO>> {
        const result = await pool.query(`select * from user_admin;`)
        console.log(result.rows[0])
        return ResultsWrapper.fail(new ErrorAccessDenied())
    }

}