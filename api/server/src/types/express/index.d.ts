import { User } from "../custom/User"

export{}

declare global{
    namespace Express{
        export interface Request{
            user: User
        }
    }
}