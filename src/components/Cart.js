import React from 'react';
import { Link } from 'react-router-dom';
import { useCart } from './CartContext';

const Cart = () => {
  const { cartItems, removeItemFromCart } = useCart();

  const handleRemoveItem = (productId) => {
    removeItemFromCart(productId);
  };

  return (
    <div>
      <h2>Carrito de Compras</h2>
      {cartItems.length === 0 ? (
        <p>El carrito está vacío.</p>
      ) : (
        <ul>
          {cartItems.map((item) => (
            <li key={item.product.id}>
              {/* Utiliza Link para redirigir al detalle del producto al hacer clic */}
              <Link to={`/products/${item.product.id}`}>
                <p>{item.product.name} - Cantidad: {item.quantity}</p>
              </Link>
              <button onClick={() => handleRemoveItem(item.product.id)}>Eliminar</button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Cart;