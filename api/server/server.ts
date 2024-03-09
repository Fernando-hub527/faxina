import { AplicationManager } from './src/setup/setup'
import dotenv from 'dotenv'


if (process.env.NODE_ENV  === 'development') dotenv.config({ path: './server/env/dev/.env' })
else if (process.env.NODE_ENV  === 'test') dotenv.config({ path: './server/env/test/.env' })

const application = new AplicationManager()

application.start(3034)