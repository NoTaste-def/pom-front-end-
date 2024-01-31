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
                <div className={styles.CertName}>
                  <span>자격증/기술 : </span>
                  <input placeholder="자격증/기술 공식 이름"></input>
                </div>
                <div className={styles.GotDay}>
                  <span>취득년월 : </span>
                  <input type="date"></input>
                </div>
                <div className={styles.Issuer}>
                  <span>발급처 : </span>
                  <input placeholder="발급 기관 공식 이름"></input>
                </div>
                <div className={styles.CertYN}>
                  <span>인증여부 : </span>
                  <select className={styles.SelectYN}>
                    <option id="No">No</option>
                    <option id="Yes">Yes</option>
                  </select>
                </div>

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
