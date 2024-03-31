const controller = {}

controller.main = (req,res) => {
  res.render('main')
}

controller.prueba = (req,res) => {
  res.send('AQUI ENVIO LOS DATOS')
}

controller.send = async (req,res) => {
  const nodemailer = require('nodemailer');
  const { email } = req.body;

  let transporter = nodemailer.createTransport({
      service: 'Gmail',
      auth: {
          user: 'luisferarevalou@gmail.com',
          pass: 'Consep7o123'
      }
  });

  let mailOptions = {
      from: 'luisferarevalou@gmail.com',
      to: email,
      subject: 'Confirmación de correo',
      text: 'Gracias por registrarte. Este es tu correo de confirmación.'
  };

  try {
      let info = await transporter.sendMail(mailOptions);
      console.log('Correo enviado: ' + info.response);
      res.status(200).send('Correo enviado');
  } catch (error) {
      console.log(error);
      res.status(500).send('Error al enviar el correo');
  }

};

module.exports = controller