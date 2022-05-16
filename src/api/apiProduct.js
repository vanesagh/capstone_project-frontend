const URL_SERVER = "http://localhost:8000/admin/";
export const createProduct = async (post) => {
    try {
      const res = await fetch(URL_SERVER, {
        method: "POST",
        headers: { "Content-type": "application/json" },
        body: JSON.stringify(post),
      });
      return await res.json();
    } catch (error) {
      console.log(error);
    }
  };

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


export const deleteProduct = async (id)=>{
  console.log(id);
  try {
    const res = await fetch(URL_SERVER + "product/"+ id, {
      method: "DELETE",
      headers: {"Content-type": "application/json"},
    });
      return await res.json();
  } catch (error) {
    console.log(error);
      
  }
};

export const updateProduct = async (id, product)=>{
  try {
    
    const res = await fetch(URL_SERVER + "product/"+ id,{
      method: "PUT",
      headers: { "Content-type": "application/json" },
      body: JSON.stringify(product),
    });
    return await res.json();
  } catch (error) {
    console.log(error);
  }
};

