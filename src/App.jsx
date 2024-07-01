import {collection, getDocs } from 'firebase/firestore/lite';
import db from "../src/firebase/config"

export default function App(){
  async function getCategories(db) {
    const categoriesCol = collection(db, 'categories');
    const citySnapshot = await getDocs(categoriesCol);
    const categories = citySnapshot.docs.map(doc => doc.data());
    console.log(categories);
    return categories;
  }
  getCategories(db)
  
  return <h1>Hello world!</h1>
}