import mongoose from 'mongoose'
import dotenv from 'dotenv'

dotenv.config()

const connectDB = async () => {
  try {
    console.log(process.env.MONGO_CONNECT)
    await mongoose.connect(process.env.MONGO_CONNECT);
    console.log('MongoDB connected')
  } catch (error) {
    console.error('Error connecting to MongoDB:', error)
  }
};

export default connectDB