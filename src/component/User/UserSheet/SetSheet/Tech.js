import React from "react";
import styles from "./SetUserSheet.module.css";

const Tech = (props) => {
  return (
    <div className={styles.Tech}>
      {props.tech.map(function (a, i) {
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
                let copy = [...props.tech];
                copy.splice(i, 1);
                props.setTech(copy);
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
          let copy = [...props.tech];
          copy.push({});
          props.setTech(copy);
        }}
      >
        추가하기
      </button>
    </div>
  );
};

export default Tech;
