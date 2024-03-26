import express, {Request, Response, NextFunction} from 'express';
import { connectDb } from './utils/features.js';
import { errorMiddleware } from './middlewares/error.js';
import NodeCache from 'node-cache';
import { config } from 'dotenv';
import morgan from 'morgan';
import cors from "cors";

export const nodeCache = new NodeCache();

config({
    
    path:  "./.env",
});

const mongoURI = process.env.URI!
const port = process.env.PORT;
connectDb(mongoURI);


// import sub Routes
import userRoute from './routers/user.js';
import blogRoute from './routers/blog.js';
import commentRoute from './routers/comment.js';

const app = express();
app.use(express.json())
app.use(morgan("dev"));
app.use(cors())


app.get('/',async(req,res)=>{
    

     res.json({
         joker: "ajay",
     })
});



// using Routes for apis
app.use('/api/v1/user', userRoute);
app.use('/api/v1/blog', blogRoute);
app.use('/api/v1/comment', commentRoute);




app.use('/uploads', express.static("uploads"));
app.use(errorMiddleware);

app.listen(port,()=>{
      console.log(`servser is working on http://localhost:${port}`)
});