import express from "express";
import { connectDB } from "./config/connectDatabase";
import userRoutes from './routes/userRoutes'
import vendorRoutes from './routes/vendorRoutes'
import adminRoutes from './routes/adminRoutes'
import cors from "cors";
import dotenv from "dotenv";
import { createServer } from "http";
import path from 'path';
import helmet from "helmet";
import { corsOption } from "./config/corsConfig";
import session from "express-session";

  
dotenv.config();

const app = express();
const server = createServer(app)

app.use(cors(corsOption));
app.use(express.json());
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.static(path.join(__dirname, '../../Frontend/dist')))
app.use(express.urlencoded({ extended: true }));
app.use(helmet());

app.use('/api/user', userRoutes)
app.use('/api/vendor', vendorRoutes)
app.use('/api/admin', adminRoutes)

const PORT= process.env.PORT || 3000;  
connectDB()
.then(()=>{
  server.listen(PORT,()=>{
    console.log(`Server is running on port ${PORT}`);
  })
})
.catch((err)=>{
  console.error('Database connection failed', err);
  process.exit(1)
})










 