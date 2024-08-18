import {collectionGroup,query,where,getDocs,collection,doc} from "firebase/firestore/lite"
import db from "../firebase/config"

export async function getQuestions(categoryId) {
    
    console.log(categoryId);
	const questions = query(collection(db, 'categories', categoryId,"questions"));
const querySnapshot = await getDocs(questions);
querySnapshot.forEach((doc) => {
    console.log(doc.id, ' => ', doc.data());
});

return questions
}


