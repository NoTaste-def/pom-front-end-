import React, { useState } from "react";
import styles from "./SetUserSheet.module.css";
import { DatePicker, LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import dayjs from "dayjs";

const Edu = ({ isOpen, onClose }) => {
  const [school, setSchool] = useState();

  if (!isOpen) return null;
  return (
    <div>
      <div className={styles.backdrop} onClick={onClose} />
      <div className={styles.testModal}>
        <div className={styles.modalNav}>
          <h3>학력사항을 기재해주세요.</h3>
          <button>✖️</button>
        </div>
        <div>
          <span>학력을 기재해 주세요.</span>
          <select
            onChange={(event) => {
              setSchool(event.target.value);
            }}
          >
            <option value={0}>학력 구분 선택*</option>
            <option value={1}>초등학교 졸업</option>
            <option value={2}>중학교 졸업</option>
            <option value={3}>고등학교 졸업</option>
            <option value={4}>대학ㆍ대학원 이상 졸업</option>
            <option value={5}>기타 학력 졸업</option>
          </select>
          <Data value={school} />
        </div>
        <div className={styles.modalMain}></div>
        <div className={styles.modalFooter}>
          <button>저장</button>
          <button>취소</button>
        </div>
      </div>
    </div>
  );
};

const Data = ({ value }) => {
  const [isGrad, setIsGrad] = useState("");
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [qualif, setQualif] = useState("");

  const datePickerFormat = "YYYY-MM";
  const datePickerUtils = {
    format: datePickerFormat,
    parse: (value) => dayjs(value, datePickerFormat, true).toDate(),
    // You can add other utils as needed, such as `isValid`, etc.
  };

  if (value == 1 || value == 2) {
    return (
      <div>
        <input
          type="checkbox"
          value={"n"}
          id="qualification"
          onChange={(e) => {
            setQualif(e.target.value);
          }}
        />
        <label for="qualification">검정고시</label>

        {qualif == "n" ? (
          <LocalizationProvider
            dateAdapter={AdapterDayjs}
            dateFormats={datePickerUtils}
          >
            <DatePicker
              label="취득년월"
              value={startDate}
              format="YYYY / MM"
              onChange={(newVal) => {
                setStartDate(newVal);
                setEndDate(newVal);
                console.log(startDate);
              }}
            />
          </LocalizationProvider>
        ) : (
          <div>
            <input type="text" placeholder="학교명" />
            <select
              onChange={(event) => {
                setIsGrad(event.target.value);
              }}
            >
              <option value={"none"}>졸업여부*</option>
              <option value={"grad"}>졸업</option>
              <option value={"drop"}>중퇴</option>
            </select>
            <LocalizationProvider
              dateAdapter={AdapterDayjs}
              dateFormats={datePickerUtils}
            >
              <DatePicker
                label="입학년월"
                value={startDate}
                format="YYYY / MM"
                onChange={(newVal) => {
                  setStartDate(newVal);
                  console.log(startDate);
                }}
              />
              <DatePicker
                label="졸업년월"
                value={endDate}
                format="YYYY / MM"
                onChange={(newVal) => {
                  setEndDate(newVal);
                  console.log(endDate);
                }}
              />
            </LocalizationProvider>
          </div>
        )}
      </div>
    );
  }
  if (value == 3) {
    return (
      <div>
        <input
          type="checkbox"
          value={"n"}
          id="qualification"
          onChange={(e) => {
            setQualif(e.target.value);
          }}
        />
        <label for="qualification">검정고시</label>

        {qualif == "n" ? (
          <LocalizationProvider
            dateAdapter={AdapterDayjs}
            dateFormats={datePickerUtils}
          >
            <DatePicker
              label="취득년월"
              value={startDate}
              format="YYYY / MM"
              onChange={(newVal) => {
                setStartDate(newVal);
                setEndDate(newVal);
                console.log(startDate);
              }}
            />
          </LocalizationProvider>
        ) : (
          <div>
            <input placeholder="학교명"></input>
            <select
              onChange={(event) => {
                setIsGrad(event.target.value);
              }}
            >
              <option value={"none"}>졸업여부*</option>
              <option value={"grad"}>졸업</option>
              <option value={"in"}>재학중</option>
              <option value={"rest"}>휴학중</option>
              <option value={"drop"}>중퇴</option>
              <option value={"selfdrop"}>자퇴</option>
              <option value={"exgrad"}>졸업예정</option>
            </select>
            <br />
            <LocalizationProvider
              dateAdapter={AdapterDayjs}
              dateFormats={datePickerUtils}
            >
              <DatePicker
                label="입학년월"
                value={startDate}
                format="YYYY / MM"
                onChange={(newVal) => {
                  setStartDate(newVal);
                  console.log(startDate);
                }}
              />
              <DatePicker
                label="졸업년월"
                value={endDate}
                format="YYYY / MM"
                onChange={(newVal) => {
                  setEndDate(newVal);
                  console.log(endDate);
                }}
              />
            </LocalizationProvider>
            <br />
            <select
              onChange={(event) => {
                setIsGrad(event.target.value);
              }}
            >
              <option value={"none"}>전공계열*</option>
              <option value={"humanity"}>문과계열</option>
              <option value={"stem"}>이과계열</option>
              <option value={"vocational"}>전문(실업)계</option>
              <option value={"artandphysic"}>예체능계</option>
              <option value={"specialized"}>특성화/마이스터고</option>
              <option value={"sppurpose"}>특수목적고</option>
            </select>
          </div>
        )}
      </div>
    );
  }
  if (value == 4) {
    return (
      <div>
        <select
          onChange={(event) => {
            setIsGrad(event.target.value);
          }}
        >
          <option value={"none"}>대학구분*</option>
          <option value={"college"}>대학(2,3)년</option>
          <option value={"univerity"}>대학교(4년)</option>
          <option value={"master"}>대학원(석사)</option>
          <option value={"doctorate"}>대학원(박사)</option>
        </select>
        <input placeholder="학교명*" />
        <br />
        <input placeholder="전공*" />
        <select
          onChange={(event) => {
            setIsGrad(event.target.value);
          }}
        >
          <option value={"none"}>졸업여부*</option>
          <option value={"grad"}>졸업</option>
          <option value={"in"}>재학중</option>
          <option value={"rest"}>휴학중</option>
          <option value={"drop"}>중퇴</option>
          <option value={"selfdrop"}>자퇴</option>
          <option value={"exgrad"}>졸업예정</option>
        </select>
        <br />
        <LocalizationProvider
          dateAdapter={AdapterDayjs}
          dateFormats={datePickerUtils}
        >
          <DatePicker
            label="입학년월"
            value={startDate}
            format="YYYY / MM"
            onChange={(newVal) => {
              setStartDate(newVal);
              console.log(startDate);
            }}
          />
          <DatePicker
            label="졸업년월"
            value={endDate}
            format="YYYY / MM"
            onChange={(newVal) => {
              setEndDate(newVal);
              console.log(endDate.$y);
              console.log(endDate.$m);
            }}
          />
        </LocalizationProvider>
        <br />
        <input placeholder="학점" />
        <select>
          <option>기준학점</option>
          <option>4.0</option>
          <option>4.3</option>
          <option>4.5</option>
        </select>
        <br />
        <input placeholder="추가전공" />
        <select>
          <option>전공구분</option>
          <option>부전공</option>
          <option>복수전공</option>
          <option>이중전공</option>
        </select>
      </div>
    );
  }
  if (value == 5) {
    return (
      <div>
        <select
          onChange={(event) => {
            setIsGrad(event.target.value);
          }}
        >
          <option value={"none"}>인정학력*</option>
          <option value={"college"}>대학(2,3)년</option>
          <option value={"univerity"}>대학교(4년)</option>
        </select>
        <input placeholder="학교/학원명*" />
        <br />
        <input placeholder="전공분야*" />
        <select
          onChange={(event) => {
            setIsGrad(event.target.value);
          }}
        >
          <option value={"none"}>졸업여부*</option>
          <option value={"grad"}>졸업</option>
          <option value={"in"}>재학중</option>
          <option value={"rest"}>휴학중</option>
          <option value={"drop"}>중퇴</option>
          <option value={"selfdrop"}>자퇴</option>
          <option value={"exgrad"}>졸업예정</option>
        </select>
        <br />
        <LocalizationProvider
          dateAdapter={AdapterDayjs}
          dateFormats={datePickerUtils}
        >
          <DatePicker
            label="입학년월"
            value={startDate}
            format="YYYY / MM"
            onChange={(newVal) => {
              setStartDate(newVal);
              console.log(startDate);
            }}
          />
          <DatePicker
            label="졸업년월"
            value={endDate}
            format="YYYY / MM"
            onChange={(newVal) => {
              setEndDate(newVal);
              console.log(endDate.$y);
              console.log(endDate.$m);
            }}
          />
        </LocalizationProvider>
      </div>
    );
  }
  return null;
};

const IsTest = ({ value }) => {
  const [date, setDate] = useState("");
  const datePickerFormat = "YYYY-MM";
  const datePickerUtils = {
    format: datePickerFormat,
    parse: (value) => dayjs(value, datePickerFormat, true).toDate(),
    // You can add other utils as needed, such as `isValid`, etc.
  };

  if (value == "Y") {
    return (
      <div>
        <LocalizationProvider
          dateAdapter={AdapterDayjs}
          dateFormats={datePickerUtils}
        >
          <DatePicker
            label="입학년월"
            value={date}
            format="YYYY / MM"
            onChange={(newVal) => {
              setDate(newVal);
              console.log(date);
            }}
          />
          <DatePicker
            label="졸업년월"
            value={date}
            format="YYYY / MM"
            onChange={(newVal) => {
              setDate(newVal);
              console.log(date.$y);
              console.log(date.$m);
            }}
          />
        </LocalizationProvider>
      </div>
    );
  }
};

export default Edu;
