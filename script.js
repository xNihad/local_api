const express = require("express")
const mongoose = require("mongoose")
const bodyParse = require("body-parser")
const dotenv = require("dotenv")
dotenv.config()
const cors = require("cors")
const app = express()



app.use(express.static('public'));
app.use(bodyParse.json())
app.use(cors())

const Schemaz = new mongoose.Schema({
    name: String,
    description: String
})

const Modelz = mongoose.model("room", Schemaz)

app.get("/rooms", async (req,res)=>{
    try {
         req = await Modelz.find()
         res.send(req)
    } catch (error) {
        res.status(500).send(error.message);
    } 
})

app.post("/rooms", async (req,res)=>{
    try {
        let newRoom = new Modelz(req.body)
        newRoom.save()
        let updatedRoomz = await Modelz.find()
        res.send(updatedRoomz)
        console.log(newRoom);
        console.log(updatedRoomz);
    } catch (error) {
        res.status(500).send(error.message);
    }
   
})

app.get("/rooms/:id", async (req,res)=>{
    try {
        let id = req.params.id
        let room = await Modelz.findById(id)
        res.send(room)
        console.log(room);
    } catch (error) {
        res.status(500).send(error.message);
    }
    
})

app.delete("/rooms/:id", async (req,res)=>{
    try{
    let id = req.params.id
    let room = await Modelz.findByIdAndDelete(id)
    let updatedRooms = await Modelz.find();
    res.send(updatedRooms)
    console.log(updatedRooms);
    }catch (error){
        res.status(500).send(error.message);
    }
})

mongoose.connect(process.env.DB_connection_string)
.then(res=>{
    console.log("Connected to DB");
})
.catch(err =>{
    console.log(err);
})


app.listen(7070, ()=>{
    console.log("Port 7070 is listened");
})

