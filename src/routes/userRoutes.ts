import * as express from 'express';
import * as User from '../controllers/userController';

const router = express.Router();

router.post('/', User.createUser);
router.get('/', User.getAllUsers);
router.get('/:id', User.getUserById);
router.put('/:id', User.updateUser);
router.delete('/:id', User.deleteUser);

export default router;
