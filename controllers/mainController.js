const { name } = require('ejs')

const controller = {}

controller.main = (req,res) => {
  res.render('main')
}

controller.info = (req,res) => {
  res.render('plantilla')
}


module.exports = controller