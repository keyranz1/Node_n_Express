
import express from 'express';
import mongoose from 'mongoose';
import bodyParser from 'body-parser';
import routes  from './src/routes/routesCrm';

const app = express();
const PORT = 3000;

//mongoose connection
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost/CRMdb',{
    // useMongoClient: true, ---> not required in new version
    useNewUrlParser: true
});

//bodyPraser setup
app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());

routes(app);

//serving static file
app.use(express.static('public'));

app.get('/',(req,res) =>
    res.send(`Node and express server is running on port ${PORT}`)
);

app.listen(PORT, ()=>
    console.log(`your server is running on port ${PORT}`)
);