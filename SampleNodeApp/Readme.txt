https://docs.datadoghq.com/tracing/trace_collection/dd_libraries/nodejs/?tab=containers

#install all the node_modules
npm install 
npm install express
npm install dd-trace --save

#add the tracer in server.js
const tracer = require('dd-trace').init();

#run the application
node --require dd-trace/init server.js
