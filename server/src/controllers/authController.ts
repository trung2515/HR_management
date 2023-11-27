import  authService from '../services/authService';
import { Request, Response } from 'express';

class AuthController {
  public register = async (req: Request, res: Response) => {
    try {
      const { email, password } = req.body;
      console.log( req.body );
      
      if (!email || !password) {
        return res.status(400).json({
          err: 1,
          mes: 'Missing payloads',
        });
      }

      // Gọi hàm register từ authService và sử dụng destructuring assignment để lấy response
      const response = await authService.register({ email, password });

      return res.status(200).json(response);
    } catch (error) {
      console.error(error); // Log lỗi để dễ dàng theo dõi khi có lỗi
      return res.status(500).json({
        err: -1,
        mess: 'Internal server error',
      });
    }
  };
}

export default new AuthController();
