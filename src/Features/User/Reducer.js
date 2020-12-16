const initalState = {
    user : {},
    isLogin : false
}

const userReducer = (state = initalState,action) =>{
    switch(action.type){
        case "SAVE_USER": {
            const newUser = action.payload;
            
            return {
                ...state,
                user : newUser.data,
                isLogin : newUser.status
            };
        }
        default : return state;
    }
}
export default userReducer;