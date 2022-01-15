import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Header from './container/Header'
import ProductDetail from './container/ProductDetail'
import ProductListing from './container/ProductListing'

function App() {
  return (

  <Router>
    <Header />
    <Routes>
      <Route exact path="/"  element={<ProductListing />} />
      <Route exact path="/product/:productId"  element={<ProductDetail />} />
      <Route> 404 not found</Route>
    </Routes>
  </Router>
   
  );
}

export default App;
