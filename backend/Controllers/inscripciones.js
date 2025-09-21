const connection = require("../Config/database");

const obtenerInscripciones = (req, res) => {
    const sql = "SELECT * FROM inscripciones";
    connection.query(sql, (err, results) => {
        if (err) {
            console.error("Error al obtener las inscripciones:", err);
            res.status(500).json({ error: "Error al obtener las inscripciones" });
            return;
        }
        res.json(results);
    });
};

const obtenerInscripcionesPorId = (req, res) => {
    const id = req.params.id;
    const sql = "SELECT * FROM inscripciones WHERE id = ?";
    connection.query(sql, [id], (err, results) => {
        if (err) {
            console.error("Error al obtener la inscripcion:", err);
            res.status(500).json({ error: "Error al obtener la inscripcion" });
            return;
        }
        if (results.length === 0) {
            res.status(404).json({ error: "Inscripcion no encontrada" });
            return;
        }
        res.json(results[0]);
    });
};

const agregarInscripciones = (req, res) => {
    const { curso_id, estudiante_id } = req.body;
    const sql = "INSERT INTO inscripciones (curso_id, estudiante_id) VALUES (?, ?)";
    connection.query(sql, [curso_id, estudiante_id], (err, results) => {
        if (err) {
            console.error("Error al agregar la inscripcion:", err);
            res.status(500).json({ error: "Error al agregar la inscripcion" });
            return;
        }
        res.status(201).json({ message: "Inscripcion agregada correctamente" });
    });
}

const eliminarInscripciones = (req, res) => {
    const id = req.params.id;
    const sql = "DELETE FROM inscripciones WHERE id = ?";
    connection.query(sql, [id], (err, results) => {
        if (err) {
            console.error("Error al eliminar la inscripcion:", err);
            res.status(500).json({ error: "Error al eliminar la inscripcion" });
            return;
        }
        if (results.affectedRows === 0) {
            res.status(404).json({ error: "Inscripcion no encontrada" });
            return;
        }
        res.json({ message: "Inscripcion eliminada correctamente" });
    });
}

const editarInscripciones = (req, res) => {
    const id = req.params.id;
    const { curso_id, estudiante_id } = req.body;
    const sql = "UPDATE inscripciones SET curso_id = ?, estudiante_id = ? WHERE id = ?";
    connection.query(sql, [curso_id, estudiante_id, id], (err, results) => {
        if (err) {
            console.error("Error al editar la inscripcion:", err);
            res.status(500).json({ error: "Error al editar la inscripcion" });
            return;
        }
        if (results.affectedRows === 0) {
            res.status(404).json({ error: "Inscripcion no encontrada" });
            return;
        }
        res.json({ message: "Inscripcion editada correctamente" });
    });
}

module.exports = {
    obtenerInscripciones,
    obtenerInscripcionesPorId,
    agregarInscripciones,
    eliminarInscripciones,
    editarInscripciones
}