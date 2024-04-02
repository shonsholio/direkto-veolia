const { name } = require('ejs')

const controller = {}

controller.main = (req,res) => {
  res.render('main')
}


module.exports = controller