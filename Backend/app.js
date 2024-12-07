import express from "express"
import env from "dotenv"
import mongoose from "mongoose"
import cors from "cors"
const app = express()
app.use(cors());
app.use(express.json())
env.config()
import usersRoutes from "./src/routes/user.js"
import postRoutes from "./src/routes/post.js"
import commentsRoutes from "./src/routes/comments.js"

const SERVER = process.env.PORT
const mongodb = process.env.MongoUrl

mongoose.connect(mongodb, {
    // useUnifiedTopology: true
})
.then(()=> console.log("CONNECTED TO DATABASE"))
.catch((error)=> console.log("CONNECTION ERROR", error))

app.use("/user", usersRoutes)
app.use("/post", postRoutes)
app.use("/comments", commentsRoutes)


app.listen(SERVER, ()=>{
    console.log("SERVER IS ACTIVE AT http://localhost:7000");
})
