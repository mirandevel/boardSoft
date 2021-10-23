import React from 'react';
import { signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import {Auth} from "../firebase/firebaseConfig";

function HomePage(props) {

    function login() {
        const provider = new GoogleAuthProvider();
        signInWithPopup(Auth, provider)
            .then((result) => {
                console.log(result)
            }).catch((error) => {
            console.log(error.message);
        });

    }
    return (
        <div>
            <button className={'bg-red-500'} onClick={login}>Google</button>
        </div>
    );
}

export default HomePage;