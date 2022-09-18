import { Request, Response } from "express";
import { PrismaClient } from "../../client/PrismaClient";

export class UserCreateController {
  private prisma: PrismaClient;

  constructor () {
    this.prisma = PrismaClient.getInstance();
  }

  public async execute (req: Request, res: Response) {
    return res.json({n: ""})

  }

}
