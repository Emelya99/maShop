import { Routes, Route } from 'react-router-dom';

import 'normalize.css';
import './style.scss';

import MainLayout from './layouts/MainLayout';
import Home from './pages/Home';
import CartPage from './pages/CartPage';
import SingleProductPage from './pages/SingleProductPage';
import NotFoundPage from './pages/NotFoundPage';

function App() {
  return (
    <Routes>
      <Route path="/" element={<MainLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/cart" element={<CartPage />} />
        <Route path="/product/:id" element={<SingleProductPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Route>
    </Routes>
  );
}

export default App;
