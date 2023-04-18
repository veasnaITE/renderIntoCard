
import './App.css';
import Table from './components/Table';
import { products } from './components/Constant';
function App() {
  return (
    <div className="container m-5">
      <h1 className='text-center'>Product</h1>
     <Table products={products} />
    </div>
  );
}

export default App;
