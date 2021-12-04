const express = require('express');

const mongoose = require('mongoose');

const connectDB = async () => {
    try {
        await mongoose.connect('mongodb+srv://KhangAn12620:an1262000@cluster0.zhfnp.mongodb.net/ManagerProject?retryWrites=true&w=majority',{
            //useCreateIndex: true,
            useNewUrlParser: true,
            useUnifiedTopology: true,
            //useFindAndModify: false
        })

        console.log('Connect to database successfully!!');
    } catch (error) {
        console.log(error.message);
        process.exit(1);
    }
}

connectDB();

const app = express();

app.get('/', (req,res) => res.send('Hello world'));

const PORT = 12620;

app.listen( PORT, () => console.log(' Server started on port :',PORT));