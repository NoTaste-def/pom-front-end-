import React from "react";
import styles from "./SetUserSheet.module.css";

const Lang = (props) => {
  return (
    <div className={styles.Lang}>
      {props.lang.map((a, i) => {
        return (
          <div key={i} className={styles.LangInputContainer}>
            <div className={styles.LangCertName}>
              <span>자격증 이름 : </span>
              <input placeholder="자격증 이름 기재"></input>
            </div>
            <div className={styles.LangCertScore}>
              <span>자격증 점수 : </span>
              <input type="number" placeholder="자격증 점수 기재"></input>
            </div>
            <div className={styles.LangCertDate}>
              <span>자격증 취득 날짜 : </span>
              <input type="date"></input>
            </div>
            <button
              className={styles.deleteLangBtn}
              onClick={(e) => {
                e.preventDefault();
                let copy = [...props.lang];
                copy.splice(i, 1);
                props.setLang(copy);
              }}
            >
              X
            </button>
          </div>
        );
      })}
      <button
        onClick={(e) => {
          e.preventDefault();
          let copy = [...props.lang];
          copy.push({});
          props.setLang(copy);
        }}
      >
        추가하기
      </button>
    </div>
  );
};

export default Lang;
