import express from 'express';
import cookieParser from 'cookie-parser';
import cors from "cors";
import dotenv, { configDotenv } from "dotenv";
import connectDB from './utils/db.js';
import router from './routes/user.route.js';
dotenv.config()
const app = express();

//middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

const corsOptions = {
    origin: ["http://localhost:5121"],
    credentials: true,
};

app.use(cors(corsOptions));

const PORT = process.env.PORT || 5001;


//api's
app.use("/api/users",userRoute);


app.listen(PORT, () => {
    connectDB();
    console.log(`Server is running on port ${PORT}`);
});
