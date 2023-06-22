const mongoose = require('mongoose');
mongoose.set('strictQuery', false);


module.exports = async () => {
    try {
        const database_url = "mongodb+srv://lalis181014:Camila181014@cluster0.daqtlmk.mongodb.net/Library";
        const connect = await mongoose.connect(database_url, {
            useNewUrlParser: true,
            useUnifiedTopology: true
        })
    
        console.log(`connected successfully to : ${connect.connection.host} , ur DataBase`);
    } catch (err) {
        console.log(`Failed to connect to mongoDB : ${err}`);
    }

}