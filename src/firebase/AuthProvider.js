import {Auth} from "../firebase/firebaseConfig";
import {onAuthStateChanged,signOut} from "firebase/auth";

const login=(setUser,setLogged)=>{
    console.log('holaa');
    onAuthStateChanged(Auth, (user) => {
        if (user) {
            setUser(user);
            setLogged(true);
        } else {
            setUser(null);
            setLogged(false);
        }
    });
};

const logout =(setUser)=>{
    signOut(Auth).then(()=>{
        setUser(null);
    });
}

const authProvider={
    login,
    logout
}
export default authProvider;