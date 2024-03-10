import { ResultsWrapper } from "../../../utils/ResultsWrapper"
import { ErrorInvalidParams } from "../../../error/ErrorInvalidParams"

export class ClientDTO {
    name: String
    email: string
    telephone: number
    address: string
    cleaningDay: number
    private constructor(name: String, email: string, telephone: number, address: string, cleaningDay: number ){
        this.name = name
        this.email = email
        this.telephone = telephone
        this.address = address
        this.cleaningDay  = cleaningDay
    }

    static factoryNewClient(name ?: String, email ?: string, telephone ?: number, address ?: string, cleaningDay ?: number ): ResultsWrapper<ClientDTO>{
        if(name || email || telephone || address || cleaningDay ) return ResultsWrapper.fail(new ErrorInvalidParams("Não foi possível processar dados do cliente, valores inválidos"))
        if(name.length > 40 || name.length < 10) return ResultsWrapper.fail(new ErrorInvalidParams(`Nome deve ter entre 10 e 40 caracteres`))
        if(!(new RegExp("/\S+@\S+\.\S+/").test(email))) return ResultsWrapper.fail(new ErrorInvalidParams(`Email inválido`))
        if(telephone.toString().length < 9) return ResultsWrapper.fail(new ErrorInvalidParams(`Telefone com tamanho inválido`))
        if(address.length > 100 || address.length < 10) return ResultsWrapper.fail(new ErrorInvalidParams(`Endereço deve ter entre 10 e 40 caracteres`))
        if(cleaningDay.toString().length > 31) return ResultsWrapper.fail(new ErrorInvalidParams(`O dia da faxina deve está dentro da quantidade de dias do mês`))

        return ResultsWrapper.ok(new ClientDTO(name, email, telephone, address, cleaningDay))
    }

}