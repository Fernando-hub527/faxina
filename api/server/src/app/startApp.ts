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

    async start(port: number) {
      
      this.setMiddleares(await this.setSessionControl())
      this.app.listen(port)
      return this.app
    }
  
    async startTeste () {
      await createTables(true)
      const store = await this.setSessionControl()
      this.setMiddleares(store)
      return this.app
    }

    async setSessionControl(){
      const client = await createClient({url: 'redis://localhost:6378'})
        .on('error', err => console.log('Redis Client Error', err))
        .connect();
      return new RedisStore({client: client, prefix: "faxina:"})
    }
  
    private async setMiddleares (store: RedisStore) {
      this.app.use(session({resave: false, saveUninitialized: false, secret: "keyboard cat"}))

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
