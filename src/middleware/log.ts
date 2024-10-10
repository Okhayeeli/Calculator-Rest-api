import { Request, Response, NextFunction } from "express";

export function logger(req: Request, _res: Response, next: NextFunction) {
    console.log(`${req.timestamp} ${req.method} ${req.ip}${req.originalUrl} `);
  
    next();
  }