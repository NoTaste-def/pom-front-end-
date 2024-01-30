import React from "react";
import styles from "./SetUserSheet.module.css";

const Modal = ({ isOpen, onClose, children }) => {
  if (!isOpen) return null;

  return (
    <div>
      <div className={styles.backdrop} />
      <div className={styles.testModal}>
        <div className={styles.modalNav}>여기는 모달 제목, 닫기버튼</div>
        <div className={styles.modalMain}>{children}</div>
        <div className={styles.modalFooter}>제출, 취소 버튼이 위치합니다.</div>
      </div>
    </div>
  );
};

export default Modal;
