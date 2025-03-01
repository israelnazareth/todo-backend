import * as express from 'express';
import * as Task from '../controllers/taskController';

const router = express.Router();

router.post('/', Task.createTask);
router.get('/', Task.getAllTasks);
router.get('/:id', Task.getTaskById);
router.put('/:id', Task.updateTask);
router.delete('/:id', Task.deleteTask);

export default router;
