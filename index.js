const express = require('express');
const path = require('path')
const cors = require('cors')

global.constant = require('./helper/Constant');
const app = express();
const apiRoutes = require('./routes/api/index')
const port = parseInt(process.env.PORT) || process.argv[3] || 4000;
const sequelize = require('./db/dbInit')
// Psql.initPSQL()
// Import the sequelize object on which 
// we have defined model. 
// const sequelize = require('./db/database') 
	
// Import the user model we have defined 
require('./db/models/index').createAssociation
	
// Create all the table defined using 
// sequelize in Database 
	
// Sync all models that are not 
// already in the database 
// Suggested code may be subject to a license. Learn more: ~LicenseLog:4204620734.
sequelize.authenticate().then(() => {
  console.log('Connection has been established successfully.');
}).catch(err => {
  console.error('Unable to connect to the database:', err);
});
sequelize.sync().then(() => {
  console.log('All models were synchronized successfully.');
}).catch(err => {
  console.error('Error synchronizing models:', err);
});
	
// Force sync all models 
// It will drop the table first 
// and re-create it afterwards 
// sequelize.sync({force:true})

  app.use(express.static(path.join(__dirname, 'public')));
  app.use('/api', apiRoutes)
  app.use(express.json());
  app.use(cors());


// Suggested code may be subject to a license. Learn more: ~LicenseLog:1092855016.


app.use((req, res, next) => {
    res.session = req.session;
    next();
});

app.get("/", (req, res) => {
  res.json({ message: 'Hello, world!' });
});

// app.get('/', (req, res) => {
//   res.render('index');
// });

// app.get('/api', (req, res) => {
//   res.json({"msg": "Hello world"});
// });

app.listen(port, () => {
  console.log(`Listening on http://localhost:${port}`);
})