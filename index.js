const express = require('express');
const path = require('path')
const cors = require('cors')

global.constant = require('./helper/Constant');
const app = express();
const apiRoutes = require('./routes/api/index')
const port = parseInt(process.env.PORT) || process.argv[3] || 4000;
const Psql = require('./db/dbInit')
Psql.initPSQL()

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