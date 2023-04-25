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
    subject: "Meu primeiro e-mail",
    text: "Olá, esse é meu primeiro e-mail enviado",
    html: "<p>Aqui é uma menssagem em HTML</p>"
  };

  transport.sendMail(message, function(err){
    if(err)
      return res.status(400).json({
        erro:true,
        mensagem: 'Erro: e-mail não enviado!'
      })
    else
      return res.json({
        erro: false,
        mensagem: 'E-mail enviado com sucesso!' 
      })
  })
  
})

app.listen(porta, () => { console.log('Servidor rodando!') })