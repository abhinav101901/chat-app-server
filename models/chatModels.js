import mongoose from "mongoose";

const ChatSchema = new mongoose.Schema({
    members:{
        type:Array,

    }
},{
    timestamps:true,
}
);

export default ChatModel = mongoose.model("Chats",ChatSchema)