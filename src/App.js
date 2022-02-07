import { useState } from "react";
import AddProduct from "./components/AddProduct/AddProduct";
import Products from "./components/Products/Products";
import Data from './components/Data/data.json'


function App() {
  const [product, setProducts] = useState(Data)

  const addProductHandler = (product) => {
    setProducts((prevProduct) => {
      return [product, ...prevProduct]
    })
  } 
 

  return (
    <div className="App">
      <AddProduct addProductHandler={addProductHandler} />
      <Products product={product}/>
    </div>
  );
}

export default App;
