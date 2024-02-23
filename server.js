const express = require('express');
const nodemailer = require('nodemailer');
const bodyParser = require('body-parser');
const cors = require('cors');
const dotenv = require('dotenv');

const app = express();
const port = process.env.PORT || 3001;

// Middleware
app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
dotenv.config();

// Nodemailer Configuration
const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASSWORD,
  },
});

// API endpoint for handling form submissions
app.post('/send-email', (req, res) => {
  const { user_name, user_email, message } = req.body;

  // Email content
 
  const mailOptionsRecipient = {
    from: process.env.EMAIL_USER,
    to: process.env.EMAIL_RECIPIENT, 
    subject: 'New Contact Form Submission',
    text: `
      Name: ${user_name}
      Email: ${user_email}
      Message: ${message}
      
    `,
  };
  
  const mailOptionsUser = {
    from: process.env.EMAIL_USER,
    to: user_email,
    subject: 'SAK ACADEMY - Thank You for Contacting Us',
    text: `
      Dear ${user_name},
  
      Thank you for contacting SAK ACADEMY! We appreciate your message and will get back to you as soon as possible.
  
      
  
      Best regards,
      ${user_name}
    `,
  };
  
  // Send email to recipient
  transporter.sendMail(mailOptionsRecipient, (errorRecipient, infoRecipient) => {
    if (errorRecipient) {
      console.log('Error sending email to recipient:', errorRecipient);
      res.status(500).send('Internal Server Error');
    } else {
      console.log('Email sent to recipient:', infoRecipient.response);
  
      // Send email to user after sending to recipient
      transporter.sendMail(mailOptionsUser, (errorUser, infoUser) => {
        if (errorUser) {
          console.log('Error sending email to user:', errorUser);
          res.status(500).send('Internal Server Error');
        } else {
          console.log('Email sent to user:', infoUser.response);
          res.status(200).send('Emails Sent Successfully');
        }
      });
    }
  });
})  

// Start server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
