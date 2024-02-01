import React from "react";
import styles from "./UserRecruit.module.css";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const CompanyPage = () => {
  const posts = useSelector((state) => {
    return state.posts;
  });
  return (
    <div className={styles.viewContainer}>
      <div className={styles.pad}></div>
      <header className={styles.Nav}>채용공고</header>
      <nav className={styles.btnContainer}>
        <div className={styles.leftWrap}>
          <span>ㅎㅇ</span>
        </div>
        <div className={styles.rightWrap}>
          <Link className={styles.write} to={`/write.post`}>
            <span>글쓰기</span>
          </Link>
        </div>
      </nav>
      <aside className={styles.asideLeft}>
        <ul>
          <span>대충 그래프</span>
          <h6>이용자들이 이런 기업을 많이 보고 있어요.</h6>
        </ul>
      </aside>
      <div className={styles.tableWrap}>
        <table className={styles.table}>
          <thead>
            <tr>
              <th>No.</th>
              <th>Title</th>
              <th>Author</th>
              <th>Date</th>
              <th>EXP.</th>
            </tr>
          </thead>
          {posts.map((title, i) => {
            return (
              <tr key={i} className={styles.tableposts}>
                <td>{posts[i].id}</td>
                <td>
                  <Link className={styles.titleHref} to={"/view.post"}>
                    {posts[i].title}
                  </Link>
                </td>
                <td>{posts[i].author}</td>
                <td>{posts[i].date}</td>
                <td>{posts[i].exp}</td>
              </tr>
            );
          })}
        </table>
      </div>

      <aside className={styles.asideRight}></aside>
      <footer className={styles.footer} style={{ textAlign: "center" }}>
        푸터
      </footer>
    </div>
  );
};

export default CompanyPage;
