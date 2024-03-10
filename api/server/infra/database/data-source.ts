import { Pool } from 'pg'

export const pool =  new Pool({
    user: 'faxina',
    host: 'localhost',
    database: 'faxina',
    password: 'faxina123',
    port: 5432,
  })