import { useEffect, useState } from "react";
import {Link, useParams} from "react-router-dom";
import "../styles/forms.css";


import {getProductByID} from "../api/apiProduct";

export const CreateProduct = ({onSave}) => {
const params = useParams();
const {productID} = params;

  const newProduct = {
      name: "",
      imageUrl: "",
      description: "",
      price: ""               
  };

const [newProductState,setNewProductState ] = useState(newProduct);



useEffect(()=>{
  const fetchingPostByID = async () =>{
    const res = await getProductByID(productID);
    setNewProductState(res);
  };
  if(productID){
    fetchingPostByID();
    console.log(productID);
  } 
}, [productID]);

  const handleOnChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setNewProductState({...newProductState,[name]:value});
  };

    return(
    <div>
      <div className="container">
         <form id="create-product-form" className="product-form">
             <div className="input-field">
             <label>Name</label>
             <input
               type="text"
               name="name"
               placeholder="Add name of the product" 
               value ={newProductState.name}
               onChange={handleOnChange}           
             />
             </div >
             <div className="input-field">
                <label>Image</label>
             <input
               type="text"
               name="imageUrl"
               placeholder="Add picture"
               value ={newProductState.imageUrl}
               onChange={handleOnChange}

             />
             </div>
             <div className="input-field">
                <label>Price</label>
             <input
               type="text"
               name="price"
               placeholder="Add price"  
               value ={newProductState.price}
               onChange={handleOnChange}          
             />
             </div>
             <div className="input-field">
                <label>Description</label>
             <input
               type="text"
               name="description"
               placeholder="Write a description of the product"
               value ={newProductState.description}
               onChange={handleOnChange}              
             />
             </div>
             <div className="buttons-container">
                 <Link to="/admin">
                     <button type="button">Cancel</button>
                 </Link>
                 <button type="button"
                   disabled={newProductState.name ==='' || newProductState.imageUrl==='' || newProductState.price===''}
                   onClick={()=>{
                     if (newProductState?._id) {
                       onSave(newProductState._id, newProductState);
                       
                     } else {
                      onSave(newProductState);
                       
                     }
                     
                   }}>Save</button>
             </div>
             

         </form>
     </div>

    </div>
     
    );

    
};

