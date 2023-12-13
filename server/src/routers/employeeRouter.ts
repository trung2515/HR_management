import { Router,Request, Response, NextFunction } from 'express';
import verifyToken from "../middlewares/verify_token";
import employeeController from '../controllers/employeeController';
import {body, validationResult} from 'express-validator';

const router = Router();

// router.use(verifyToken)

router.get('/',employeeController.getAllEmployee);


const validateInsertEmployee = [
  body('full_name').notEmpty().withMessage('Full name is required'),
  (req: Request, res: Response, next: NextFunction) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    next();
  },
];

router.post('/', validateInsertEmployee,employeeController.insertEmployee);

export default router;
