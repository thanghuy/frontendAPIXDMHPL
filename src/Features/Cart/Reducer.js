const initalState = {
    Amount : 0,
    Total : 0
}
const CartReducer = (state = initalState,action) =>{
    switch(action.type){
        case "UPDATE_CART": {
            const dataCart = action.payload;
            var SL = 0;
            var total = 0;
            for (let i = 0; i < dataCart.length; i++) {
                SL += dataCart[i].amount;
                total += dataCart[i].price;
            }
            return {
                ...state,
                Amount : SL,
                Total : total
            };
        }
        default : return state;
    }
}
export default CartReducer;
