import firebase from 'firebase/compat/app';
import { getFirestore, collection, getDocs, Firestore,
    QuerySnapshot, CollectionReference, DocumentData } from 'firebase/firestore/lite';

const firebaseConfig = {
    apiKey: "AIzaSyDfM9MLlNJFZi_EOVousSoThyqHkmjGS8E",
    authDomain: "fir-nettest-4b20a.firebaseapp.com",
    projectId: "fir-nettest-4b20a",
    storageBucket: "fir-nettest-4b20a.appspot.com",
    messagingSenderId: "899853734149",
    appId: "1:899853734149:web:fd9b71de690344ebc4276c",
    measurementId: "G-V1LXJLY124"

    // apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
    // authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
    // projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
    // storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
    // messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGE_SENDER_ID,
    // appId: process.env.REACT_APP_FIREBASE_SENDER_ID,
};

console.log(firebaseConfig.measurementId);

export const app = firebase.initializeApp(firebaseConfig);

//export async function getCities(db: Firestore) {
//    const citiesCol: CollectionReference<DocumentData> = collection(db, 'cities');
//    const p: Promise<QuerySnapshot<DocumentData>> = getDocs(citiesCol);
//    const citySnapshot: QuerySnapshot<DocumentData> = await p;
//    const cityList = citySnapshot.docs.map(doc => doc.data());
//    return cityList;
//}
