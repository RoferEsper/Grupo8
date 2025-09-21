const express = require("express");
const router = express.Router();

const {
    obtenerInscripciones,
    obtenerInscripcionesPorId,
    agregarInscripciones,
    eliminarInscripciones,
    editarInscripciones } = require("../Controllers/inscripciones");

router.get("/", obtenerInscripciones);
router.get("/:id", obtenerInscripcionesPorId);
router.post("/", agregarInscripciones);
router.delete("/:id", eliminarInscripciones);
router.put("/:id", editarInscripciones);

module.exports = router;