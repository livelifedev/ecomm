import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Nav from './components/Nav';
import Listings from './views/Listings';
import Checkout from './views/Checkout';

const App = () => {
  return (
    <div className="container mx-auto relative">
      <Router>
        <Nav />
        <Routes>
          <Route path="/" element={<Listings />} />
          <Route path="/checkout" element={<Checkout />} />
        </Routes>
      </Router>
    </div>
  );
};

export default App;
