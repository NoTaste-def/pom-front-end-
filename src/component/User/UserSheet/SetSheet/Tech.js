import React from "react";
import styles from "./SetUserSheet.module.css";

const Tech = ({ isOpen, onClose, tech, setTech }) => {
  if (!isOpen) return null;
  return (
    <div className={styles.Tech}>
      <div className={styles.backdrop} onClick={onClose} />
      <div className={styles.testModal}>
        <div className={styles.modalNav}>여기는 모달 제목, 닫기버튼</div>
        <div className={styles.modalMain}>
          {tech.map(function (a, i) {
            return (
              <div className={styles.TechInputContainer} key={i}>
                <input placeholder="자격증명*"></input>
                <input placeholder="발행처/기관"></input>
                <br />
                <select className={styles.SelectYN}>
                  <option id="No">No</option>
                  <option id="Yes">Yes</option>
                </select>
                <br />
                <select>
                  <option>합격구분*</option>
                  <option>1차합격</option>
                  <option>2차합격</option>
                  <option>필기합격</option>
                  <option>실기합격</option>
                  <option>최종합격</option>
                </select>
                <input type="date"></input>
                <br />
                <button
                  className="deleteTechBtn"
                  onClick={(e) => {
                    e.preventDefault();
                    let copy = [...tech];
                    copy.splice(i, 1);
                    setTech(copy);
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
              let copy = [...tech];
              copy.push({});
              setTech(copy);
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

export default Tech;
