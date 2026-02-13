import express from "express"
 import {Request,Response} from "express"
 import {users} from "./data.js"
 import cors from 'cors'

  const app = express();

app.use(cors())

 app.get("/", (req:Request,res:Response)=>{

   const q = typeof req.query.q === 'string'  ? req.query.q  : '';

   const searchFields = ['first_name', 'last_name', 'email'] as const;

   const filteredData = users.filter((user) =>
    searchFields.some((field) =>

      user[field].toLowerCase().includes(q.toLowerCase())
    )
  );
 
   console.log(q)

    res.status(200).json(filteredData)
 })
 

  const port = 5000;
 app.listen(port,()=>{
    console.log("server is running")
 })


