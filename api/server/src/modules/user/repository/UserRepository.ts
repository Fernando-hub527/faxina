import { pool } from "../../../../infra/database/data-source";
import { ResultsWrapper } from "../../../utils/ResultsWrapper";
import { ErrorAccessDenied } from "../../../error/ErrorAcessoNegado";
import { UserDTO } from "../dto/UserDTO";
import { IUserRepository } from "./IUserRepository";
import { ErrorRegisterNotFound } from "../../../error/ErrorRegisterNotFound";

export class UserRepository implements IUserRepository{

    async findUserByUserName(userName: string): Promise<ResultsWrapper<UserDTO>> {
        const result = await pool.query(`select * from user_admin where user_name='${userName}';`)
        if(!result.rows[0]) return ResultsWrapper.fail(new ErrorRegisterNotFound(userName, "user"))
        return ResultsWrapper.ok(new UserDTO(result.rows[0].user_name, result.rows[0].password, result.rows[0].id, result.rows[0].profile))
    }
    

    async findUserById(id: number): Promise<ResultsWrapper<UserDTO>> {
        const result = await pool.query(`select * from user_admin;`)
        console.log(result.rows[0])
        return ResultsWrapper.fail(new ErrorAccessDenied())
    }

}