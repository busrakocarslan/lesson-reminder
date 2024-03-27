import React from 'react'
import { useState } from 'react'
import LessonCard from '../components/LessonCard/LessonCard'

function Lesson({lessonCount,setCardShow,setLessonCount}) {
  const cleanbtn=()=>{
    setLessonCount("0")
    setCardShow(false);
  }
  const yenilebtn=()=>{
    setLessonCount("6");
    setCardShow(true);

  }
  return (
    <div className='h1'>
      <h1>{lessonCount} Lesson Today</h1>
      <button onClick={cleanbtn}>Temizle</button>
      <button onClick={yenilebtn}>Yenile</button>
    </div>
  )
}

export default Lesson