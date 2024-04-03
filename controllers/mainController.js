const controller = {}

const { name } = require('ejs')
const props = require('../src/data.json')


controller.main = (req,res) => {
  res.render('main')
}

controller.info = (req,res) => {
  console.log(typeof props)

  var url = req.url;
  if (url == '/op1'){
    var info = 'op1'
  } else if (url =='/op2'){
    var info = 'op2'
  }

  res.render('plantilla', {
    data: props,
    apto : info
  })
}


module.exports = controller