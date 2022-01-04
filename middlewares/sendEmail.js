// codigo adaptado de https://nodemailer.com/about/

"use strict";
const nodemailer = require("nodemailer");


const sendEmail = async(email, order) => {
  
  const testAccount = await nodemailer.createTestAccount();

  const transporter = nodemailer.createTransport({
    host: "smtp.ethereal.email",
    port: 587,
    secure: false, 
    auth: {
      user: testAccount.user, 
      pass: testAccount.pass, 
    },
  });

  
  const info = await transporter.sendMail({
    from: '"Lojas Bagy" <foo@example.com>', 
    to: email, 
    subject: "Sua compra foi aprovada ✔", 
    text: JSON.stringify(order), 
  });

  console.log("Message sent: %s", info.messageId);
  
  console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));
 
}


module.exports = sendEmail;