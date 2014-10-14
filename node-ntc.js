#!/usr/bin/env node
var ntc = require('./ntc.js');
var testColor = '#bada55';

var arg = process.argv.slice(2);

if(arg)
{
  var color = arg[0];
  if(color.length === 3)
  {
    var newColor = '';
    color.split('').forEach(function(val, index, array){
      if (typeof val !== undefined){
        newColor += val + val;
      }
    });
    color = newColor;
  }
  testColor = '#' + color;
}

var ntcResult = ntc.ntc.name(testColor);
var result = {
                'inputColor': testColor,
                'resultColorName': ntcResult[1],
                'resultColorHex': ntcResult[0],
                'exactMatch?': ntcResult[2]
            };
console.log(result);