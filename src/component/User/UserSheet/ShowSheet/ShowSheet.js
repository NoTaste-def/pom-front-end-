import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import styles from "./ShowSheet.module.css";
import { Link } from "react-router-dom";
import axios from "axios";

const ShowSheet = () => {
  const LOAD = "Loading...";
  const [fade, setFade] = useState("");
  const [user, setUser] = useState();

  const dispatch = useDispatch();
  const dummyResume = useSelector((state) => {
    return state.dummy;
  });

  useEffect(() => {
    let a = setTimeout(() => {
      setFade(styles.end);
    }, 0);
    return () => {
      clearTimeout(a);
      setFade();
    };
  }, []);

  // useEffect(() => {
  //   axios
  //     .get(`http://211.216.233.66:5000/api/resume`, {
  //       params: {
  //         userId: "김영권",
  //       },
  //     })
  //     .then((res) => {
  //       setUser(res.data);
  //     })
  //     .catch(() => {
  //       alert("Server Disconnected");
  //     });
  // }, []);

  return (
    <div className={`${styles.start} ${fade}`}>
      <div className={styles.Navbar}>
        <h1>이력서</h1>
      </div>
      <div className={styles.ShowResume}>
        <h3>병역</h3>
        <span></span>
        <div>
          <h6>여부 : {user ? user.army_yn : LOAD}</h6>
          <h6>복무기간 : {user ? user.army_period : LOAD}</h6>
          <h6>병역 : {user ? user.army_position : LOAD}</h6>
        </div>
      </div>
      <div className={styles.ShowEdu}>
        <h3>학력</h3>
        <div>
          <h6>초등학교 : {user ? user.education_elementory : LOAD}</h6>
          <h6>중학교 : {user ? user.education_middle : LOAD}</h6>
          <h6>고등학교 : {user ? user.education_high : LOAD}</h6>
          <h6>대학교 : {user ? user.education_univ : LOAD}</h6>
          <h6>대학교 이상 : {user ? user.education_more_univ : LOAD}</h6>
        </div>
      </div>
      {user &&
        user.history &&
        user.history.map((a, i) => {
          return (
            <div key={i} className={styles.ShowHis}>
              <h3>경력</h3>
              <div>
                <p>입사기간 : {user ? user.history[i].history_period : LOAD}</p>
                <p>
                  회사이름 : {user ? user.history[i].history_company : LOAD}
                </p>
                <p>
                  주요업무/직책 :{" "}
                  {user ? user.history[i].history_position : LOAD}
                </p>
              </div>
            </div>
          );
        })}
      {user &&
        user.tech &&
        user.tech.map((a, i) => {
          return (
            <div key={i} className={styles.ShowTech}>
              <h3>기술 자격증</h3>
              <div>
                <p>기술 자격증 이름 : {user ? user.tech[i].tech_name : LOAD}</p>
                <p>취득일 : {user ? user.tech[i].tech_get_day : LOAD}</p>
                <p>발급처 : {user ? user.tech[i].tech_authority : LOAD}</p>
                <p>
                  인증여부 :{" "}
                  {user ? user.tech[i].tech_certification_status : LOAD}
                </p>
              </div>
            </div>
          );
        })}
      {user &&
        user.voca &&
        user.voca.map((a, i) => {
          return (
            <div key={i} className={styles.ShowVoca}>
              <h3>어학 자격증</h3>
              <div>
                <p>어학 자격증 이름 : {user ? user.voca[i].voca_name : LOAD}</p>
                <p>점수 : {user ? user.voca[i].voca_score : LOAD}</p>
                <p>취득일 : {user ? user.voca[i].voca_date : LOAD}</p>
              </div>
            </div>
          );
        })}
      {user &&
        user.awards &&
        user.awards.map((a, i) => {
          return (
            <div key={i} className={styles.ShowAward}>
              <h3>수상 경력</h3>
              <div>
                <p>수상이름 : {user ? user.awards[i].awards_name : LOAD}</p>
                <p>
                  대회주최기관 : {user ? user.awards[i].awards_authority : LOAD}
                </p>
                <p>취득일 : {user ? user.awards[i].awards_get : LOAD}</p>
              </div>
            </div>
          );
        })}
      <button className={styles.ModifyBtn}>
        <Link
          style={{
            textDecoration: "none",
            margin: "10px",
            marginTop: "8px",
            color: "black",
          }}
          to={"/setusersheet"}
        >
          수정하기
        </Link>
      </button>
      <button
        onClick={() => {
          axios
            .post(`http://211.216.233.66:5000/api/resume`, {
              params: {
                userID: "1234",
              },
            })
            .then((res) => {
              console.log(res);
            })
            .catch((res) => {
              alert("Error");
            });
        }}
      >
        POST
      </button>
      <button
        onClick={() => {
          console.log(user.tech[0].tech_authority);
        }}
      >
        출력
      </button>
    </div>
  );
};

export default ShowSheet;
