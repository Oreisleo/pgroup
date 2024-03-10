require('dotenv').config(); // Charge les variables d'environnement à partir du fichier .env

const express = require('express');
const bodyParser = require('body-parser');
const nodemailer = require('nodemailer');

const app = express();


app.use(bodyParser.urlencoded({ extended: true }));


app.post('/contact', (req, res) => {
  const { firstname, surname, email, sujet, subject, pays } = req.body;

  
  const transporter = nodemailer.createTransport({
    host: 'smtp.gmail.com',
    port: 587,
    secure: false,
    auth: {
      user: process.env.EMAIL_USER, 
      pass: process.env.EMAIL_PASSWORD 
    }
  });

 
  const mailOptions = {
    from: process.env.EMAIL_USER, 
    to: process.env.EMAIL_TO, 
    subject: sujet,
    text: `Nom: ${firstname} ${surname}\nE-mail: ${email}\nPays: ${pays}\nMessage: ${subject}`
  };

  try {
   
    transporter.sendMail(mailOptions, (error, info) => {
      if (error) {
        console.error(error);
        res.status(500).send('Une erreur s\'est produite. Veuillez réessayer plus tard.');
      } else {
        console.log('E-mail envoyé :', info.response);
        res.status(200).send('Votre message a été envoyé avec succès !');
      }
    });
  } catch (error) {
    console.error('Une erreur s\'est produite lors de l\'envoi de l\'e-mail :', error);
    res.status(500).send('Une erreur s\'est produite lors de l\'envoi de l\'e-mail. Veuillez réessayer plus tard.');
  }
});


const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Serveur démarré sur le port ${PORT}`);
});