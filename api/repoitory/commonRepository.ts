import mongoClient from '../config/mongoClient'

const dbCollection = mongoClient.connect().collection("demo");

let commonRepository = {
    get:function(){
        return dbCollection.find({});
    },
    getById:function(id){
        return dbCollection.find({_id:id}).toArray();
    },
    post:function(data){
        try{
            console.log(data)
            if(data && data.id){
                dbCollection.updateOne({_id:data.id},data);
            }
            else{
                dbCollection.insertOne(data, function (err, result) {
                    if (err) {
                      return "Error inserting matches!";
                    } else {
                      console.log(`Added a new match with id ${result.insertedId}`);
                    }
                });
            }
        }
        catch(ex){
            console.log(ex);
        }
    }
}

export default commonRepository;