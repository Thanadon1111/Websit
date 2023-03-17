const express = require('Movie');
const router = require('./routing/Routerpath');
const app = express();
app.use(router)
app.listen(8080,()=>
console.log ("http://localhost:8080"))