const express = require('express');
const router = require('./routes/routes');
const cors = require("cors");

const app = express();

const PORT = process.env.PORT || 3000;

//middleware
app.use(express.json());
app.use(cors());

app.use('/', router);

if (process.env.NODE_ENV !== "test") { 
    app.listen(PORT, () => {
    console.log(`Escuchando por Puerto ${PORT}`);
})
}


module.exports = app