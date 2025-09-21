const express = require("express");
const router = express.Router();

const {
    obtenerEstudiantes,
    obtenerEstudiantePorId,
    agregarEstudiante,
    eliminarEstudiante,
    editarEstudiante } = require("../Controllers/estudiantes");

router.get("/", obtenerEstudiantes);
router.get("/:id", obtenerEstudiantePorId);
router.post("/", agregarEstudiante);
router.delete("/:id", eliminarEstudiante);
router.put("/:id", editarEstudiante);

module.exports = router;