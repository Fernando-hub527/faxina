import { Profile } from "./UserDTO"

export class SessionUserDTO{
    userName: string
    id: number
    profile: Profile
    
    constructor(userName: string, id: number, profile: Profile){
        this.userName = userName
        this.id = id
        this.profile = profile
    }
}