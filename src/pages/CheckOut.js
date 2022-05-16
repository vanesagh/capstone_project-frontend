import "../styles/checkout.css"
import {createOrder} from "../api/apiOrder";
import {useState } from "react";
import { useNavigate } from "react-router-dom";

export const CheckOut = ({itemsList,setItemsList, handleRemoveItem}) =>{
    const navigate = useNavigate();
    const total = itemsList.reduce((total,product)=>{
        return total + product.price;
    },0);
    const newOrder ={
        name:{firstname:"", lastname:""},
        address:{street:"", state:"", zipcode:""},
        items:[]
    };

    const [newOrderState, setNewOrderState] = useState(newOrder);
    

    const handleAddressChange = (event) => {
        const key = event.target.name;
        const value = event.target.value;
        let address = newOrderState.address;
        address[key]=value;
        console.log(key);
        console.log(value);
        
        setNewOrderState({...newOrderState,address});
        //console.log(newOrderState);
      };

    const handleNameChange = (event) => {
        const key = event.target.name;
        const value = event.target.value;
        let name = newOrderState.name;
        name[key]=value;      
        console.log(key);
        console.log(value);
        setNewOrderState({...newOrderState,name});
        //console.log(newOrderState);
        
      };
    
    
    const handleSubmit = async (event)=>{
        
        event.preventDefault();
        const productsIDList= itemsList.map(({_id})=>_id);
        setNewOrderState({...newOrderState,"items":productsIDList});
        console.log(productsIDList);
        console.log(newOrderState);
        await createOrder(newOrderState);
        //setNewOrderState([]);
        itemsList.length=0;
        
        navigate("/",{replace:true});
        
        
        
    };
    console.log(newOrderState);


    return(
        <div className="row">
            <div className="col-50">
                <div className="container">
                <h3>Billing Address</h3>                    
                    <form onSubmit={handleSubmit}>
                        <div className="row">
                            <div className="col-50">
                                <div className="row">
                                    <div className="col-50">
                                        <label>First name</label>
                                        <input
                                            type="text"
                                            name="firstname"
                                            placeholder="John"
                                            value ={newOrderState.name.firstname}
                                            onChange={handleNameChange}           
                                        />

                                    </div>
                                    <div className="col-50">
                                    <label>Last name</label>
                                        <input
                                            type="text"
                                            name="lastname"
                                            placeholder="Doe"
                                            value ={newOrderState.name.lastname}
                                            onChange={handleNameChange}           
                                        />

                                    </div>
                                </div>
                               
                                              
                                <label>Street</label>
                                <input
                                    type="text"
                                    name="street"
                                    placeholder="542 W. 15th Street" 
                                    value ={newOrderState.address.street}
                                    onChange={handleAddressChange}           
                                />
                                <div className="row">
                                    <div className="col-50">
                                        <label>State</label>
                                        <input
                                            type="text"
                                            name="state"
                                            placeholder="NY"
                                            value ={newOrderState.address.state}
                                            onChange={handleAddressChange}
                                        />
                                    </div>
                                    <div  className="col-50">
                                        <label>Zip Code</label>
                                        <input
                                            type="text"
                                            name="zipcode"
                                            placeholder="04100"
                                            value ={newOrderState.address.zipcode}
                                            onChange={handleAddressChange}
                                        />
                                    </div>
                                </div>           
                            </div>                                                                         
                        </div>
                        <button 
                            className="btn"
                            disabled={newOrderState.name.firstname === '' || newOrderState.name.lastname === '' ||
                                      newOrderState.address.street === '' || newOrderState.address.state === '' || 
                                      newOrderState.address.zipcode === '' || itemsList.length === 0 }
                        >checkout</button>                                
                    </form>                                    
                </div>           
            </div>
            <div className="col-50">
                    <div className="container">
                        <h4>Cart</h4>
                        <table >
                        <tbody>
                            <tr>
                                <th>Item</th>
                                <th>Price</th>
                                <th>--</th>
                </tr>
                {itemsList.map((product, key) => {
                    return(
                        <tr key={key}>
                            <td>{product.name}</td>
                            <td>{product.price}</td>
                            <td><button onClick={()=>handleRemoveItem(key)}>Remove</button></td>
                        </tr>
                    );
                })}           
                <tr>
                    <th>--</th>
                    <th>Total</th>
                    <th>${total} MXP</th>
                </tr>
                </tbody>              
                        </table>
            
           
                    </div>


            </div>           
        </div>       
        
                    
    );
};