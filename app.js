require('dotenv').config(); // Charge les variables d'environnement à partir du fichier .env

const express = require('express');
const bodyParser = require('body-parser');
const nodemailer = require('nodemailer');

const app = express();

// Middleware pour analyser les données du formulaire
app.use(bodyParser.urlencoded({ extended: true }));

// Définir le routeur pour le formulaire de contact
app.post('/contact', (req, res) => {
  const { firstname, surname, email, sujet, subject, pays } = req.body;

  // Créer un transporteur SMTP
  const transporter = nodemailer.createTransport({
    service: 'Gmail',
    auth: {
      user: process.env.EMAIL_USER, // Utilisez la variable d'environnement pour l'e-mail d'utilisateur
      pass: process.env.EMAIL_PASSWORD // Utilisez la variable d'environnement pour le mot de passe
    }
  });

  // Définir les options de l'e-mail
  const mailOptions = {
    from: process.env.EMAIL_USER, // Adresse e-mail de l'expéditeur
    to: process.env.EMAIL_TO, // Adresse e-mail de destination (définie dans .env)
    subject: sujet,
    text: `Nom: ${firstname} ${surname}\nE-mail: ${email}\nPays: ${pays}\nMessage: ${subject}`
  };

  try {
    // Envoyer l'e-mail
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

// Démarrer le serveur
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Serveur démarré sur le port ${PORT}`);
});