import React from "react";
import styles from "./SetUserSheet.module.css";

const Edu = ({ isOpen, onClose }) => {
  if (!isOpen) return null;
  return (
    <div>
      <div className={styles.backdrop} onClick={onClose} />
      <div className={styles.testModal}>
        <div className={styles.modalNav}>여기는 모달 제목, 닫기버튼</div>
        <div className={styles.modalMain}>
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
        <div className={styles.modalFooter}>제출, 취소 버튼이 위치합니다.</div>
      </div>
    </div>
  );
};

export default Edu;
