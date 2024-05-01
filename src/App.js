import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import CategoryDetail from './components/CategoryDetail';
import ProductList from './components/ProductList';
import ProductDetail from './components/ProductDetail';
import NotFound from './components/NotFound';
import { CartProvider } from './components/CartContext';
import Cart from './components/Cart';


function App() {
  return (
    <CartProvider>
      <Router>
        <div>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/categories" element={<CategoryDetail />} />
            <Route path="/categories/:categorySlug" element={<ProductList />} />
            <Route path="/products/:productId" element={<ProductDetail />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </div>
     </Router>
    </CartProvider>

  );
}

export default App;
