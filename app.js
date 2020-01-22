import express from 'express'
import bodyParser from 'body-parser'
//recipe routes
import recipe from './api/recipes/recipe.route';
import spending from './api/spending/spending.route';


const app = express()
// Set up mongoose connection
const mongoose = require('mongoose');
let dev_db_url = 'mongodb://localhost:27017/safe-pocket';
const mongoDB = process.env.MONGODB_URI || dev_db_url;
mongoose.connect(mongoDB,  { useNewUrlParser: true , useUnifiedTopology: true });
mongoose.Promise = global.Promise;
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));

// app.send("/", )
const port = 9000
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

app.use('/recipes', recipe);
// app.use('/spending', spending);

app.listen(port, () => {
    console.log(`App is running on port ${port}`)
})