import express from "express";
import mongoose from "mongoose";

mongoose.connect('mongodb+srv://tortee:0909@blog-app.dy4ky.mongodb.net/?retryWrites=true&w=majority&appName=blog-app')
.then(
    () => {
        console.log('MongoDB is connected')
    }
)
.catch((err) => {
    console.log(err);
});

const app = express();

app.listen(3000, () => {
    console.log('Server is running on port 3000');
})