import axios from "axios";
import { createContext } from "react";
export let CartContext=createContext();

export function CartContextProvider(props){
    let header={token:localStorage.getItem(`userToken`)};

    function getCartItem(){
        return axios.get(`https://ecommerce.routemisr.com/api/v1/cart`,{
            headers:header
        })
        .then((response)=>response)
        .catch((err)=>err)
    }
     function UpdateCartItem(prodectId,count){
        return axios.put(`https://ecommerce.routemisr.com/api/v1/cart/${prodectId}`,{
            count:count
        },{
            headers:header
        })
        .then((response)=>response)
        .catch((err)=>err)
    }
    function DeleteCartItem(prodectId){
        return axios.delete(`https://ecommerce.routemisr.com/api/v1/cart/${prodectId}`,{
            headers:header
        })
        .then((response)=>response)
        .catch((err)=>err)
    }
    function addProdectToCart(prodctId){
        return axios.post(`https://ecommerce.routemisr.com/api/v1/cart`,{
            productId:prodctId
        },  {
            headers:header
        })
        .then((response)=>response)
        .catch((err)=>err)
    }

    
return <CartContext.Provider value={{addProdectToCart , getCartItem ,DeleteCartItem,UpdateCartItem}}>
    {props.children}
</CartContext.Provider>
}