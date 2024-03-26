import mongoose from "mongoose"
import { nodeCache } from "../app.js";


export const connectDb = (uri:string)=>{
      
      mongoose.connect(uri,{
          dbName:"blog",

      }).then((c)=>{
           console.log(`db connect to : ${c.connection.host}`);
      }).catch((err)=>{
            console.log("eroor is : "+ err)
      });
} 

