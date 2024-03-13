import { Response , Request} from "express";
import { setRedis } from "../../../infra/memoryDatabase/redisSettings";
import { SessionUserDTO } from "../../modules/user/dto/SessionUserDTO";
import { Hash } from "crypto";

// export async function validSession(req: Request, res: Response, next: any){
//     let token = req.headers.authorization
//     if (!token) return res.status(401).json({ auth: false, message: 'No token provided.' })

//     const value = await (await setRedis()).get(token)
//     if(!value) return res.status(401).json({ auth: false, message: 'No active session.' })
//     req.user = value
//     next()
// }

// export async function createSession(user: SessionUserDTO){
//     const client = await setRedis()
//     client.set()
// }

// function factoryToken(){
//     Hash.
// }