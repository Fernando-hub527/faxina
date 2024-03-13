import express, { json } from "express"
import cors from "cors"
import { setRouts } from "./routs"
import { createTables } from "../../script/startDatabase"
import RedisStore from "connect-redis"
import {createClient} from "redis"
import session from "express-session"
export class StartApp{
    app: express.Application
  
    constructor () {
      this.app = express()
    }

    start(port: number) {
      
      this.setMiddleares(this.setSessionControl())
      this.app.listen(port)
      return this.app
    }
  
    async startTeste () {
      await createTables(true)
      this.setMiddleares(this.setSessionControl())
      return this.app
    }

    setSessionControl(){
      let redisClient = createClient()
      redisClient.connect().catch(console.error)
      return new RedisStore({client: redisClient, prefix: "faxina:"})
    }
  
    private async setMiddleares (store: RedisStore) {
      this.app.use((req, res, next) => {
        res.header('Access-Control-Allow-Origin', '*')
        res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE')
        next()
      })
      this.app.use(session({store: store, resave: false, saveUninitialized: false, secret: "keyboard cat"}))
  
      this.app.use(cors())
      this.app.use(json())
      setRouts(this.app)
    }
}
