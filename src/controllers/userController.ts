import { Request, Response } from 'express';
import * as userService from '../services/userService';

export const createUser = async (req: Request, res: Response) => {
  try {
    const user = await userService.createUser(req.body);
    res.status(201).send(user);
  } catch (error) {
    if (error instanceof Error) {
      res.status(400).send({ error: error.message });
    }
  }
};

export const getAllUsers = async (req: Request, res: Response) => {
  try {
    const users = await userService.getAllUsers();
    res.status(200).send(users);
  } catch (error) {
    if (error instanceof Error) {
      res.status(500).send({ error: error.message });
    }
  }
};

export const getUserById = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const user = await userService.getUserById(id);
    if (!user) {
      res.status(404).send({ message: 'Usuário não encontrado' });
      return;
    }
    res.status(200).send(user);
  } catch (error) {
    if (error instanceof Error) {
      res.status(500).send({ error: error.message });
    }
  }
};

export const updateUser = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const user = await userService.updateUser(id, req.body);
    if (!user) {
      res.status(404).send({ message: 'Usuário não encontrado' });
      return;
    }
    res.status(200).send(user);
  } catch (error) {
    if (error instanceof Error) {
      res.status(500).send({ error: error.message });
    }
  }
};

export const deleteUser = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const user = await userService.deleteUser(id);
    if (!user) {
      res.status(404).send({ message: 'Usuário não encontrado' });
      return;
    }
    res.status(200).send({ message: 'Usuário deletado com sucesso' });
  } catch (error) {
    if (error instanceof Error) {
      res.status(500).send({ error: error.message });
    }
  }
};
