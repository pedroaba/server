import { Request, Response, Router } from "express";
import userRoutes from "./database/controllers/User/userRoutes";

const routes = Router();

routes.get("/hello", (request: Request, response: Response) => {
  response.json({
    name: "John Doe"
  });
});

export default routes;
