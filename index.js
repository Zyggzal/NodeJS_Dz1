const express = require('express');
const app = express();
const path = require('path');
const exphbs = require('express-handlebars');

var bodyParser = require('body-parser')
app.use(bodyParser.urlencoded({ extended: false }));

const homeRouter = require('./routes/indexRouter');
const calcRouter = require('./routes/calcRouter');
const studentsRouter = require('./routes/studentsRouter');
const groupsRouter = require('./routes/groupsRouter');

const hbs = exphbs.create({
    extname: 'hbs',
    defaultLayout: 'main',
    layoutsDir: path.join(__dirname, 'views', 'layouts'),
    partialsDir: path.join(__dirname, 'views', 'layouts', 'partials')
})

app.engine('hbs', hbs.engine)
app.set('view engine', 'hbs')
app.set('views', 'views');

app.use('/', homeRouter)
app.use('/calc', calcRouter)
app.use('/students', studentsRouter)
app.use('/groups', groupsRouter)

const port  = process.env.PORT || 3000;
app.listen(port, ()=>{
    console.log('The server is running')
});