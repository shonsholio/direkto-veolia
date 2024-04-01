const { name } = require('ejs')

const controller = {}

controller.main = (req,res) => {
  res.render('main')
}

controller.got = (req,res) => {
  res.render('confirm')
}

controller.send = async (req,res) => {
  const { sedes , fecha , hora , usuario , telefono , email , codigo } = req.body;
  const nodemailer = require('nodemailer');

  let transporter = nodemailer.createTransport({
      service: 'Gmail',
      auth: {
          user: 'luisferarevalou@gmail.com',
          // PARA LA CONFIGURACION DEL CORREO, TOCA HACERLO DESDE GMAIL, EN CONTRASENAS DE APLICACIONES
          pass: 'tnpd ksvn pkne pwep'
      }
  });

  let mailOptions = {
      from: 'luisferarevalou@gmail.com',
      to: email,
      subject: 'Confirmación de correo',
      text: `${ usuario }, gracias por registrarte. Este es tu correo de confirmación para la reserva en Malú ${ sedes }, el dia ${fecha}, a las ${hora}. Cualquier detalle adicional nos comunicaremos al teléfono, ${ telefono }. Tu código de seguridad es ${ codigo }`
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