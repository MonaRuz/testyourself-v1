import { collection, doc, getDocs, query, setDoc, where } from "firebase/firestore/lite";
import db from "../firebase/config";


// export async function getTestQuestions(categoryId){
//     console.log(categoryId);
    
//     const q = query(collection(db, "categories",categoryId
//         ,"questions"), where("correctAnswer", "==", false));
//         let testQuestions=[]
//     try{
//         const querySnapshot = await getDocs(q);
//         querySnapshot.forEach((doc) => {            
//             testQuestions.push({id:doc.id,...doc.data()})
//             console.log(doc.data());
            
//           });
//           return testQuestions
//     }catch(err){
//         console.error(err)
//         throw new Error("No test questions were found.")
//     }
// }

export async function updateCorrectAnswer(categoryId,questionId,numTestQuestions,attempts){
console.log(categoryId,questionId,numTestQuestions,attempts);

    
    const qRef = doc(db, "categories", categoryId, "questions", questionId)

	try {
		await setDoc(qRef,{correctAnswer:true},{progress:numTestQuestions},{attempts:attempts+1},{merge:true})
		
	} catch (err) {
		console.error(err)
		throw new Error("Something went wrong with update test questions.")
	}
}

export async function updateWrongAnswer(categoryId,questionId,attempts){
    
    const qRef = doc(db, "categories", categoryId, "questions", questionId)

	try {
		await setDoc(qRef,{attempts:attempts+1},{merge:true})
		
	} catch (err) {
		console.error(err)
		throw new Error("Something went wrong with update test questions.")
	}
}