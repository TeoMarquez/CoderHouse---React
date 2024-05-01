import React from 'react';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <div>
      <h1>Bienvenido a Mi Tienda</h1>
      <p>Explora nuestras categorías y productos.</p>
      <Link to="/categories">Ver Categorías</Link>
    </div>
  );
}

export default Home;
