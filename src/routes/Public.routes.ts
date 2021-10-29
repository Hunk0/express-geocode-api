import { Router } from 'express';
import PublicController from '../controllers/Public.controller';

const router = Router();

router.post('/users/new', PublicController.createUser)
router.delete('/users/:id', PublicController.deleteUser)


export default router;