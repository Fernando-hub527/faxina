import { pool } from "../infra/database/data-source"

export async function createTables(resetDatabase: boolean){
    await pool.query(setUpUserTable(resetDatabase))
}

function setUpUserTable(resetDatabase: boolean){
    return `${resetDatabase ? "drop table if exists user_admin;" : ""}
    CREATE TABLE IF NOT EXISTS user_admin(
        user_name varchar(50) NOT NULL,
        password varchar(50) NOT NULL,
        id SERIAL PRIMARY KEY,
        profile integer NOT NULL
    );`
}