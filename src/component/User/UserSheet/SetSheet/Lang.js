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
                <select>
                  <option>영어</option>
                  <option>일본어</option>
                  <option>중국어</option>
                  <option>독일어</option>
                  <option>불어</option>
                  <option>스페인어</option>
                  <option>이탈리아어</option>
                  <option>한국어</option>
                  <option>러시아어</option>
                </select>
                <input placeholder="언어시험명 입력"></input>
                <input type="date"></input>
                <br />
                <input placeholder="급수"></input>
                <input type="number" placeholder="점수"></input>
                <br />
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
