// https://qiita.com/takeshisakuma/items/823d035919b89020f4e1
// Reactルーター参考ページ

import './App.css';
import React, { ChangeEventHandler, MouseEventHandler, useEffect, useState } from 'react';
import { app } from './MyFirebase';
import { addDoc, collection, DocumentData, Firestore, getDocs, getFirestore, QuerySnapshot, snapshotEqual } from 'firebase/firestore/lite';

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
type onClickType = MouseEventHandler<HTMLButtonElement>;
type para = Parameters<onClickType>;
type rt = ReturnType<onClickType>;
const clickButtonEvent: onClickType = (e: para[0]): rt => {
    const uid = '';
    const id = '003';
    const name = 'test';
    const db: Firestore = getFirestore(app);
    const docRef = addDoc(collection(db, 'tasks'), {
      uid: uid,
      id: id,
      name: name
    });
    console.log('Document', docRef);
}

const App: React.FC<AppProps> = (props: AppProps) => {
    const [state, setState] = useState<string>();
    const initText = "入力してください";
    const [text, setText] = useState<string>(initText);

    type onClickType = ChangeEventHandler<HTMLInputElement>
    // onClickイベントハンドラの型
    type rt = ReturnType<onClickType>;
    //onChangeイベントハンドラの型から戻り値を取得できるはの良い！
    //だけど、onChangeの型をIDEの支援で調べなけれな使えないのが惜しい...

    //type rt2 = ReturnType<typeof onChange>;
    //イベントハンドラの名前から直接戻り値が取得できれば最高....！

    type para = Parameters<onClickType>;
    //onClickイベントハンドラの引数の型

    /*
    //onChangeの型
    const ChangeEvent: ChangeEventHandler<HTMLInputEvent> = (e: ChangeEvent<HTMLInputElement>): void => {
        // 処理
    }
    */
    const changeEvent: ChangeEventHandler<HTMLInputElement> = (e: para[0]): rt => {
        //if (e === undefined) return;
        setText(() => e?.target.value);
    }

    useEffect(() => {
        // コレクションを取得
        const usersCollectionRef = collection(getFirestore(app), "user1");
        getDocs(usersCollectionRef).then( (querySnapshot) => {
            console.log(querySnapshot);
        // }).catch(
        //     (ex: unknown) => {
        //         if (ex instanceof Error) {
        //             console.log("エラーです " + ex.message);
        //         }
            }
        );

    }, [])
    return (
        <>
        <p>text:{text}</p>
        <button onClick={clickButtonEvent}>Firestore追加</button>
        <p><input value={text} type="text" onChange={changeEvent}/></p>
        </>
    );
}

export default App;
