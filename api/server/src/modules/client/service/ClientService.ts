import { ErrorRegisterAlreadyRegistered } from "../../../error/ErrorRegisterAlreadyRegistered";
import { ResultsWrapper } from "../../../utils/ResultsWrapper";
import { ClientDTO } from "../dtos/ClientDTO";
import { ClienQueryParametersDTO } from "../dtos/QueryParametersDTO";
import { ClientRepository } from "../repository/ClientRepository";
import { ICLientRepository } from "../repository/IClientRepository";
import { IClientService } from "./IClientService";

export class CLientService implements IClientService{
    repository: ICLientRepository

    constructor(repository ?: ICLientRepository){
        this.repository = repository || new ClientRepository()
    }

    async createClient(newClient: ClientDTO): Promise<ResultsWrapper<ClientDTO>> {
        let clientOrError = await this.repository.findClientByemail(newClient.email)
        if(clientOrError.isSucess) return ResultsWrapper.fail(new ErrorRegisterAlreadyRegistered(newClient.email, "client"))
        
        return await this.repository.createClient(newClient)
    }
    listClients(queryParameters: ClienQueryParametersDTO): Promise<ResultsWrapper<ClientDTO[]>> {
        throw new Error("Method not implemented.");
    }
    findClientById(clientId: number): Promise<ResultsWrapper<ClientDTO>> {
        throw new Error("Method not implemented.");
    }
    
}

