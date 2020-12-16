import CartAPI from "../../API/CartApi";
import Check from  './Check';

const Cart  = {
    getCart : async (userId) => {
        const respone = await CartAPI.getCart(userId);
        return respone;
    },
    addCart : async (data)=> {
        const respone = await CartAPI.addCart(data);
        if(Check.CheckLogin() === false){
            return null;
        }
        return respone;
    },
    updateCartItem : async (data,idCart) => {
        const respone = await CartAPI.updateCartItem(data,idCart);
        return respone;
    },
    deleteCartItem : async (idCart) => {
        const respone = await CartAPI.deleteCartItem(idCart);
        return respone;
    }
}
export default Cart;