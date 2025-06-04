import { db } from "../config/firebase_config";
import { getDocs, collection } from "firebase/firestore";

async function getPosts() {
    const postsCollection = collection(db, "posts");
    const snapshot = await getDocs(postsCollection);
    const posts = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
    return posts;
}

export { getPosts };