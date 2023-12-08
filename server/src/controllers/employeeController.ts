import EmployeeService from '../services/employeeService';
import { Request, Response } from 'express';

class EmployeeController {
  public insertEmployee = async (req: Request, res: Response) => {
    try {
      const response = await EmployeeService.insertEmployee(req.body)
      return res.status(200).json(response);
    } catch (error) {
      console.error(error); 
      return res.status(500).json({
        err: -1,
        mess: 'Internal server error',
      });
    }
  };
  public getAllEmployee = async (req: Request, res: Response) => {
    try {
      const response = await EmployeeService.getAllEmployee()
      return res.status(200).json(response);
    } catch (error) {
      console.error(error); 
      return res.status(500).json({
        err: -1,
        mess: 'Internal server error',
      });
    }
  };
}

export default new EmployeeController();
