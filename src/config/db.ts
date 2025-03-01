import mongoose from 'mongoose';
import * as dotenv from 'dotenv';

dotenv.config();

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI as string);
    console.log('MongoDB conectado');
  } catch (err) {
    console.error('Erro ao conectar ao MongoDB:', err);
    process.exit(1);
  }
};

export default connectDB;
