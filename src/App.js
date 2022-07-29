import 'normalize.css';
import './style.scss';

import Header from './components/Header';
import Footer from './components/Footer';

function App() {
  return (
    <div className="app">
      <Header />
      <main className="main">content</main>
      <Footer />
    </div>
  );
}

export default App;
