"use strict";
// template for my solutions
// simple, basic Node server
// https://openclassrooms.com/courses/ultra-fast-applications-using-node-js/creating-your-first-app-with-node-js

// ################## BEGIN solution

// type solution here

// ################## END solution
// ############ BEGIN - SERVER SETTINGS ############
var ye = 'Hello Node!';
var http = require('http');
var server = http.createServer((req,res)=>{
  res.writeHead(200, {"Content-Type": "text/html"});
  res.write(
    '<!DOCTYPE html><html><body>'+
    '<p>'+ye+'</p>'+
    '</body></html>'
  );
  res.end();
});
server.listen(3001);
// ############ END - SERVER SETTINGS ############
