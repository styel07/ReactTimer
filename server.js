var express = require('express');

// create out app
var app = express();
const PORT = process.env.PORT || 3000;

// static specifies the folder name that exposes the main foler
app.use(function(req, res, next) {
  if (req.headers['x-forwarded-proto'] === 'https') {
    res.redirect('http://' + req.hostname + req.url);
  } else {
    next();
  }
})

app.use(express.static('public'));

app.listen(PORT, function() {
  console.log('server is up on port '+PORT);
});
