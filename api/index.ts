import express from 'express';
import bodyParser from 'body-parser'; 
import mongoClient from "./config/mongoClient";
import commonRoutes from './Routes/commonRoutes';
const port = 4050;

function dbCallback(error){
    if(error){
        console.log(error);
        return;
    }
}

mongoClient.connect();


const app = express();
app.use(bodyParser.urlencoded({
    extended: true
  }));
app.use(express.json());
app.use("/common", commonRoutes);
app.listen(port, () => {
    console.log(`Server Started at ${port}`)
})