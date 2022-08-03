import React from 'react';
import { Routes, Route } from 'react-router-dom';

import 'normalize.css';
import './style.scss';

import Header from './components/Header';
import Footer from './components/Footer';
import Menu from './components/Menu';
import Cart from './components/Cart';
import NotFound from './components/NotFound';

export const MenuContext = React.createContext('');

function App() {
  const [currentPage, setCurrentPage] = React.useState(1);

  return (
    <div className="app">
      <MenuContext.Provider value={{ currentPage, setCurrentPage }}>
        <Header />
        <main className="main">
          <div className="container">
            <Routes>
              <Route path="/" element={<Menu />} />
              <Route path="/cart" element={<Cart />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </div>
        </main>
        <Footer />
      </MenuContext.Provider>
    </div>
  );
}

export default App;
