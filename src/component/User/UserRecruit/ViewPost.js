import React from "react";
import styles from "./ViewPost.module.css";
import { Link } from "react-router-dom";

const ViewPost = () => {
  return (
    <div className={styles.viewContainer}>
      <div className={styles.pad}></div>
      <header className={styles.header}>
        <h1>제목 위치</h1>
      </header>
      <nav className={styles.nav}>
        <div className={styles.navLeft}>
          <Link className={styles.toCompany} href="/기업페이지">
            <strong>아무튼 대기업</strong>
          </Link>
          <span className={styles.seperator}>·</span>
          <span>2024-01-01</span>
        </div>
        <div className={styles.navRight}>
          <button className={styles.modifyBtn}>수정</button>
          <button className={styles.deleteBtn}>삭제</button>
        </div>
      </nav>
      <aside className={styles.asideL}></aside>
      <main className={styles.main}>게시글 본문 내용이 들어감</main>
      <aside className={styles.asideR}></aside>
      <footer className={styles.footer}>
        다음글, 관심있어할 내용 등등이 위치할 수 있음
      </footer>
    </div>
  );
};

export default ViewPost;
