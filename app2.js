var mraa = require('mraa');
var net = require('net');
var fs = require('fs');
var flowthings = require('flowthings');

'use strict';
var key = '808150a20c7aaa6edd751a9d9ccc15b71049bb40'
 , SparkPost = require('sparkpost')
 , client = new SparkPost(key);
 
var api = flowthings.API({
  account: 'letaureau',
  token: 'xbSzkivvFdLj5iTqMcnu7ydCsLC5MzTb'
});

var loopInterval = 1000;
var loopInterval2 = 30000;

var loopCount = 0;

var trans = {
 return_path: 'noreply@email.followplants.com',
 content: { template_id: 'daily-email'},
 recipients: ['schweitzer.albert@gmail.com']
};
         api.drop('f55735dd35bb70932e92ee3f0').create(drop, function(err, res) {
          console.log("flowthings response: " + JSON.stringify(res));
});

client.transmissions.send(trans, function(err, res) {
 if (err) {
   console.log(err);
 } else {
   console.log(res.body);
   console.log('Congrats you can use our SDK!');
 }

client.transmissions.send(trans, function(err, res) {
 if (err) {
   console.log(err);
 } else {
   console.log(res.body);
   console.log('Congrats you can use our SDK!');
 }

function mainLoop() {
//  onboardLed.write(ledState ? 1 : 0);
//  ledState = !ledState;

  fs.readFile('/media/sdcard/datalog.txt', function (err, data) {
    if (err) {
	 throw err;
	} 
    else {
     // console.log("data is: " + data);
     var lines = data.toString().trim().split('\n');
     var lastLine = lines.slice(-1)[0]
     var values = lastLine.toString().split(',');
     var drop = { elems: {
	   temp: values[0],
	   light: values[1],
	   air: values[2],
	  moisture: values[3] 
         } };
	 api.drop('f55735dd35bb70932e92ee3f0').create(drop, function(err, res) {
          console.log("flowthings response: " + JSON.stringify(res));
		  
});

         });
    }
  });

    //console.log("-> " + JSON.stringify(drop));
    //console.log()
    //api.drop('f55735dd35bb70932e92ee3f0').create(drop, function(res) {
    //  console.log(res)
    //});
	
setTimeout(mainLoop, loopInterval);
}