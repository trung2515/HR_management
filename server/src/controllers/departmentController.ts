import DepartmentService from '../services/departmentService';
import userService from '../services/userService';
import { Request, Response } from 'express';

class UserController {
  public getDepartment = async (req: Request, res: Response) => {
    try {
      const response = await DepartmentService.getAllDepartment()
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

export default new UserController();
