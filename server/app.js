// const express = require('express');
// const router = require('./routes/routes');
// const cors = require("cors");

// const app = express();

// const PORT = process.env.PORT || 3000;

// //middleware
// app.use(express.json());
// app.use(cors());

// app.use('/', router);

// if (process.env.NODE_ENV !== "test") { 
//     app.listen(PORT, () => {
//     console.log(`Escuchando por Puerto ${PORT}`);
// })
// }


// module.exports = app


const express = require('express');
const router = require('./routes/routes');
const cors = require("cors");

const app = express();

const PORT = process.env.PORT || 3000;

// Middleware
app.use(express.json());
app.use(cors());

app.use('/', router);

// Función para iniciar el servidor
function startServer() {
  app.listen(PORT, () => {
    console.log(`Servidor en ejecución en el puerto ${PORT}`);
  });
}

// Verificar si el módulo se está ejecutando directamente o se está importando
if (require.main === module) {
  startServer();
}

module.exports = {
  app,
  startServer
};
