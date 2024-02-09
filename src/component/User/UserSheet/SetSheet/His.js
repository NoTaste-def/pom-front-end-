import React from "react";
import styles from "./SetUserSheet.module.css";

const His = ({ isOpen, onClose, his, setHis }) => {
  if (!isOpen) return null;
  return (
    <div className={styles.His}>
      <div className={styles.backdrop} onClick={onClose} />
      <div className={styles.testModal}>
        <div className={styles.modalNav}>여기는 모달 제목, 닫기버튼</div>
        <div className={styles.modalMain}>
          {his.map(function (a, i) {
            return (
              <div className={styles.HistoryInputContainer} key={i}>
                <input type="date" className={styles.StartPeriod} />
                <span>{" ~ "}</span>
                <input type="date" className={styles.EndPeriod}></input>
                <br />
                <input className={styles.CompanyName} placeholder={"회사명*"} />
                <input className={styles.Detail} placeholder={"직급/직책"} />
                <input className={styles.Detail} placeholder={"근무부서"} />
                <br />
                <button
                  className={styles.deleteHisBtn}
                  onClick={(e) => {
                    e.preventDefault();
                    let copy = [...his];
                    copy.splice(i, 1);
                    setHis(copy);
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
              let copy = [...his];
              copy.push({});
              setHis(copy);
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

export default His;
