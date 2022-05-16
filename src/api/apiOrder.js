const URL_SERVER = "http://localhost:8000/";

export const getAllProducts = async () => {
  try {
    const res = await fetch(URL_SERVER);
    return await res.json();
  } catch (error) {
      console.log(error);
  }
};

export const getProductByID = async (id) =>{
  try {
    const res = await fetch(URL_SERVER + "product/" +id );
    return await res.json();
    
  } catch (error) {
    console.log(error);
    
  }
};




export const createOrder = async (order)=>{
  try {
    console.log(order)
    const res = await fetch(URL_SERVER + "checkout",{
      method: "POST",
      headers: { "Content-type": "application/json" },
      body: JSON.stringify(order),
    });
    return await res.json(order);
  } catch (error) {
    console.log(error);
    console.log(order);
  }
};

