import { Router } from 'express';
import PublicController from '../controllers/Public.controller';

const router = Router();

router.post('/users/new', PublicController.createUser)
router.get('/users', PublicController.getUsers)
router.get('/users/:id', PublicController.getUser)
router.delete('/users/:id', PublicController.deleteUser)


export default router;