import React, {useState} from 'react';
import {db} from "../firebase/firebaseConfig";
import {Timestamp,collection,deleteDoc, getDocs, doc, setDoc, addDoc, onSnapshot, query, where,orderBy,updateDoc, arrayUnion, arrayRemove } from "firebase/firestore";

let unsubscribe;
const initBoards=(setBoards,email)=>{
    const q = query(collection(db, "boards"),where("participantsEmail", "array-contains",email),orderBy("timeStamp", "desc"));
    unsubscribe=onSnapshot(q, (querySnapshot) => {
        const items = [];
        querySnapshot.forEach((doc) => {
            items.push({...doc.data(),id:doc.id});
        });
        setBoards(items);
        console.log(items);
    });
};

const stop=()=>{
    return unsubscribe();
}

const createBoards=(name,user)=>{
    addDoc(collection(db, "boards"), {
        name:name,
        ownerId: user.uid,
        participantsEmail: [user.email],
        timeStamp: Timestamp.fromMillis(
            Date.parse((new Date()).toISOString()))
    });
};

const getBoard=(setBoard,boardId)=>{
    onSnapshot(doc(db, "boards", boardId), (doc) => {
        setBoard(doc.data());
        console.log(doc.data())
    });
}

const deleteBoard=(documentId)=>{
    return deleteDoc(doc(db, "boards", documentId));
}

const addParticipant=(email, boardId)=>{
    updateDoc(doc(db, "boards", boardId), {
        participantsEmail: arrayUnion(email)
    });
}
const removeParticipant=(email, boardId)=>{
    updateDoc(doc(db, "boards", boardId), {
        participantsEmail: arrayRemove(email)
    });
}

const DB ={
    initBoards,
    createBoards,
    getBoard,
    deleteBoard,
    stop,
    addParticipant,
    removeParticipant,
}


export default DB;