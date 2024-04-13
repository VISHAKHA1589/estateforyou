// packages
import path from "path";
import express from "express";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";
import session from "express-session";
import User from "./models/userModel.js";
import connectDB from "./config/db.js"

import userRoutes from "./routes/userRoutes.js";
import categoryRoutes from "./routes/categoryRoutes.js";
import cors from 'cors';
import propertyRoutes from "./routes/propertyRoutes.js";
import uploadRoutes from './routes/uploadRoutes.js';
import bodyParser from "body-parser"

dotenv.config();
const port = process.env.PORT || 5000;


connectDB();

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(cors());





// Other routes
app.use('/api/upload', uploadRoutes);
app.use("/api/users", userRoutes);
app.use("/api/category", categoryRoutes);
app.use("/api/properties", propertyRoutes);

// Serve static files
const __dirname = path.resolve();
app.use('/uploads', express.static(path.join(__dirname, "/uploads")));

app.use(bodyParser.json());


import nodemailer from 'nodemailer'; 


app.post('/send-email', async (req, res) => {
  const { name, email, phoneNumber, propertyOwner, propertyPhoneNumber, propertyName } = req.body; 


  let transporter = nodemailer.createTransport({
    service: 'Gmail',
    auth: {
      user: 'bidhimalakar@gmail.com', 
      pass: 'mwnv yyoe pklz mzwz'
    },
    tls: {
   
      rejectUnauthorized: false
    }
  });


  try {
    await transporter.sendMail({
      from: 'bidhimalakar@gmail.com',
      to: 'Estate4Uservices@gmail.com',
      subject: 'property details enquiry',
      text: `Hi there, ${name}\nEmail: ${email}\nPhone Number: ${phoneNumber} has just requested details about the property\nProperty Name: ${propertyName}\nProperty Owner: ${propertyOwner}\nOwner Contact Number: ${propertyPhoneNumber}`
    });
    res.status(200).send('Email sent successfully');
  } catch (error) {
    console.error(error);
    res.status(500).send('Failed to send email');
  }
});


app.post('/send-enquiry-email', async (req, res) => {
  const { name, email, phoneNumber, message, category } = req.body;

  
  let transporter = nodemailer.createTransport({
    service: 'Gmail',
    auth: {
      user: 'bidhimalakar@gmail.com', 
      pass: 'mwnv yyoe pklz mzwz' 
    },
    tls: {

      rejectUnauthorized: false
    }
  
  });


  try {
    await transporter.sendMail({
      from: 'bidhimalakar@gmail.com',
      to: 'Estate4Uservices@gmail.com', 
      subject: 'New Property Inquiry',
      text: `Hi there,
        A new inquiry has just been made by:
        Name: ${name}
        Email: ${email}
        Phone Number: ${phoneNumber}
        Message: ${message}
        Category: ${category}
      `
    });
    res.status(200).send('Email sent successfully');
  } catch (error) {
    console.error(error);
    res.status(500).send('Failed to send email');
  }
});






app.listen(port, () => console.log(`Server running on port: ${port}`));
