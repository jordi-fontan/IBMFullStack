const http = require('http');
const today = require('./today');
var saludo = 'Aun es de noche';
var myDate= today.getDate();
var hora= myDate.getHours;
if(hora>6 && hora<12) saludo='Buenos dias';
else if(hora>=12 && hora<18) saludo='Buenas tardes'; 
else if(hora>=18 ) saludo='Buenas noches'; 

const requestListener = function (req, res) {
  res.writeHead(200);

  res.end(`Hello,  ${saludo}`);
}

const port = 8080;
const server = http.createServer(requestListener);
console.log('server listening on port: ' + port);
server.listen(port);
