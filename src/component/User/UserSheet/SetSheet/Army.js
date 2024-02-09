import React, { useState } from "react";
import dayjs from "dayjs";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DatePicker, LocalizationProvider } from "@mui/x-date-pickers";
import { useDispatch, useSelector } from "react-redux";

import {
  ArmyYN,
  ReasonNo,
  addHis,
  deleteHis,
  setEndArmy,
  setEndHis,
  setMilRank,
  setStartArmy,
  setStartHis,
  setSurvNum,
  setWhichSurved,
} from "../../../../store.js";

import styles from "./SetUserSheet.module.css";

const Army = () => {
  const datePickerFormat = "YYYY-MM-DD";
  const datePickerUtils = {
    format: datePickerFormat,
    parse: (value) => dayjs(value, datePickerFormat, true).toDate(),
    // You can add other utils as needed, such as `isValid`, etc.
  };

  const [hideReason, setHideReason] = useState(styles.hide_reason);
  const [armyFrom, setArmyForm] = useState(styles.hide_army_form);

  let dispatch = useDispatch();

  let user = useSelector((state) => {
    return state.usersheet;
  });

  const handleArmyNumberChange = (e) => {
    const inputValue = e.target.value;

    // 정확한 패턴인지 확인
    const isValidPattern = /^\d{2}-\d{8}$/g.test(inputValue);

    if (isValidPattern) {
      dispatch(setSurvNum(inputValue));
    }
  };

  return (
    <div>
      <div className={styles.army_title}>
        <select
          required
          onChange={(e) => {
            dispatch(ArmyYN(e.target.value));
            if (e.target.value == "N") {
              setHideReason();
              setArmyForm(styles.hide_army_form);
            } else if (e.target.value == "Y") {
              setArmyForm();
              setHideReason(styles.hide_reason);
            } else {
              setArmyForm(styles.hide_army_form);
              setHideReason(styles.hide_reason);
            }
          }}
        >
          <option value={""}>병역여부*</option>
          <option value={"Y"}>Y</option>
          <option value={"N"}>N</option>
        </select>
        <input
          className={`${styles.reason_no}, ${hideReason}`}
          required
          placeholder="면제사유"
          onChange={(e) => {
            dispatch(ReasonNo(e.target.value));
          }}
        />
        <div className={`${armyFrom}`}>
          <LocalizationProvider
            required
            dateAdapter={AdapterDayjs}
            dateFormats={datePickerUtils}
          >
            <DatePicker
              label="입대일"
              value={user.army_start_period}
              format="YYYY / MM / DD"
              onChange={(newVal) => {
                const day = `${newVal.$y}-${String(newVal.$M + 1).padStart(
                  2,
                  "0"
                )}-${String(newVal.$D).padStart(2, "0")}`;
                dispatch(setStartArmy(day));
              }}
            />
            <DatePicker
              label="전역일"
              value={user.army_end_period}
              format="YYYY / MM / DD"
              onChange={(newVal) => {
                const day = `${newVal.$y}-${String(newVal.$M + 1).padStart(
                  2,
                  "0"
                )}-${String(newVal.$D).padStart(2, "0")}`;
                dispatch(setEndArmy(day));
              }}
            />
          </LocalizationProvider>
          <select
            required
            onChange={(e) => {
              dispatch(setWhichSurved(e.target.value));
            }}
          >
            <option value={""}>군별*</option>
            <option value={"육군"}>육군</option>
            <option value={"해군"}>해군</option>
            <option value={"공군"}>공군</option>
          </select>
          <select
            required
            onChange={(e) => {
              dispatch(setMilRank(e.target.value));
            }}
          >
            <option value={""}>계급*</option>
            <option value={"병장"}>병장</option>
            <option value={"상병"}>상병</option>
            <option value={"일병"}>일병</option>
            <option value={"이등병"}>이등병</option>
          </select>
          <input
            className={styles.surv_num}
            required
            placeholder="xx-xxxxxxxx 형식"
            minLength="5"
            maxLength="11"
            onChange={handleArmyNumberChange}
          />
        </div>
      </div>
    </div>
  );
};

export default Army;
