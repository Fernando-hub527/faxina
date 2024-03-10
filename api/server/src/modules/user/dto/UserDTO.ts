export enum Profile{
    admin = 1,
    client = 2,
    cleaner = 3
}

export class UserDTO{
    userName: string
    password: string
    id: number
    profile: Profile
    
    constructor(userName: string, password: string, id: number, profile: Profile){
        this.userName = userName
        this.password = password
        this.id = id
        this.profile = profile
    }
}