import express, { json } from "express"
import cors from "cors"
import { setRouts } from "./routs"
import { createTables } from "../../script/startDatabase"

export class StartApp{
    app: express.Application
  
    constructor () {
      this.app = express()
    }

    async setUpDatabase(resetDatabase: boolean){
      await createTables(resetDatabase)
    }
  
    start (port: number) {
      
      this.setMiddleares()
      this.app.listen(port)
      return this.app
    }
  
    async startTeste () {
      await this.setUpDatabase(true)
      this.setMiddleares()
      return this.app
    }
  
    private async setMiddleares () {
      this.app.use((req, res, next) => {
        res.header('Access-Control-Allow-Origin', '*')
        res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE')
        next()
      })
  
      this.app.use(cors())
      this.app.use(json())
      setRouts(this.app)
    }
}
