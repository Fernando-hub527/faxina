import { IError } from "./IError";

export class ErrorUnknown implements IError{
    error: String;
    statusCode = 500
    name: string;
    message: string;
    stack?: string | undefined;

    constructor(msgError: string){
        this.error = msgError
        this.message = msgError
        this.name = "Error Unknown"
    }

    getError() {
        return this.error
    }
    getStatus(){
        return this.statusCode
    }


}