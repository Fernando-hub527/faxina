import { SessionUserDTO } from "../../src/modules/user/dto/SessionUserDTO"



declare module "express-session" {
  interface Session {
    user: SessionUserDTO;
  }
}