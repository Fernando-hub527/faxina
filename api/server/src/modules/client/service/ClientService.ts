import { ResultsWrapper } from "../../../utils/ResultsWrapper";
import { ClientDTO } from "../dtos/ClientDTO";
import { ClienQueryParametersDTO } from "../dtos/QueryParametersDTO";
import { IClientService } from "./IClientService";

export class CLientService implements IClientService{
    constructor(){

    }

    createClient(client: ClientDTO): Promise<ResultsWrapper<ClientDTO>> {
        throw new Error("Method not implemented.");
    }
    listClients(queryParameters: ClienQueryParametersDTO): Promise<ResultsWrapper<ClientDTO[]>> {
        throw new Error("Method not implemented.");
    }
    findClientById(clientId: number): Promise<ResultsWrapper<ClientDTO>> {
        throw new Error("Method not implemented.");
    }
    
}

