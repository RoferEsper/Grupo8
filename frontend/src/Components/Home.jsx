import axios from 'axios';
import { useEffect, useState } from 'react';
import { ENDPOINTS, URL_cursos, URL_estudiantes, URL_inscripciones } from '../Endpoints/Endpoint';
import "../components/CSS/Home.css";
const Home = () => {
  const [cursos, setCursos] = useState([]);
  const [estudiantes, setEstudiantes] = useState([]);
  const [inscripciones, setInscripciones] = useState([]);

  useEffect(() => {
    const getCursos = async () => {
      try {
        const response = await axios.get(ENDPOINTS + URL_cursos);
        setCursos(response.data);
      } catch (error) {
        console.error("Error al obtener cursos:", error);
      }
    };

    const getEstudiantes = async () => {
      try {
        const response = await axios.get(ENDPOINTS + URL_estudiantes);
        setEstudiantes(response.data);
      } catch (error) {
        console.error("Error al obtener estudiantes:", error);
      }
    };

    const getInscripciones = async () => {
      try {
        const response = await axios.get(ENDPOINTS + URL_inscripciones);
        setInscripciones(response.data);
      } catch (error) {
        console.error("Error al obtener inscripciones:", error);
      }
    };

    getCursos();
    getEstudiantes();
    getInscripciones();
  }, []);

  return (
    <div>
      <h1>Instituto</h1>

      <h2>Cursos</h2>
      <table>
        <thead>
          <tr>
            <th>Id</th>
            <th>Nombre</th>
            <th>Descripción</th>
          </tr>
        </thead>
        <tbody>
          {cursos.map((curso) => (
            <tr key={curso.id_curso}>
              <td>{curso.id_curso}</td>
              <td>{curso.nombre}</td>
              <td>{curso.descripcion}</td>
            </tr>
          ))}
        </tbody>
      </table>

      <h2>Estudiantes</h2>
      <table>
        <thead>
          <tr>
            <th>Id</th>
            <th>Nombre</th>
            <th>Apellido</th>
          </tr>
        </thead>
        <tbody>
          {estudiantes.map((estudiante) => (
            <tr key={estudiante.id_estudiante}>
              <td>{estudiante.id_estudiante}</td>
              <td>{estudiante.nombre}</td>
              <td>{estudiante.email}</td>
            </tr>
          ))}
        </tbody>
      </table>

      <h2>Inscripciones</h2>
      <table>
        <thead>
          <tr>
            <th>Id</th>
            <th>Id Estudiante</th>
            <th>Id Curso</th>
            <th>Fecha de inscripcion</th>
          </tr>
        </thead>
        <tbody>
          {inscripciones.map((inscripcion) => (
            <tr key={inscripcion.id_inscripcion}>
              <td>{inscripcion.id_inscripcion}</td>
              <td>{inscripcion.id_estudiante}</td>
              <td>{inscripcion.id_curso}</td>
              <td>{inscripcion.fecha_inscripcion.slice(0,10)}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Home;