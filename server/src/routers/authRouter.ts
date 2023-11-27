// routes/employee.ts

import { Router } from 'express';
import authController from '../controllers/authController';

const router = Router();

router.post('/', authController.register);

export default router;
