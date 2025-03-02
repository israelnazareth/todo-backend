import * as express from 'express';
import * as Task from '../controllers/taskController';
import { validate } from '../middlewares/validate';
import { taskSchema } from '../schemas/taskSchema';

const router = express.Router();

router.post('/', validate(taskSchema), Task.createTask);
router.get('/', Task.getAllTasks);
router.get('/:id', validate(taskSchema), Task.getTaskById);
router.put('/:id', Task.updateTask);
router.delete('/:id', Task.deleteTask);

export default router;
