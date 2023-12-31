import EmployeeService from '../services/employeeService';
import { Request, Response } from 'express';

class EmployeeController {
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

  public updateEmployee = async (req: Request, res: Response) => {
    try {
      const updatedData = req.body; 
      const { employeeId } = req.params;
      const response = await EmployeeService.updateEmployee(employeeId,updatedData)
      return res.status(200).json(response);
    } catch (error) {
      console.error(error); 
      return res.status(500).json({
        err: -1,
        mess: 'Internal server error',
      });
    }
  };

  public removeEmployee = async (req: Request, res: Response) => {
    
    try {
      const { employeeId } = req.params;
      const response = await EmployeeService.removeEmployee(employeeId)
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
