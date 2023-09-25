const express = require('express');
const app = express();
require('../db/conn.js');
const PORT = process.env.PORT || 5000;
const Router = require('../routes/index.js');
const cors = require('cors');

app.use(cors());

app.use(express.json());
app.use('/api', Router);

app.listen(PORT, () => console.log(`Server is running on ${PORT}`));