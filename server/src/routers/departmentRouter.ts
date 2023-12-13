import { Router } from 'express';
import departmentController from '../controllers/departmentController';

const router = Router();
router.get('/', departmentController.getDepartment);

export default router;
