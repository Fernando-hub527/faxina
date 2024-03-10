import request from "supertest"
import { StartApp } from "../../server/src/app/startApp"

const app = new StartApp().startTeste()


describe("Creating client", () => {
    it("if user not found, then access denied is returned", async () => {
        const response = await request(await app).post("/api/faxina/v1/client")
        // console.log(response)
    })
})