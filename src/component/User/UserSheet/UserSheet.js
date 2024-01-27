import React, { useState } from "react";
import { Link, Router, Routes, Route, useNavigate } from "react-router-dom";
import { BrowserRouter, Navigate } from "react-router-dom";
import data from "../../../resume.json";
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

  const goToSetSheet = () => {
    navigate("/setusersheet");
  };

  return (
    <div>
      <span>앗! 입력된 이력서가 없어요! 이력서를 입력해주세요.</span>
      <Nav.Link className={styles.goSheetBtn} onClick={goToSetSheet}>
        이력서 입력하기
      </Nav.Link>
    </div>
  );
};
