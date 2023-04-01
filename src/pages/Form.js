import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';

function Form() {
  const [nombre, setNombre] = useState('');
  const [numero, setNumero] = useState('');
  const [correo, setCorreo] = useState('');
  const [edad, setEdad] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Nombre:', nombre);
    console.log('Número:', numero);
    console.log('Correo:', correo);
    console.log('Edad:', edad);
    // Aquí puedes enviar los datos del formulario al servidor o hacer otras operaciones.
  };

  return (
    <div className='Form'>
      
    <form onSubmit={handleSubmit}>
      <label>
        Nombre:
        <input type="text" value={nombre} onChange={(e) => setNombre(e.target.value)} />
      </label>
      <br />
      <label>
        Número:
        <input type="text" value={numero} onChange={(e) => setNumero(e.target.value)} />
      </label>
      <br />
      <label>
        Correo:
        <input type="email" value={correo} onChange={(e) => setCorreo(e.target.value)} />
      </label>
      <br />
      <label>
        Edad:
        <input type="number" value={edad} onChange={(e) => setEdad(e.target.value)} />
      </label>
      <br />
      <button  type="submit"> enviar</button>
    </form>
    </div>
  );
}

export default Form