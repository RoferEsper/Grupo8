const express = require("express");
const cors = require("cors");
const cursosR = require("./routes/cursosR");
const estudiantesR = require("./routes/estudiantesR");
const inscripcionesR = require("./routes/inscripcionesR");

const app = express();

app.use(cors());
app.use(express.json());

app.use("/cursos", cursosR);
app.use("/estudiantes", estudiantesR);
app.use("/inscripciones", inscripcionesR);

app.get("/", (req, res) => {
    res.send("API de cursos y estudiantes");
});

app.listen(3000, () => {
    console.log("Servidor corriendo en el puerto 3000");
});