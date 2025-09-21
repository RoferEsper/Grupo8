const connection = require("../Config/database");

const obtenerCursos = (req, res) => {
    const sql = "SELECT * FROM cursos";
    connection.query(sql, (err, results) => {
        if (err) {
            console.error("Error al obtener los cursos:", err);
            res.status(500).json({ error: "Error al obtener los cursos" });
            return;
        }
        res.json(results);
    });
};

const obtenerCursoPorId = (req, res) => {
    const id = req.params.id;
    const sql = "SELECT * FROM cursos WHERE id = ?";
    connection.query(sql, [id], (err, results) => {
        if (err) {
            console.error("Error al obtener el curso:", err);
            res.status(500).json({ error: "Error al obtener el curso" });
            return;
        }
        if (results.length === 0) {
            res.status(404).json({ error: "Curso no encontrado" });
            return;
        }
        res.json(results[0]);
    });
};

const agregarCurso = (req, res) => {
    const { nombre, descripcion } = req.body;
    const sql = "INSERT INTO cursos (nombre, descripcion) VALUES (?, ?)";
    connection.query(sql, [nombre, descripcion], (err, results) => {
        if (err) {
            console.error("Error al agregar el curso:", err);
            res.status(500).json({ error: "Error al agregar el curso" });
            return;
        }
        res.status(201).json({ message: "Curso agregado correctamente" });
    });
};

const eliminarCurso = (req, res) => {
    const id = req.params.id;
    const sql = "DELETE FROM cursos WHERE id = ?";
    connection.query(sql, [id], (err, results) => {
        if (err) {
            console.error("Error al eliminar el curso:", err);
            res.status(500).json({ error: "Error al eliminar el curso" });
            return;
        }
        if (results.affectedRows === 0) {
            res.status(404).json({ error: "Curso no encontrado" });
            return;
        }
        res.json({ message: "Curso eliminado correctamente" });
    });
};

const editarCurso = (req, res) => {
    const id = req.params.id;
    const { nombre, descripcion } = req.body;
    const sql = "UPDATE cursos SET nombre = ?, descripcion = ? WHERE id = ?";
    connection.query(sql, [nombre, descripcion, id], (err, results) => {
        if (err) {
            console.error("Error al editar el curso:", err);
            res.status(500).json({ error: "Error al editar el curso" });
            return;
        }
        if (results.affectedRows === 0) {
            res.status(404).json({ error: "Curso no encontrado" });
            return;
        }
        res.json({ message: "Curso editado correctamente" });
    });
};

module.exports = {
    obtenerCursos,
    obtenerCursoPorId,
    agregarCurso,
    eliminarCurso,
    editarCurso,
};