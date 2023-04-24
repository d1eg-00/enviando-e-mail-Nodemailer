const express = require('express');
const app = express();
const nodemailer = require('nodemailer');
const porta = 443;

app.get('/', (req, res) => {
  res.send('enviado e-mail com o Nodemailer!')
})

app.get('/sendemail', async (req, res) => {

  var transport = nodemailer.createTransport({
    host: "sandbox.smtp.mailtrap.io",
    port: 2525,
    auth: {
      user: "f5c4e9c922bdad",
      pass: "05ce2a0fa2463a"
    }
  });

  var message = {
    from: "sender@server.com",
    to: "receiver@sender.com",
    subject: "Message title",
    text: "Plaintext version of the message",
    html: "<p>HTML version of the message</p>"
  };


})

app.listen(porta, () => { console.log('Servidor rodando!') })