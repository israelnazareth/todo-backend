import * as express from 'express';
import * as User from '../controllers/userController';
import { userSchema } from '../schemas/userSchema';
import { validate } from '../middlewares/validate';

const router = express.Router();

router.post('/', validate(userSchema), User.createUser);
router.get('/', User.getAllUsers);
router.get('/:id', validate(userSchema), User.getUserById);
router.put('/:id', User.updateUser);
router.delete('/:id', User.deleteUser);

export default router;
