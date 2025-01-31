import { Request, Response, NextFunction } from "express";

export function errorHandler( err: any, _req: Request, res: Response, next: NextFunction) {
    console.error(err.stack);
    res.status(500).send(err.message);

    next();
}