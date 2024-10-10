import { Request, Response, NextFunction } from "express";

export function addTimeStamp(req: Request, _res: Response, next: NextFunction) {
    req.timestamp = Date.now();
    next();
}