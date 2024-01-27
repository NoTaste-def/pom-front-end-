import React from "react";
import styles from "./SetUserSheet.module.css";

const Edu = () => {
  return (
    <div className={styles.EduSelectContainer}>
      <ul>
        <div>
          <span>초등학교 : </span>
          <input type="text" placeholder="학교 이름을 기재해주세요"></input>
          <p>
            <span>재학기간 : </span>
            <input type="date"></input> ~ <input type="date"></input>
          </p>
        </div>
        <div>
          <span>중학교 : </span>
          <input type="text" placeholder="학교 이름을 기재해주세요"></input>
          <p>
            <span>재학기간 : </span>
            <input type="date"></input> ~ <input type="date"></input>
          </p>
        </div>
        <div>
          <span>고등학교 : </span>
          <input type="text" placeholder="학교 이름을 기재해주세요"></input>
          <p>
            <span>재학기간 : </span>
            <input type="date"></input> ~ <input type="date"></input>
          </p>
        </div>
        <div>
          <span>대학교 : </span>
          <input type="text" placeholder="학교 이름을 기재해주세요"></input>
          <p>
            <span>재학기간 : </span>
            <input type="date"></input> ~ <input type="date"></input>
          </p>
        </div>
        <div>
          <span>대학교(석박사) : </span>
          <input type="text" placeholder="학교 이름을 기재해주세요"></input>
          <p>
            <span>재학기간 : </span>
            <input type="date"></input> ~ <input type="date"></input>
          </p>
        </div>
      </ul>
    </div>
  );
};

export default Edu;
