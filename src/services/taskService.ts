import { TaskType } from './../schemas/taskSchema';
import { Task } from '../models/Task';

export const createTask = async (taskData: TaskType) => {
  const task = new Task(taskData);
  return await task.save();
};

export const getAllTasks = async () => {
  return await Task.find({});
};

export const getTaskById = async (id: string) => {
  return await Task.findById(id);
}

export const updateTask = async (id: string, taskData: TaskType) => {
  return await Task.findByIdAndUpdate(id, taskData, { new: true });
};

export const deleteTask = async (id: string) => {
  return await Task.findByIdAndDelete(id);
};
