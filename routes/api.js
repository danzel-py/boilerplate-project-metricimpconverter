'use strict';

const expect = require('chai').expect;
const ConvertHandler = require('../controllers/convertHandler.js');

module.exports = function (app) {
  let convertHandler = new ConvertHandler();

  app.route('/api/convert').get((req,res)=>{
    let input = req.query.input

    let initNum = convertHandler.getNum(input)
    let initUnit = convertHandler.getUnit(input)
    let returnUnit = convertHandler.getReturnUnit(initUnit)
    let returnNum = convertHandler.convert(initNum, initUnit)
    let toString = convertHandler.getString(initNum, initUnit, returnNum, returnUnit)

    res.send(toString)

  })




  app.use((req, res) => {
    res.status(404).type('text').send('Not Found');
  });
};
