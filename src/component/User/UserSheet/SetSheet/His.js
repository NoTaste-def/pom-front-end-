import React from "react";
import styles from "./SetUserSheet.module.css";

const His = (props) => {
  return (
    <div className={styles.His}>
      {props.history.map(function (a, i) {
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
                let copy = [...props.history];
                copy.splice(i, 1);
                props.setHistory(copy);
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
          let copy = [...props.history];
          copy.push({});
          props.setHistory(copy);
        }}
      >
        추가하기
      </button>
    </div>
  );
};

export default His;
