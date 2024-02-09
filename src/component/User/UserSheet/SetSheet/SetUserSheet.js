import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import img from "../../../../test.jpg";

import styles from "./SetUserSheet.module.css";
import Army from "./Army";
import Edu from "./Edu";
import His from "./His";
import Tech from "./Tech";
import Lang from "./Lang";
import Award from "./Award";
import dayjs from "dayjs";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DatePicker, LocalizationProvider } from "@mui/x-date-pickers";
import { useDispatch, useSelector } from "react-redux";

import {
  addHis,
  deleteHis,
  setEndHis,
  setStartHis,
} from "../../../../store.js";

const SetUserSheet = () => {
  let dispatch = useDispatch();

  let user = useSelector((state) => {
    return state.usersheet;
  });

  let SetPeriodParameter = (i, day) => {
    return [i, day];
  };

  const [fade, setFade] = useState();

  const datePickerFormat = "YYYY-MM-DD";
  const datePickerUtils = {
    format: datePickerFormat,
    parse: (value) => dayjs(value, datePickerFormat, true).toDate(),
    // You can add other utils as needed, such as `isValid`, etc.
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
    <div className={`setResumeWrap ${styles.start} ${fade}`}>
      <div className={styles.resumeCon}>
        <form className={styles.flexResume}>
          <section className={styles.defaultStatusFlex}>
            <img
              alt="증명사진"
              src={img}
              style={({ height: "132px" }, { width: "103px" })}
            />
            <ul className={styles.userinfo}>
              <li>이름 : 김영권</li>
              <li>이메일 : 1234@1234</li>
              <li>전화번호 : 1234</li>
            </ul>
          </section>

          <section className={styles.army}>
            <Army />
          </section>
          <section>학력</section>
          <section>
            {user.history.map(function (a, i) {
              return (
                <div className={styles.HistoryInputContainer} key={i}>
                  <LocalizationProvider
                    required
                    dateAdapter={AdapterDayjs}
                    dateFormats={datePickerUtils}
                  >
                    <DatePicker
                      label="입사일"
                      value={user.history_start_period}
                      format="YYYY / MM / DD"
                      onChange={(newVal) => {
                        const day = `${newVal.$y}-${String(
                          newVal.$M + 1
                        ).padStart(2, "0")}-${String(newVal.$D).padStart(
                          2,
                          "0"
                        )}`;

                        // let copy = JSON.parse(JSON.stringify(user.history));
                        // copy[i].history_start_period = day;
                        // dispatch(setStartHis(copy));
                        // console.log(i, copy);
                        dispatch(setStartHis(SetPeriodParameter(i, day)));
                      }}
                    />
                    <DatePicker
                      label="퇴사일"
                      value={user.history_end_period}
                      format="YYYY / MM / DD"
                      onChange={(newVal) => {
                        const day = `${newVal.$y}-${String(
                          newVal.$M + 1
                        ).padStart(2, "0")}-${String(newVal.$D).padStart(
                          2,
                          "0"
                        )}`;
                        dispatch(setEndHis(SetPeriodParameter(i, day)));
                        console.log(user.history);
                      }}
                    />
                  </LocalizationProvider>
                  <input
                    required
                    className={styles.CompanyName}
                    placeholder={"회사명*"}
                  />
                  <input
                    required
                    className={styles.Detail}
                    placeholder={"직급/직책*"}
                  />
                  <input
                    required
                    className={styles.Detail}
                    placeholder={"근무부서*"}
                  />
                  <br />
                  <button
                    type="button"
                    className={styles.deleteHisBtn}
                    onClick={() => {
                      dispatch(deleteHis(user.history.id));
                    }}
                  >
                    X
                  </button>
                </div>
              );
            })}
            <button
              type="button"
              onClick={() => {
                dispatch(
                  addHis({
                    history_start_period: "",
                    history_end_period: "",
                    history_company: "",
                    history_position: "",
                    history_department: "",
                  })
                );
              }}
            >
              추가하기
            </button>
          </section>
          <section>자격/어학</section>
          <section>수상</section>
          <div className={styles.footerContainer}>
            <button type="submit" className={styles.submitBtn}>
              제출하기
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SetUserSheet;
