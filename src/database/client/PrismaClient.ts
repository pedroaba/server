import { PrismaClient as prisma } from "@prisma/client";

export class PrismaClient {
  private static _instance: PrismaClient;
  public prismaClient: prisma;

  constructor () {
    this.prismaClient = new prisma();
  }

  public static getInstance () {
    if (this._instance) 
      return this._instance;

    this._instance = new PrismaClient();
    return this._instance;

  }

}
