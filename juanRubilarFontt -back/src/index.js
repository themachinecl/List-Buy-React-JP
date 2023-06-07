var express = require("express");
var cors = require('cors')
const routers   = require('../route/route');


var app = express();
app.use(cors())


function handleErrors(err, req, res, next) {
    res.status(404).send('An internal server error occurred');
  };


app.use('/api', routers);
app.use(handleErrors)


const PORT = process.env.MOCKS_PORT || 3001;
app.listen(PORT, () => console.log("Listening on http://localhost:" + PORT));


