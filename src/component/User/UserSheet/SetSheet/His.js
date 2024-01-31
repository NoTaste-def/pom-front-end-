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
                <div className={styles.DateInput}>
                  <span>기간 : </span>
                  <input type="date" className={styles.StartPeriod} />
                  <span>{" ~ "}</span>
                  <input type="date" className={styles.EndPeriod}></input>
                </div>
                <div className={styles.CompanyNameInput}>
                  <span>회사명 : </span>
                  <input
                    className={styles.CompanyName}
                    placeholder={"회사명 입력란"}
                  />
                </div>
                <div className={styles.DetailInput}>
                  <span>직책/업무내용 : </span>
                  <input
                    className={styles.Detail}
                    placeholder={"직책/업무내용과 관련된 세부 사항 기재"}
                  />
                </div>

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
