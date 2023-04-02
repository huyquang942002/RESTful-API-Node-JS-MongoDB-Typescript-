import mongoose , {Document,Schema} from "mongoose";

export interface IBook {
    title : String,
    author : String
}

export interface IBookModel extends IBook , Document{}

const BookChema : Schema = new Schema(
    {
        title : {
            type : String,
            require : true
        },
        author : {
            type : Schema.Types.ObjectId,
            require : true,
            ref : 'author'
        }
    },
    {
        timestamps : true
    }
)

export default mongoose.model<IBookModel>('Book',BookChema)