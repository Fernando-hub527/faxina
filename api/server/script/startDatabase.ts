import { pool } from "../infra/database/data-source"

export async function createTables(resetDatabase: boolean){
    await pool.query(setUpUserTable(resetDatabase))
    await pool.query(setUpClientTable(resetDatabase))
}

function setUpUserTable(resetDatabase: boolean){
    return `${resetDatabase ? "drop table if exists user_admin;" : ""}
    CREATE TABLE IF NOT EXISTS user_admin(
        user_name varchar(50) NOT NULL,
        password varchar(200) NOT NULL,
        id SERIAL PRIMARY KEY,
        profile integer NOT NULL
    );`
}

function setUpClientTable(resetDatabase: boolean){
    return `${resetDatabase ? "drop table if exists client;" : ""}
    CREATE TABLE IF NOT EXISTS client(
        id SERIAL PRIMARY KEY,
        name varchar(100) NOT NULL,
        email varchar(200) NOT NULL,
        telephone integer NOT NULL,
        address varchar(60) NOT NULL,
        cleaning_day integer NOT NULL
    );`
}