import { Request, Response } from 'express';
import * as taskService from '../services/taskService';

export const createTask = async (req: Request, res: Response) => {
  try {
    const task = await taskService.createTask(req.body);
    res.status(201).send(task);
  } catch (error) {
    if (error instanceof Error) {
      res.status(400).send({ error: error.message });
    }
  }
};

export const getAllTasks = async (req: Request, res: Response) => {
  try {
    const tasks = await taskService.getAllTasks();
    res.status(200).send(tasks);
  } catch (error) {
    if (error instanceof Error) {
      res.status(500).send({ error: error.message });
    }
  }
};

export const getTaskById = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const task = await taskService.getTaskById(id);
    if (!task) {
      res.status(404).send({ message: 'Tarefa não encontrada' });
      return;
    }
    res.status(200).send(task);
  } catch (error) {
    if (error instanceof Error) {
      res.status(500).send({ error: error.message });
    }
  }
};

export const updateTask = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const task = await taskService.updateTask(id, req.body);
    if (!task) {
      res.status(404).send({ message: 'Tarefa não encontrada' });
      return;
    }
    res.status(200).send(task);
  } catch (error) {
    if (error instanceof Error) {
      res.status(500).send({ error: error.message });
    }
  }
};

export const deleteTask = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const task = await taskService.deleteTask(id);
    if (!task) {
      res.status(404).send({ message: 'Tarefa não encontrada' });
      return;
    }
    res.status(200).send({ message: 'Tarefa deletada com sucesso' });
  } catch (error) {
    if (error instanceof Error) {
      res.status(500).send({ error: error.message });
    }
  }
};
