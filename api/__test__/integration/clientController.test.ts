import requestSession from "supertest-session"

import { StartApp } from "../../server/src/app/startApp"
import { pool } from "../../server/infra/database/data-source"
import argon2d from "argon2"
import { Profile } from "../../server/src/modules/user/dto/UserDTO"
import { ClientDTO } from "../../server/src/modules/client/dtos/ClientDTO"

const app = new StartApp().startTeste()

describe("Creating client", () => {
    beforeEach(async () =>  {
        await pool.query(`delete from user_admin; delete from client;`)
    });

    it("If user is not logged in, then access denied with 401 is returned", async () => {
        const session = await createSession()
        const response = await session.post("/api/faxina/v1/client")
        expect(response.statusCode).toEqual(401)
    })

    it("If user does not have permission, then access denied with 403 is returned", async () => {  
        const session = await createSession("Fernando", "senha1230", 2)   
        const response = await session.post("/api/faxina/v1/client")
        
        expect(response.statusCode).toEqual(403)
    })

    it("If invalid parameters are sent, then  400 is returned", async () => {  
        const session = await createSession("Fernando", "senha1230", 1)   
        const response = await session.post("/api/faxina/v1/client")
        expect(response.statusCode).toEqual(400)
    })

    it("If user is already registered, then 409 is returned", async () => {  
        const session = await createSession("Fernando", "senha1230", 1) 
        await pool.query(`insert into client (name, email, telephone, address, cleaning_day) values('Fernando_coelho', 'fernando@gmail.com', 7774669, 'rua silva n. c', 10);`)
        
        const response = await session.post("/api/faxina/v1/client")
            .send(ClientDTO.factoryNewClient("Fernando_coelho", "fernando@gmail.com", 7788574669, "rua x número y", 10).getValue())
            
        expect(response.statusCode).toEqual(409)
    })

    // it("If request is valid, then 200 is returned", async () => {  
    //     const session = await createSession("Fernando", "senha1230", 1)  

    //     const response = await session.post("/api/faxina/v1/client")
    //         .send(ClientDTO.factoryNewClient("Fernando_coelho", "fernando@gmail.com", 7788574669, "rua x número y", 10).getValue())
            
    //     expect(response.statusCode).toEqual(200)
    // })
})


async function createSession(userName ?: string, password ?: string, profile ?: Profile): requestSession.Session{
    userName && password && profile && await pool.query(`insert into user_admin (user_name, password, profile) values('${userName}', '${await argon2d.hash(password, {type: argon2d.argon2id})}', ${profile})`)
    const session = requestSession(await app)
    await session.post("/api/faxina/v1/login").send({userName: userName, password: password})
    return session
}

// describe("Creating client", () => {
//     var session = null

//     beforeAll(async () => {
//         session = await createSession()
//         console.log(session)
//     })

   
    
//     it("If user is not logged in, then access denied with 401 is returned", async () => {
//         const response = await request(await app).post("/api/faxina/v1/client")
//         expect(response.statusCode).toEqual(401)
//     })

//     it("If user does not have permission, then access denied with 403 is returned", async () => {     
//         const response = await request(await app)
//             .post("/api/faxina/v1/client")
//             .field("Authorization", session)
//         expect(response.statusCode).toEqual(403)
//     })
// })

// async function createSession(){
//     await pool.query(`insert into user_admin (user_name, password, profile) values('Fernando', '${await argon2d.hash("senha1230", {type: argon2d.argon2id})}', 1)`)
//     const response = await request(await app).post("/api/faxina/v1/login").send({userName: "Fernando", password: "senha1230"})
                    
//     return response.header['set-cookie'][0].substring(0, response.header['set-cookie'][0].search(";"))
// }