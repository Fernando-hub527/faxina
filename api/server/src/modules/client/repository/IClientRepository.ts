import { ResultsWrapper } from "../../../utils/ResultsWrapper"
import { ClientDTO } from "../dtos/ClientDTO"
import { ClienQueryParametersDTO } from "../dtos/QueryParametersDTO"

export interface ICLientRepository{
    createClient(client: ClientDTO): Promise<ResultsWrapper<ClientDTO>>
    listClients(queryParameters: ClienQueryParametersDTO): Promise<ResultsWrapper<ClientDTO[]>>
    findClientById(clientId: number): Promise<ResultsWrapper<ClientDTO>>
}