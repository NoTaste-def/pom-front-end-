import React from "react";
import styles from "./SetUserSheet.module.css";

const Lang = ({ isOpen, onClose, lang, setLang }) => {
  if (!isOpen) return null;
  return (
    <div className={styles.Lang}>
      <div className={styles.backdrop} onClick={onClose} />
      <div className={styles.testModal}>
        <div className={styles.modalNav}>여기는 모달 제목, 닫기버튼</div>
        <div className={styles.modalMain}>
          {lang.map((a, i) => {
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
                    let copy = [...lang];
                    copy.splice(i, 1);
                    setLang(copy);
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
              let copy = [...lang];
              copy.push({});
              setLang(copy);
            }}
          >
            추가하기
          </button>
        </div>
        <div className={styles.modalFooter}>
          <button>제출</button>
          <button>취소</button>
        </div>
      </div>
    </div>
  );
};

export default Lang;
