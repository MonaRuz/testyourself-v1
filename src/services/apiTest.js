import { collection, doc, getDocs, query, setDoc, where } from "firebase/firestore/lite";
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

export async function updateCorrectAnswer(categoryId,questionId,numTestQuestions){

    
    const qRef = doc(db, "categories", categoryId, "questions", questionId)

	try {
		await setDoc(qRef,{correctAnswer:true},{progress:numTestQuestions},{merge:true})
		
	} catch (err) {
		console.error(err)
		throw new Error("Something went wrong with update test questions.")
	}
}

export async function updateWrongAnswer(categoryId,questionId){
    
    const qRef = doc(db, "categories", categoryId, "questions", questionId)

	try {
		await setDoc(qRef,{correctAnswer:true},{merge:true})
		
	} catch (err) {
		console.error(err)
		throw new Error("Something went wrong with update test questions.")
	}
}