// https://qiita.com/takeshisakuma/items/823d035919b89020f4e1
// Reactルーター参考ページ

import './App.css';
import React, { useEffect, useState } from 'react';
import { app } from './MyFirebase';
import { addDoc, collection, DocumentData, Firestore, getDocs, getFirestore, QuerySnapshot } from 'firebase/firestore/lite';

interface AppProps {
    children?: string;
}

const db: Firestore = getFirestore(app);

//export async function getCities(db: Firestore) {
//    const citiesCol = collection(db, 'cities');
//    const p: Promise<QuerySnapshot<DocumentData>> = getDocs(citiesCol);
//    const citySnapshot: QuerySnapshot<DocumentData> = await p;
//    const cityList = citySnapshot.docs.map(doc => doc.data());
//    return cityList;
//}

const clickButton = () => {
    const id = '003'
    const name = 'test'
    const uid = ''

    const db = getFirestore()
    const docRef = addDoc(collection(db, 'tasks'), {
      uid: uid,
      id: id,
      name: name
    })
    console.log('Document', docRef)
}

const App = (props: AppProps) => {
    const [state, setState] = useState<string>();
    useEffect(() => {
    }, [])
    return (
        <>
        <p>{state}</p>
        <button onClick={clickButton}>Firestore追加</button>
        </>
    );
}

export default App;
