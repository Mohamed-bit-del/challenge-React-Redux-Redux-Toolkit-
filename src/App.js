import './App.css';
import ProductItem from './Components/products/ProductItem';
import ShoppingCardProvider from './context/ShoppingCard';
import Navbar from './Components/header/Navbar';

function App() {
  return (
    <ShoppingCardProvider>
      <Navbar />
      <ProductItem />
    </ShoppingCardProvider>
  );
}

export default App;
