require("dotenv").config();
const express = require('express')
const cors = require('cors')
const data = require('./routes/data')

const app = express()

//configrations
var corOptions = {
    origin: 'http://192.456.0.1',
}

//middle ware;
app.use(cors(corOptions))
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.use('', data);
app.listen(process.env.PORT || 7000, () => {
    console.log(`Server is running on port ${process.env.PORT || 7000}`);
})