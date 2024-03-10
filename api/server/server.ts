import dotenv from 'dotenv'
import { StartApp } from './src/app/startApp'


if (process.env.NODE_ENV  === 'development') dotenv.config({ path: './server/env/dev/.env' })
else if (process.env.NODE_ENV  === 'test') dotenv.config({ path: './server/env/test/.env' })

const application = new StartApp()

application.start(3034)