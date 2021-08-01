const express = require ('express');
const app = express();
const morgan = require ('morgan');

//seting
app.set('port', process.env.PORT || 4000);
app.set('json spaces', 2);


//midleswares
app.use(morgan('dev'));
app.use(express.urlencoded({extended: false}));
app.use (express.json())

//rout
app.use(require ('./routes/index'));
app.use('/api/consultas', require('./routes/consultas'));

//start the server
app.listen(app.get('port'), () => {
    console.log (`server on port ${app.get('port')}`);
});




/*

// routes
app.use(require('./routes'));
app.use('/api/movies', require('./routes/movies'));
app.use('/api/users', require('./routes/users'));

// starting the server
app.listen(app.get('port'), () => {
    console.log(`Server on port ${app.get('port')}`);
});
*/