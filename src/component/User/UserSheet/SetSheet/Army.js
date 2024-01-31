import React from "react";
import styles from "./SetUserSheet.module.css";

const Army = ({ isOpen, onClose }) => {
  if (!isOpen) return null;
  return (
    <div>
      <div className={styles.backdrop} onClick={onClose} />
      <div className={styles.testModal}>
        <div className={styles.modalNav}>여기는 모달 제목, 닫기버튼</div>
        <div className={styles.modalMain}>
          <div>
            <h6>병역여부</h6>
            <select>
              <option>Y</option>
              <option>N</option>
            </select>
          </div>
          <div>
            <h6>복무 기간</h6>
            <input type="date" /> ~ <input type="date" />
          </div>
          <div>
            <h6>보직</h6>
            <input type="text" placeholder="복무 당시 보직" />
          </div>
        </div>
        <div className={styles.modalFooter}>
          <button>제출</button>
          <button>취소</button>
        </div>
      </div>
    </div>
  );
};

export default Army;
