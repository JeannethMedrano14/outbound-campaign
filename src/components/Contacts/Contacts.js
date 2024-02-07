import React from 'react';

const TableData = ({ data }) => {
  return (
    <table>
      <thead>
        <tr>
          <th>Nombre</th>
          <th>Apellido</th>
          <th>Edad</th>
        </tr>
      </thead>
      <tbody>
        {data.map((item, index) => (
          <tr key={index}>
            <td>{item.nombre}</td>
            <td>{item.apellido}</td>
            <td>{item.edad}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

const Contacts = () => {
  const data = [
    { nombre: 'Juan', apellido: 'Pérez', edad: 25 },
    { nombre: 'María', apellido: 'García', edad: 30 },
    { nombre: 'Luis', apellido: 'López', edad: 28 },
  ];

  return (
    <div>
      <h1>Lista de usuarios</h1>
      <TableData data={data} />
      <button>Agregar usuario</button>
    </div>
  );
};

export default Contacts;
