import request from "supertest"
import { StartApp } from "../../server/src/app/startApp"
import { pool } from "../../server/infra/database/data-source"
import argon2d from "argon2"

const app = new StartApp().startTeste()


describe("Login", () => {
    beforeEach(async ()=>{
        await pool.query(`delete from user_admin;`)

    })
    it("If login or password is invalid, then 403 is returned", async () => {
        const user = await pool.query(`insert into user_admin (user_name, password, profile) values('Fernando', '${await argon2d.hash("senha1230", {type: argon2d.argon2id})}', 1)`)


        const response = await request(await app)
                        .post("/api/faxina/v1/login")
                        .send({userName: "Fernando", password: "fernando123"})
        
        expect(response.statusCode).toStrictEqual(403)
    })

    it("If user is not found, then 403 is returned", async () => {
        const response = await request(await app)
                        .post("/api/faxina/v1/login")
                        .send({userName: "Fernando", password: "fernando123"})
        
        expect(response.statusCode).toStrictEqual(403)
    })
    
    it("If user is not send, then 403 is returned", async () => {
        const response = await request(await app)
                        .post("/api/faxina/v1/login")
                        .send({userName: "", password: "fernando123"})
        
        expect(response.statusCode).toStrictEqual(403)
    })

    it("If user is valid, then 200 with session id is returned", async () => {
        const user = await pool.query(`insert into user_admin (user_name, password, profile) values('Fernando', '${await argon2d.hash("senha1230", {type: argon2d.argon2id})}', 1)`)

        const response = await request(await app)
                        .post("/api/faxina/v1/login")
                        .send({userName: "Fernando", password: "senha1230"})
        
        expect(response.statusCode).toStrictEqual(200)
        expect(response.body).toHaveProperty('sessionId')
    })
})