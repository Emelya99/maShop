import 'normalize.css';
import './style.scss';

import Header from './components/Header';
import Footer from './components/Footer';
import Menu from './components/Menu';

function App() {
  return (
    <div className="app">
      <Header />
      <main className="main">
        <div className="container">
          <Menu />
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default App;
