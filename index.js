const mongodb = require('mongodb');

const mongoClient = mongodb.MongoClient

const connectionUrl = 'mongodb+srv://mail1project1:team123456@cluster0.kcqny2i.mongodb.net/'
const dbname = 'task4' 



// mongoClient.connect (connectionUrl , (error , res1)=>{
//     if (error) {
//         return console.log('error has occured')
//     }else
//     console.log('DB is connected')
    
// }
// )

const client = new mongoClient(connectionUrl, { useNewUrlParser: true, useUnifiedTopology: true });
 client.connect();
console.log('Connected to MongoDB');


const db = client.db(dbname);

// //insertMany
// db.collection ('users').insertMany([
//     {
//         name : 'fatma',
//         age : 21 ,
//         city :'cairo' ,
//     },
//     {
//         name : 'moataz',
//         age : 19 ,
//         city :'alex'
//     },
//     {
//         name : 'mohamed',
//         age : 21 ,
//         city :'cairo'
//     }
//     ,
//     {
//         name : 'zoza',
//         age : 21 ,
//         city :'cairo'
//     }
// ] , (error,data)=>{
//     if(error){
//         console.log("Failed to inser users")
//     }
//     else {
//         console.log("insert 4 users correctly")
//         // console.log(data)
//     }
// })


// //find by age  & limit 2

// db.collection('users').find({ age: 21 }).limit(2).toArray((error, users) => {
//     if (error) {
//         console.log('Error occurred:', error);
//         return;
//     }
//     console.log("users with age 21 are :",users);
// });



// //find by city
    db.collection('users').find({city:'cairo'}).count((error,users)=>{
        if(error){
            return console.log('Error has occurred')
        }
        console.log("users of city = cairo ", users)
})


// //    find by _id
//     db.collection('users').findOne({_id:mongodb.ObjectId("65faaa7b0a389a8030d53502")}
//     , (error,user)=>{
//         if(error){
//             console.log("Can't find the user")
//         }
//         console.log("user with id ",user)
//     })