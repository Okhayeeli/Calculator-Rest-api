import { Request, Router} from "express";
import { CalculatorRequestBody } from "../types";
import { validateCalculatorRequest, deleteCalculationById } from "../middleware";

export const router = Router();

router.get('/', (req: Request, res) =>{
    res.send({message: 'Get all calculations',
        timestamp: req.timestamp,
        data: [
            {id: 1, name: 'calculation 1', result: 20},
            {id: 2, name: 'calculation 2', result: 40},
        ]
    });
});

router.get('/:id',(req: Request, res) =>{ //the : gives assignment to the id
    res.send({
        message: 'Get named calculation by ID',
        timestamp: req.timestamp,
        id: req.params.id,
        point: 1,
    });
})
router.delete('/:id',  deleteCalculationById, (_req: Request, res) =>{
    res.status(200).send({
        message: `Successfully deleted calculation with id ${res.locals.deletedIr}`
    });
});


router.post('/', 
    validateCalculatorRequest, 
    (req: Request<{},any, CalculatorRequestBody>, res) =>{
    const {operator, operand1, operand2} = req.body;
    let result: number|string;
    switch(operator){
        case '+':
            result = operand1 + operand2;
            break;
        case '-':
            result = operand1 - operand2;
            break;
        case '*':
            result = operand1 * operand2;
            break;
        case '/':
            result = operand1 / operand2;
            break;
        default:
            result = 'Invalid operator';
    }
    console.log(req.body)
    res.send({message: 'create a new calculation',
        timestamp: req.timestamp,
       result,
    })
})  