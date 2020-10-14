// recolhe.eco main
const express = require('express');
const app = express();
const properties = require('./config/properties')
const db = require('./config/database')
const port = properties.PORT || 3000;
const bodyParser = require('body-parser');

// swagger
const swaggerUi = require('swagger-ui-express');
const YAML = require('yamljs');
const swaggerDocument = YAML.load('./swagger.yaml');

// routing and parsing
var collectionPointsRoute = require('./routes/recolheecoRoutes')
var bodyParserJSON = bodyParser.json();
var bodyParserURLEncoded = bodyParser.urlencoded({extended:true});
var router = express.Router();

db();

// middleware
app.use(bodyParserJSON);
app.use(bodyParserURLEncoded);
app.use(function(req, res, next) {
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader("Access-Control-Allow-Credentials", "true");
    res.setHeader("Access-Control-Allow-Methods", "GET,HEAD,OPTIONS,POST,PUT");
    res.setHeader("Access-Control-Allow-Headers", "Access-Control-Allow-Origin,Access-Control-Allow-Headers, Origin,Accept, X-Requested-With, Content-Type, Access-Control-Request-Method, Access-Control-Request-Headers,Authorization");
    next();
 });

// swagger 
router.use('/api-docs', swaggerUi.serve);
router.get('/api-docs', swaggerUi.setup(swaggerDocument));

//configure routes
app.use('/api/v1', router);
collectionPointsRoute(router);

// health
app.get('/', (req, res) => {
    res.send("Its alive!!")
});

// 404
app.use((req, res) => {
    res.status(404).send("That's the wrong path my friend, you won't find anything there!")
});

app.listen(port, () => {
    console.log(`server listening at port ${port}`)
});
