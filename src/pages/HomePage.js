import React, {useEffect, useState} from 'react';
import { signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import {Auth,db} from "../firebase/firebaseConfig";
import {collection, getDocs, doc, setDoc, addDoc, onSnapshot, query, where} from "firebase/firestore";

function HomePage(props) {

    const [users,setUsers]=useState([]);

    function getUsers(){
        const q = query(collection(db, "user"));
        const unsubscribe = onSnapshot(q, (querySnapshot) => {
            const items = [];
            querySnapshot.forEach((doc) => {
                items.push(doc.data());
            });
            setUsers(items);
            console.log(users);
        });

    }
    function addData() {
        const docRef =addDoc(collection(db, "cities"), {
            name: "Tokyo",
            country: "Japan"
        }).then(result => {

        });
        console.log("Document written with ID: ", docRef.id);
    }

    useEffect(()=>{
        getUsers();
    },[]);

    function login() {
        const provider = new GoogleAuthProvider();
        signInWithPopup(Auth, provider)
            .then((result) => {
                console.log(result)
            }).catch((error) => {
            console.log(error.message);
        });

    }
    const listUsers = users.map((user) =>
        <p>{user.name}</p>
    );

    return (
        <div>
            {listUsers}
            <button className={'bg-red-500 block my-5'} onClick={login}>Google</button>
            <button className={'bg-red-500'} onClick={addData}>add</button>
        </div>
    );
}

export default HomePage;