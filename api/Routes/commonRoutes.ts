import express from 'express';
import CommonController from '../controller/commonController';
import DemoModel from '../model/demoModel';
import { ObjectId } from "mongodb";

const router = express.Router()

router.get('/id/:id',(req, res)=>{
    console.log("in id");
    let con = new CommonController();
    var data = con.get(new DemoModel(new ObjectId(req.params.id)))
    
    console.log(data);
});

router.get('/',(req, res)=>{
    console.log("in all");

    let con = new CommonController();
    con.get(null)
});

router.post('/',(req, res)=>{
    let con = new CommonController();
    con.post(new DemoModel(req.body.id, req.body.name, req.body.age))
    res.status(200);
});

export default router;