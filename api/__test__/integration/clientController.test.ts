import request from "supertest"
import { StartApp } from "../../server/src/app/startApp"

const app = new StartApp().startTeste()


describe("Creating client", () => {
    it("If user is not logged in, then access denied with 401 is returned", async () => {
        const response = await request(await app).post("/api/faxina/v1/client")
        expect(response.statusCode).toEqual(401)
    })

    it("If user does not have permission, then access denied with 403 is returned", async () => {
        const response = await request(await app)
            .post("/api/faxina/v1/client")
            .field("Authorization", "faxina:FFuuPwz9STlYKcYkZDbApNpAwbpAsY20")
        expect(response.statusCode).toEqual(403)
    })
})