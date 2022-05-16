import './App.css';
import NavBarAdmin from './components/NavBarAdmin';
import NavBarCustomer from './components/NavBarCustomer';
import {AdminPage} from './pages/AdminPage';
import { CustomerPage } from './pages/CustomerPage';
import { CheckOut } from './pages/CheckOut';
import { Route, Routes, useNavigate,useLocation } from 'react-router-dom';
import {CreateProduct} from './pages/CreateProduct';
import {createProduct,getAllProducts,deleteProduct,updateProduct} from "./api/apiProduct"
import { useEffect, useState } from 'react';


function App() {
  const navigate = useNavigate();
  const [allProducts, setAllProducts] = useState([]);
  const [itemsList, setItemsList] = useState([]);
  const location = useLocation();
  console.log(location.pathname);

  const fetchProducts = async () =>{
    const res = await getAllProducts();
    setAllProducts(res);
  }
  useEffect(()=>{
    fetchProducts();
  }
  ,[]);

  const handleOnSave =async (product) =>{
    const res =await createProduct(product);
    setAllProducts([...allProducts,product]);
    navigate("/admin",{replace:true})
  };

  const handleOnEdit = async(productID, product) =>{
    const res = await updateProduct(productID,product);
    const copyOfProducts = allProducts.map((item)=>item._id===res._id ? product : item);
    setAllProducts(copyOfProducts);
    navigate("/admin", {replace: true});
    
  };


  const onDelete = async (id) =>{
    const res = await deleteProduct(id);
    const copyOfProducts = allProducts.filter((item)=> item._id !== id);
    setAllProducts(copyOfProducts);
    navigate("/admin",{replace:true});   
  };

  const handleAddItem = (product) => {
    const items = itemsList;
  setItemsList([...items, product]);
  };

  const handleRemoveItem = (productIndex) => {
    const items = itemsList;
    console.log(productIndex);
    if (items.length > 0) {
      setItemsList(items.filter((item,index) => index !== productIndex));
      }
  };


  
  return (
    <div className="App">
      {(location.pathname === "/" || location.pathname ==="/checkout")? 
      <NavBarCustomer orderSize = {itemsList.length}/>:<NavBarAdmin/>}

      <Routes>
        <Route
          path="/"
          element={
            <CustomerPage
              products = {allProducts}
              handleAddItem = {handleAddItem}
              handleRemoveItem = {handleRemoveItem}
              itemsList = {itemsList}
              setItemsList={setItemsList}
            
            />}   

        />
        <Route
          path="checkout"
          element={<CheckOut
                      itemsList={itemsList}
                      handleRemoveItem={handleRemoveItem}
                      onSave={handleOnSave}
          />}
        />       
        <Route
          path="/admin"
          element={<AdminPage
          products={allProducts}
          onDelete={onDelete}
          onEdit={handleOnEdit}
          />
        }         
      />
        <Route
          path="create-new-product"
          element={<CreateProduct onSave={handleOnSave} />}
        />
        <Route
          path="edit-product/:productID"
          element={
            <CreateProduct onSave={handleOnEdit} />
          }
        />

      </Routes>
      
      
      
      
      
       
    </div>
  );
}

export default App;
