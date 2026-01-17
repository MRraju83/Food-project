import mongoose from "mongoose";


export const connectDB = async () =>{
    await mongoose.connect('mongodb+srv://quick-develop:develop12@cluster0.k7knvik.mongodb.net/food-del').then(()=>console.log("DB Connnected"));
}