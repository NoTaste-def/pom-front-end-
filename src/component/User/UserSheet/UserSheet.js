import React, { useEffect, useState } from "react";
import { Link, Router, Routes, Route, useNavigate } from "react-router-dom";
import { BrowserRouter, Navigate } from "react-router-dom";

import Nav from "react-bootstrap/Nav";
import ShowSheet from "./ShowSheet/ShowSheet";

import styles from "./UserSheet.module.css";

const UserSheet = () => {
  const [isThereSheet, setIsThereSheet] = useState(true);
  return <div>{isThereSheet ? <ShowSheet /> : <Empty />}</div>;
};

export default UserSheet;

const Empty = () => {
  let navigate = useNavigate();

  const [fade, setFade] = useState();
  const goToSetSheet = () => {
    navigate("/setusersheet");
  };

  useEffect(() => {
    let a = setTimeout(() => {
      setFade(styles.end);
    }, 0);
    return () => {
      clearTimeout(a);
      setFade();
    };
  }, []);

  return (
    <div className={`${styles.Main} ${styles.start} ${fade}`}>
      <span className={styles.guideAlert}>
        앗! 입력된 이력서가 없어요! 이력서를 입력해주세요.
      </span>
      <button className={styles.goSheetBtn} onClick={goToSetSheet}>
        이력서 입력하기
      </button>
    </div>
  );
};
