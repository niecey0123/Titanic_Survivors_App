const express = require('express');
const cors = require('cors'); 
const PORT = process.env.PORT || 3000

const app = express();
const logger = require('morgan');
const bodyParser = require('body-parser');

app.use(cors())
app.use(bodyParser.json())

app.use(logger('dev'));

app.get('/', async (req, res) => {
  try {
    res.send({ hello : "world" })
  } catch (e) {
    res.status(e.status).json({ msg: e.status })
  }
});

app.listen(PORT, () => console.log(`Example app listening on port ${PORT}!`
))