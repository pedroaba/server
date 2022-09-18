import { Router } from "express";
import { UserCreateController } from "./UserCreateController";

const userRoutes = Router();

const userCreateController = new UserCreateController();

userRoutes.post("/users", userCreateController.execute);

export default userRoutes;
