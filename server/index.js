import express from 'express';
import * as  dotenv from 'dotenv';
import cors from 'cors';
//we in node here hence we have to add extension also like .js
import dalleRoutes from './routes/dalle.routes.js';

//set environment var
dotenv.config();
//set express application by  running=
const app=express();
//stup couple of pieces of middleware  by calling app.use(cors()) otherwise we have cors origin probleam 
app.use(cors());
//specify  width of payload  
app.use(express.json({limig:"50mb"}))
app.use('/api/v1/dalle',dalleRoutes);
app.get('/', (req,res)=>{
    res.status(200).json({message:"Hello from DALL.E"})
})
app.listen(8080,()=>console.log('Server has started on port 8080'))
