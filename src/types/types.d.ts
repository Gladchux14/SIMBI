import { Request } from "express";

declare global {
  namespace Express {
    interface User {
      userId: string;
      email?: string; 
    }

    interface Request {
      user?: User; // Make it optional
    }
  }
}