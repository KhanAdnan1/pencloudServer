import mongoose, { Schema } from "mongoose";

const booksSchema= new mongoose.Schema(
    {
        bookTitle:{
            type:String,
            required:true,
        },
        genericFicition:{
            type:String,
            required:true,
        },
        bookCover:{
            type:String,
            required:true
        },
        read:{
            type:Number,
            default:0
        },
        user:{
            type: Schema.Types.ObjectId,
            ref:"User"
        }

    },
    {timestamps:true}

)


export const BooksSchema=mongoose.model("Books",booksSchema)