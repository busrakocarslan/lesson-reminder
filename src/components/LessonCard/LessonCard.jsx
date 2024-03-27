import React from "react";
import { data } from "../../helper/data";
import cardComponent from "./lesson.module.css";

function LessonCard({ cardShow }) {
  

  return (   
    <div className={cardComponent.deneme}>
      {cardShow && (
        <>
          {data.map(({ id, image, hour, name }) => (
            <div key={id} className={cardComponent.cardContainer}>
              <div className={cardComponent["img-info"]}>
                <img src={image} alt={name} />
                <div className={cardComponent.info}>
                  <p>Lesson Name: {name}</p>
                  <p>Lesson Hour: {hour}</p>
                </div>
              </div>
            </div>
          ))}
        </>
      )}
    </div>
  );
}

export default LessonCard;

