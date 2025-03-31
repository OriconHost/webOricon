const express = require('express');
require('dotenv').config();
const {connectToDb} = require("./db.js");
const app = express();
const cors = require('cors');
app.use(cors());

const PORT = 3000

connectToDb();

app.use(express.json());

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});

