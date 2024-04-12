import { pool } from "../../../../infra/database/data-source";
import { ErrorBadRequest } from "../../../error/ErrorBadRequest";
import { ErrorRegisterNotFound } from "../../../error/ErrorRegisterNotFound";
import { ErrorUnknown } from "../../../error/ErrorUnableToPersistData";
import { ResultsWrapper } from "../../../utils/ResultsWrapper";
import { ClientDTO } from "../dtos/ClientDTO";
import { ClienQueryParametersDTO } from "../dtos/QueryParametersDTO";
import { ICLientRepository } from "./IClientRepository";

export class ClientRepository implements ICLientRepository{

    async findClientByemail(email: string): Promise<ResultsWrapper<ClientDTO>> {
        const response = await pool.query("select * from client where email=$1", [email])
        if(!response.rows[0]) return ResultsWrapper.fail(new ErrorRegisterNotFound(email, "client"))

        return ResultsWrapper.ok(response.rows[0])
    }
    
    async createClient(client: ClientDTO): Promise<ResultsWrapper<ClientDTO>> {
        try {
            const clientCreated = await pool.query(`insert into client (name, email, telephone, address, cleaning_day) values('${client.name}', '${client.email}', ${client.telephone}, '${client.address}', ${client.cleaningDay});`)
            // const clientCreated = await pool.query(`insert into client (name, email, telephone, address, cleaning_day) values('fer', 'fer', 777, 'err', 1);`)
            if(!clientCreated.rows[0]) return ResultsWrapper.fail(new ErrorBadRequest("Unable to create user"))
            return ResultsWrapper.ok(client)
        } catch (error) {
            console.log(error)
            return ResultsWrapper.fail(new ErrorUnknown("unknown error when accessing BD"))
        }

    }

    private makeSelectClient(queryParameters: ClienQueryParametersDTO){
        return `select * from client where ${queryParameters.name && "name="}`
    }

    async listClients(queryParameters: ClienQueryParametersDTO): Promise<ResultsWrapper<ClientDTO[]>> {
        const client = await pool.query(`select * from client`)
        if(!client.rows[0]) return ResultsWrapper.fail(new ErrorBadRequest("Unable to create user"))
        
        return ResultsWrapper.ok(client.rows)
    }
    findClientById(clientId: number): Promise<ResultsWrapper<ClientDTO>> {
        throw new Error("Method not implemented.");
    }
    
}