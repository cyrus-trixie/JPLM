require("dotenv").config();
const express = require('express');
const nodemailer = require('nodemailer');
const cors = require('cors');

const app = express();
const port = 3000;

// Middleware
app.use(cors());
app.use(express.json());

// Create transporter
const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: process.env.EMAIL,
        pass: process.env.PASSWORD,
    }
});

// Email sending endpoint
app.post('/sendMail', (req, res) => {
    const { name, email, message } = req.body; // Get values from request

    const mailOptions = {
        from: email, // Sender email from request
        to: process.env.EMAIL, // Your email (receiving)
        subject: `Message from ${name}`,
        text: message,
        replyTo: email 
    };

    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            console.log(error);
            res.status(500).send({ message: 'Error sending email' });
        } else {
            console.log('Email sent: ' + info.response);
            res.status(200).send({ message: 'Email sent successfully' });
        }
    });
});

// Start server
app.listen(port, (err) => {
    if (err) {
        console.log('Server error', err);
    } else {
        console.log(`Server started on port ${port}`);
    }
});
