import React, { useState, useEffect } from 'react';
import { useParams, Navigate, Link } from 'react-router-dom';
import { useCart } from './CartContext';
import products from './ProductData';

function ProductDetail() {
  const { productId } = useParams();
  const { addItemToCart } = useCart();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [productCategory, setProductCategory] = useState(null); // Estado para almacenar la categoría del producto

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        // Simular retardo de carga de datos (2 segundos)
        await new Promise((resolve) => setTimeout(resolve, 2000));

        const foundProduct = products.find((p) => p.id === parseInt(productId, 10));
        
        if (foundProduct) {
          setProduct(foundProduct);
          setProductCategory(foundProduct.category.toLowerCase()); // Almacena la categoría en minúsculas
        } else {
          setProduct(null); // Producto no encontrado
        }
      } catch (error) {
        console.error('Error al cargar el producto:', error);
      } finally {
        setLoading(false); // Finaliza la carga
      }
    };

    fetchProduct();
  }, [productId]);

  if (loading) {
    return <div>Cargando producto...</div>;
  }

  if (!product) {
    return <Navigate to="/404" />; // Redirige a la página NotFound si el producto no se encuentra
  }

  const handleAddToCart = () => {
    addItemToCart(product, 1); // Agrega el producto al carrito con una cantidad de 1
  };

  // Construye la URL para la categoría del producto seleccionado en minúsculas
  const categoryUrl = `/categories/${productCategory}`;

  return (
    <div>
      <h2>{product.name}</h2>
      <p>Categoría: {product.category}</p>
      <p>Descripción: {product.description}</p>
      <p>Precio: ${product.price.toFixed(2)}</p>
      <button onClick={handleAddToCart}>Agregar al Carrito</button>
      <Link to="/cart">Ver Carrito</Link>
      <div>
        {/* Enlace dinámico para volver a la lista de productos de la categoría */}
        <Link to={categoryUrl}>Volver a la Lista de Productos</Link>
      </div>
    </div>
  );
}

export default ProductDetail;
