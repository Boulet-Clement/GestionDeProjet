let express = require('express')
let app = express()
let bodyParser = require('body-parser')
let session = require('express-session')

// PORT
const port = 8080

// Moteur de template
app.set('view engine', 'ejs');


// Middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());


// CONNEXION //
app.get('/', (req, res) => {
  res.render('index');
});

app.set('/', (req, res) => {
  
});




app.listen(port)
