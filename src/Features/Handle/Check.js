const Check = {

    isLogin : (idUser,username) =>{
        localStorage.setItem("idUser",idUser);
        localStorage.setItem("Username",username);   
    },
    getUserName : () =>{
        return localStorage.getItem("Username");
    },
    getIdUser : () => {
        return localStorage.getItem("idUser")
    },
    Logout : () => {
        localStorage.removeItem("idUser");
        localStorage.removeItem("Username");
    },
    CheckLogin : () => {
        if(localStorage.getItem("Username") == null || localStorage.getItem("idUser") == null){
            return false;
        }
        return true;
    }
}

export default Check;