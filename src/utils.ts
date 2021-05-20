import { connect, ConnectionOptions } from "mongoose"
const {
    // Attempts to connect to MongoDB and then tries to connect locally:)
    MONGODB_URI = "mongodb://localhost:27017/next_test"
} = process.env

console.log(MONGODB_URI)

const options: ConnectionOptions = {
    useFindAndModify: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useNewUrlParser: true
}

export const connectToDatabase = () => connect(MONGODB_URI, options)
