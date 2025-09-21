const connection = require("../Config/database");

const obtenerEstudiantes = (req, res) => {
    const sql = "SELECT * FROM estudiantes";
    connection.query(sql, (err, results) => {
        if (err) {
            console.error("Error al obtener los estudiantes:", err);
            res.status(500).json({ error: "Error al obtener los estudiantes" });
            return;
        }
        res.json(results);
    });
};

const obtenerEstudiantePorId = (req, res) => {
    const id = req.params.id;
    const sql = "SELECT * FROM estudiantes WHERE id = ?";
    connection.query(sql, [id], (err, results) => {
        if (err) {
            console.error("Error al obtener el estudiante:", err);
            res.status(500).json({ error: "Error al obtener el estudiante" });
            return;
        }
        if (results.length === 0) {
            res.status(404).json({ error: "Estudiante no encontrado" });
            return;
        }
        res.json(results[0]);
    });
};

const agregarEstudiante = (req, res) => {
    const { nombre, apellido, email } = req.body;
    const sql = "INSERT INTO estudiantes (nombre, apellido, email) VALUES (?, ?, ?)";
    connection.query(sql, [nombre, apellido, email], (err, results) => {
        if (err) {
            console.error("Error al agregar el estudiante:", err);
            res.status(500).json({ error: "Error al agregar el estudiante" });
            return;
        }
        res.status(201).json({ message: "Estudiante agregado correctamente" });
    });
};

const eliminarEstudiante = (req, res) => {
    const id = req.params.id;
    const sql = "DELETE FROM estudiantes WHERE id = ?";
    connection.query(sql, [id], (err, results) => {
        if (err) {
            console.error("Error al eliminar el estudiante:", err);
            res.status(500).json({ error: "Error al eliminar el estudiante" });
            return;
        }
        if (results.affectedRows === 0) {
            res.status(404).json({ error: "Estudiante no encontrado" });
            return;
        }
        res.json({ message: "Estudiante eliminado correctamente" });
    });
};

const editarEstudiante = (req, res) => {
    const id = req.params.id;
    const { nombre, apellido, email } = req.body;
    const sql = "UPDATE estudiantes SET nombre = ?, apellido = ?, email = ? WHERE id = ?";
    connection.query(sql, [nombre, apellido, email, id], (err, results) => {
        if (err) {
            console.error("Error al editar el estudiante:", err);
            res.status(500).json({ error: "Error al editar el estudiante" });
            return;
        }
        if (results.affectedRows === 0) {
            res.status(404).json({ error: "Estudiante no encontrado" });
            return;
        }
        res.json({ message: "Estudiante editado correctamente" });
    });
};

module.exports = {
    obtenerEstudiantes,
    obtenerEstudiantePorId,
    agregarEstudiante,
    eliminarEstudiante,
    editarEstudiante,
};