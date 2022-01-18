// https://qiita.com/takeshisakuma/items/823d035919b89020f4e1
// Reactルーター参考ページ

import './App.css';
import React, { ChangeEvent, ChangeEventHandler, Props, useEffect, useState } from 'react';
import { app } from './MyFirebase';
import { addDoc, collection, DocumentData, Firestore, getDocs, getFirestore, QuerySnapshot } from 'firebase/firestore/lite';

interface AppProps {
    children?: string;
}


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
    const db: Firestore = getFirestore(app);
    const docRef = addDoc(collection(db, 'tasks'), {
      uid: uid,
      id: id,
      name: name
    })
    console.log('Document', docRef)
}

const App: React.FC<AppProps> = (props: AppProps) => {
    const [state, setState] = useState<string>();
    const initText = "入力してください";
    const [text, setText] = useState<string>(initText);

    type rt = ReturnType<ChangeEventHandler<HTMLInputElement>>;
    //onChangeイベントハンドラの型から戻り値を取得できるはの最高！！
    //だけど、onChangeの型を調べなければならないのが惜しい！

    //type rt2 = ReturnType<typeof onChange>;
    //イベントハンドラの名前から直接戻り値が取得できれば最高....！

    type para = Parameters<ChangeEventHandler<HTMLInputElement>>;

    /*
    //onChangeの型
    const ChangeEvent: ChangeEventHandler<HTMLInputEvent> = (e: ChangeEvent<HTMLInputElement>): void => {
        // 処理
    }
    */
    const changeEvent: ChangeEventHandler<HTMLInputElement> = (e: para[0]): rt => {
        //if (e === undefined) return;
        setText(() => e?.target.value)
    }
    useEffect(() => {
    }, [])
    return (
        <>
        <p>text:{text}</p>
        <button onClick={clickButton}>Firestore追加</button>
        <p><input value={text} type="text" onChange={changeEvent}/></p>
        </>
    );
}

export default App;
