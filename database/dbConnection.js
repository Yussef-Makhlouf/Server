import mongoose from "mongoose";

export function dbConeection(){
    mongoose.connect('mongodb+srv://hosni:iYMqRnHl8jG9USE3@plumbing.sttlj.mongodb.net/?retryWrites=true&w=majority&appName=plumbing').then(()=>{
        console.log("Database Connected");
    }).catch(()=>{
        console.log("Database connection failed");
    })
}