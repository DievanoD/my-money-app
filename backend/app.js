const express = require('express');
const bodyParser = require('body-parser');
// const path = require('path');
const cors = require('cors');

const PORT = process.env.PORT || 7000;

const indexRoutes = require('./src/routes/indexRoutes');

const app = express();

app.use(cors());

// app.set(express.static, path.join(__dirname, './src/public'));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use('/api', indexRoutes);

app.listen(PORT, () => console.log(`App running on port ${PORT} --> http://localhost:${PORT}`));
