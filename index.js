import express from 'express'
import dotenv from 'dotenv'
import mongoose from "mongoose"
import router from "./router.js"
import fileUpload from 'express-fileupload'

dotenv.config()

const PORT = process.env.PORT || 5001
const DB_URL = process.env.DB_URL

const app = express()

app.use(express.json())
app.use(express.static('static'))
app.use(fileUpload({}))
app.use('/api', router)

async function startApp() {
    try {
        await mongoose.set('strictQuery', false)
        await mongoose.connect(DB_URL)
        app.listen(PORT, () => {
            console.log(`SERVER STARED ON PORT ${PORT}`)
        })
    } catch (e) {
        console.log(e);
    }
}

startApp()
