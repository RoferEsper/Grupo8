const express = require("express");
const router = express.Router();

const {
    obtenerCursos,
    obtenerCursoPorId,
    agregarCurso,
    eliminarCurso,
    editarCurso } = require("../Controllers/cursos");

router.get("/", obtenerCursos);
router.get("/:id", obtenerCursoPorId);
router.post("/", agregarCurso);
router.delete("/:id", eliminarCurso);
router.put("/:id", editarCurso);

module.exports = router;