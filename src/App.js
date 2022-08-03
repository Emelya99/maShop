import { Routes, Route } from 'react-router-dom';

import 'normalize.css';
import './style.scss';

import Header from './components/Header';
import Footer from './components/Footer';
import Menu from './components/Menu';
import Cart from './components/Cart';
import NotFound from './components/NotFound';

function App() {
  return (
    <div className="app">
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
    </div>
  );
}

export default App;
