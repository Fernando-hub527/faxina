import { Pool } from 'pg'

export const pool =  new Pool({
    user: process.env.USER_DB,
    host: process.env.HOST,
    database: process.env.DB_NAME,
    password: process.env.PASSWORD,
    port: Number(process.env.DB_PORT),
  })