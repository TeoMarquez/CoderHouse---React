import React from 'react';
import { Link } from 'react-router-dom';

const categories = [
  { id: 1, name: 'Sensor', slug: 'sensor' },
  { id: 2, name: 'Bluetooth', slug: 'bluetooth' },
  { id: 3, name: 'Iluminación', slug: 'iluminacion' },
  { id: 4, name: 'Automatización', slug: 'automatizacion' },
];

function CategoryDetail() {
  return (
    <div>
      <h2>Lista de Categorías</h2>
      <ul>
        {categories.map((category) => (
          <li key={category.id}>
            <Link to={`/categories/${category.slug}`}>{category.name}</Link>
          </li>
        ))}
      </ul>
      <Link to="/">Volver al Inicio</Link>
    </div>
  );
}

export default CategoryDetail;
