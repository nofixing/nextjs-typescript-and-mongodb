import mongoose, { Document, model, Model, Schema } from "mongoose"

export interface InterfaceComment extends Document {
    content: string,
    comments: [ InterfaceComment ]
}

const CommentSchema: Schema = new Schema({
    content: {
        type: String
    },
    comments: [ { type: Schema.Types.ObjectId, ref: 'Comment' } ]
})

export const Comment: Model<InterfaceComment> = mongoose.models.Comment || model("Comment", CommentSchema)
