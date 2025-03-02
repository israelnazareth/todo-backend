import { User } from '../models/User';
import { UserType } from '../schemas/userSchema';

export const createUser = async (userData: UserType) => {
  const user = new User(userData);
  return await user.save();
};

export const getAllUsers = async () => {
  return await User.find({});
};

export const getUserById = async (id: string) => {
  return await User.findById(id);
}

export const updateUser = async (id: string, userData: UserType) => {
  return await User.findByIdAndUpdate(id, userData, { new: true });
};

export const deleteUser = async (id: string) => {
  return await User.findByIdAndDelete(id);
};
