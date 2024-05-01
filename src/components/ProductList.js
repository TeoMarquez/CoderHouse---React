import React from 'react';
import { useParams, Link } from 'react-router-dom';
import products from './ProductData'; // Importar la lista de productos

function ProductList() {
  const { categorySlug } = useParams();

  const filteredProducts = products.filter((product) => product.category.toLowerCase() === categorySlug);

  if (filteredProducts.length === 0) {
    return (
      <div>
        <h2>No hay productos en la categoría {categorySlug}</h2>
        <Link to="/categories">Volver a categorías</Link>
      </div>
    );
  }
  
  return (
    <div>
      <h2>Productos en {categorySlug}</h2>
      <ul>
        {filteredProducts.map((product) => (
          <li key={product.id}>
            {/* Enlace a ProductDetail con el ID del producto */}
            <Link to={`/products/${product.id}`}>{product.name} - ${product.price.toFixed(2)}</Link>
          </li>
        ))}
      </ul>
      <Link to="/categories">Volver a categorias</Link>
    </div>
  );
}

export default ProductList;