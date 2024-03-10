import { ResultsWrapper } from "../../../ResultsWrapper"
import { ErrorInvalidParams } from "../../../error/ErrorInvalidParams"

export class ClienQueryParametersDTO{
    name ?: string
    telephone ?: number
    email ?: string
    address ?: string
    cleaningDay? : number
    limit: number
    page:number

    private constructor(limit: number, page:number, name ?: string, telephone ?: number, email ?: string, address ?: string, cleaningDay ?: number){
        this.name = name
        this.telephone = telephone
        this.email = email
        this.address = address
        this.cleaningDay = cleaningDay
        this.limit = limit
        this.page = page
    }

    static factoryQueryParameters(limit: any, page:any, name: string, telephone: any, email: any, address: any, cleaningDay: any): ResultsWrapper<ClienQueryParametersDTO>{
        limit = Number(limit) ? limit : 10
        page = Number(page) ? page : 1
        const onlyLettersPattern = /^[A-Za-z]+$/;

        if(!name.match(onlyLettersPattern) || !email.match(onlyLettersPattern) || !address.match(onlyLettersPattern)) return ResultsWrapper.fail(new ErrorInvalidParams("Apenas letras podem representar os parâmetros de texto"))
        return ResultsWrapper.ok(new ClienQueryParametersDTO(Number(limit), Number(page), name && name.toString(), telephone && Number(telephone), email && email.toString(), address && address.toString(), cleaningDay && Number(cleaningDay)))
    }
}