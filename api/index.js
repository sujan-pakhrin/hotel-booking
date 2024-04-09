import express from 'express';
import dotenv from 'dotenv';
import mongoose from 'mongoose';
import authRoute from './routes/auth.route.js';
import userRoute from './routes/user.route.js';
import hotelRoute from './routes/hotel.route.js';
import roomRoute from './routes/room.route.js';
import cookieParser from 'cookie-parser';
const app = express();
dotenv.config()

mongoose
    .connect(process.env.MONGO)
    .then(() => {
        console.log('Connected to MongoDB');
    }).catch((err) => {
        console.error('Error connecting to MongoDB:', err);
    });
;
app.use(express.json()) 
app.use(cookieParser())
app.get('/user', (req, res) => {
    res.send('hello how are you')
})

app.use('/api/auth', authRoute)
app.use('/api/user', userRoute)
app.use('/api/hotel', hotelRoute)
app.use('/api/room', roomRoute)

app.use((err,req,res,next) => {	
    const errorStatus=err.status||500;
    const errorMessage=err.message||"Something went wrong!"
    return res.status(errorStatus).json({
        success:false,
        status:errorStatus,
        message:errorMessage,
        stack:err.stack,
    })
})

app.listen(5021, () => {
    console.log('connected to backend')
}) 