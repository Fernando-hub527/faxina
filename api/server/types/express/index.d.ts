import { SessionUserDTO } from "../../src/modules/user/dto/SessionUserDTO"
import session from 'express-session';



declare module "express-session" {
  interface Session {
    user: SessionUserDTO;
  }
}