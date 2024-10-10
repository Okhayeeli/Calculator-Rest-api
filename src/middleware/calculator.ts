import { Request, Response, NextFunction } from "express";
import { CalculatorRequestBody } from "../types";


export function validateCalculatorRequest(req: Request<{}, any, CalculatorRequestBody>, res: Response, next: NextFunction){
    const { operator, operand1, operand2 } = req.body;
    const errors: string [] = []
    
    //validate operands and operators
    if( typeof operand1 !== 'number' || typeof operand2 !== 'number') {
       errors.push('Operands must be numbers');
    }
    if( operator !== '+' && operator !== '-' && operator !== '*' && operator !== '/') {
       errors.push('operator must be one of +, -, *, /');
    } 
    if (errors.length > 0) {
        return res.status(400).send(errors.join(' , '));
    }
    //if no errors, proceed to the next middleware
   next();
}
export function deleteCalculationById(req: Request, res: Response, next: NextFunction){
   const existingIds = ['1', '2', '45', '56', '0'];
  
   const{id} = req.params;

   if (!existingIds.includes(id)) {
      return res.status(404).send(`Calculation with id ${id} not found`);
  }
  //deletedId is store in the res.locals to pass the value of the equation which ius the is that was deleted in the middleware
   res.locals.deletedId = id;
   existingIds.splice(existingIds.indexOf(id), 1);
   next();
}
