import { ObjectId } from "mongodb";

class DemoModel {
    id:ObjectId
    name:string
    age:number

    constructor(id:ObjectId=null, name:string=null, age:number=null){
        this.id = id;
        this.name = name;
        this.age = age;
    }
}

export default DemoModel;