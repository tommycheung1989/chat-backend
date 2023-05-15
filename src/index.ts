import express from 'express';
import * as dotenv from 'dotenv'
import { Server } from 'socket.io'
import http from "http"
dotenv.config()

const port = process.env.PORT || 5000
const app = express();
const server = http.createServer(app)
const io = new Server(server)

io.on('connection', (socket) => {
    console.log('connected')
    console.log(socket)
})
app.get('/',(req,res)=>res.send('hello'))
app.listen(port, () => {
    console.log(`server is listening ${port}`)
})