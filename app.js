import express from 'express';
import ConnectDB from './db/connectdb.js';
import router from './routes/web.js';


 const app = express();

 //static files
 app.use(express.static('public'));
  
 app.use(express.urlencoded({extends:false}))
 //load router
 app.use("/", router);

 //view engine
 app.set("viwe engine",'ejs');


 //db connection
 const port = process.env.PORT || "80"
 const DATABASE_URL = process.env.DATABASE_URL || "mongodb://127.0.0.1:27017";

 ConnectDB(DATABASE_URL);

 app.listen(port,()=>{
    console.log(`server listerning on port http:\\localhost:${port}`)
 })