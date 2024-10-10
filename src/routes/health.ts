import {  Request, Router } from "express";
import { addTimeStamp } from "../middleware";

export const router = Router();

router.get('/', (req: Request, res) =>{
    throw new Error('Aplication error');
    res.send({message: "ok", timestamp: req.timestamp});
})