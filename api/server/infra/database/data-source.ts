import dotenv from 'dotenv'
import "reflect-metadata"
import { DataSource } from "typeorm"
import { Versions } from "../../src/entity/core/Versions"
import { Category } from "../../src/entity/core/Category"
import { User } from "../../src/entity/core/User"
import { Device } from "../../src/entity/core/Device"
import { Logs } from "../../src/entity/Logs"
import { escolheAmbiente, typeEnv } from "../../src/utils/encontraAmbiente"
import { Course } from '../../src/entity/training/Course'
import { CourseDevice } from '../../src/entity/training/CourseDevice'
import { AccessPermission } from '../../src/entity/accessControl/AccessPermission'
import { AccessRecord } from '../../src/entity/accessControl/AccessRecord'
import { Modules } from '../../src/entity/core/Modules'
import { CourseClass } from '../../src/entity/training/CourseClass'

const ambiente = escolheAmbiente((process.env.NODE_ENV as typeEnv))
if (ambiente !== "prod") {
    dotenv.config({
        path: ambiente
    })
}

export const AppDataSource = new DataSource({
    type: "postgres",
    host:  proces.env.HOST,
    port: Number(process.env.DATABASE_PORT),
    username: process.env.USERNAME_DATABASE,
    password: process.env.PASSWORD,
    database: process.env.DATABASE,
    synchronize: true,
    logging: false,
    entities: [CourseClass, Versions, Category, User, Device, Logs, Course, CourseDevice, AccessPermission, AccessRecord, Modules],
    migrations: [],
    subscribers: [],
})
