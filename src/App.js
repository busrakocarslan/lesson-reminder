import { useState } from "react";
import Header from "./components/Header/Header";
import LessonCard from "./components/LessonCard/LessonCard";
import { data } from "./helper/data";
import Lesson from "./pages/Lesson";

function App() {

  const [cardShow,setCardShow]=useState(true);
  const [lessonCount,setLessonCount]=useState("6")

  
  return (
    <div>
      <Header/>
      <Lesson lessonCount={lessonCount} setLessonCount={setLessonCount} setCardShow={setCardShow} />
      <LessonCard cardShow={cardShow}/>
      

     
    </div>
  );
}

export default App;
