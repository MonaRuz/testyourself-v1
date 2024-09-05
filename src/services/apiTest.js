import { collection, getDocs, query, where } from "firebase/firestore/lite";
import db from "../firebase/config";


export async function getTestQuestions(categoryId){
    
    const q = query(collection(db, "categories",categoryId.queryKey.at(1),"questions"), where("correctAnswer", "==", false));
    let testQuestions=[]
    try{
        const querySnapshot = await getDocs(q);
        querySnapshot.forEach((doc) => {            
            testQuestions.push({...doc.data(),id:doc.id})
          });
          return testQuestions
    }catch(err){
        console.error(err)
        throw new Error("No test questions were found.")
    }
}