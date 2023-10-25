import express from 'express';
import * as dotenv from 'dotenv';
//import {Configuration , OpenAIApi} from 'openai';
//import pkg from 'openai';
//const {Configuration , OpenAI} = pkg;
//import OpenAI from 'openai';
//import Configuration from 'openai';
import OpenAi from 'openai';
import Configuration from 'openai';
dotenv.config();
const router=express.Router();
const config=new Configuration({
   // apiKey :process.env.OPENAI_API_KEY,
    apiKey :process.env.OPENAI_API_KEY
//const openai=new OpenAI({
  
    //VITE_OPENAI_API_KEY:process.env.OPENAI_API_KEY,
  // apiKey:meta.env.OPENAI_API_KEY
   
});
const openai=new OpenAi(config);
router.route('/').get((req,res)=>{
    res.status(200).json({message:"Hello from DALL.E ROUTES"})
})
router.route('/').post(async(req,res)=>{
    try{
        const{ prompt }=req.body;
        const response=await openai.images.generate({
            prompt,
            n:1,
            size:'1024x1024',
            response_foramt:'b64_json'
            //response_foramt:'url',
        });
       // res.json(response.data.data.map(img=>img.url))
        const image=response.data.data[0].b64_json;
        //const image=response.data.data[0].url;
        res.status(200).json({photo:image});
    }
    catch(error){
        console.error(error);
        res.status(500).json({message:"Something went wrong"})
    }
    //const port=process.env.PORT || 5000;
    //application.listen(port,()=>console.log(`Server running on port ${[port]}`));

})


export default router;