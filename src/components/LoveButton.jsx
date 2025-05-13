import { useEffect, useState } from "react";
import { doc, getDoc, onSnapshot, setDoc, updateDoc } from "firebase/firestore";
import { db } from "../../firebaseConfig"; // sesuaikan path jika file berbeda
import FormatNuber from "../utils/FormatNumber";
const docRef = doc(db, "likes", "loveButton");

function LoveButton() {
  const [liked, setLiked] = useState(false);
  const [likes, setLikes] = useState(0);

  useEffect(() => {
    const unsubscribe = onSnapshot(docRef, (docSnap) => {
      if (docSnap.exists()) {
        setLikes(docSnap.data().count || 0);
      }
    });
    return () => unsubscribe();
  }, []);

  const toggleLike = async () => {
    const docSnap = await getDoc(docRef);
    if (docSnap.exists()) {
      const currentLikes = docSnap.data().count || 0;
      const newCount = liked ? currentLikes - 1 : currentLikes + 1;
      await updateDoc(docRef, { count: newCount });
      setLiked(!liked);
    } else {
      await setDoc(docRef, { count: 1 });
      setLiked(true);
    }
  };
  return (
    <button onClick={toggleLike} className="text-fluid-h4 font-poppins px-4 py-2 rounded transition-colors flex items-center gap-2">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 612 612"
        width="24"
        height="24"
        fill={liked ? "#e11d48" : "#9ca3af"} // Merah jika liked, abu jika tidak
        className="transition-all duration-300"
      >
        <path
          d="M465.026,33.054c-82.538,0-110.714,39.01-159.032,95.465c-48.307-56.455-76.524-95.465-159.031-95.465
        C58.358,33.054,0,92.584,0,181.847c0,52.334,23.145,110.829,76.504,164.178l229.491,232.922l229.533-232.922
        C588.866,292.676,612,234.181,612,181.847C612,92.584,553.631,33.054,465.026,33.054"
        />
      </svg>
      {FormatNuber(likes)}
    </button>
  );
}

export default LoveButton;

// return (
//   <button onClick={toggleLike} className={`text-fluid-h4 font-poppins px-4 py-2 rounded transition-colors ${liked ? "text-red-500" : "text-gray-400"}`}>
//     ❤️ {FormatNuber(likes)}
//   </button>
// );
