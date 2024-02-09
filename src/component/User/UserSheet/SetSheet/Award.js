import React, { useState } from "react";
import styles from "./SetUserSheet.module.css";
import { DatePicker, LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import dayjs from "dayjs";

const Award = ({ isOpen, onClose }) => {
  const [getDay, setDay] = useState("");

  const datePickerFormat = "YYYY-MM";
  const datePickerUtils = {
    format: datePickerFormat,
    parse: (value) => dayjs(value, datePickerFormat, true).toDate(),
    // You can add other utils as needed, such as `isValid`, etc.
  };
  if (!isOpen) return null;
  return (
    <div>
      <div className={styles.backdrop} onClick={onClose} />
      <div className={styles.testModal}>
        <div className={styles.modalNav}>
          <h4>Title</h4>
          <button onClick={onClose}>✖️</button>
        </div>
        <div className={styles.modalMain}>
          <label for="prizeName">수상∙공모전명</label>
          <input placeholder="수상∙공모전명" id="prizeName" />
          <LocalizationProvider
            dateAdapter={AdapterDayjs}
            dateFormats={datePickerUtils}
          >
            <DatePicker
              label="수상∙공모일"
              value={getDay}
              format="YYYY / MM"
              onChange={(newVal) => {
                setDay(newVal);
                console.log(getDay);
              }}
            />
          </LocalizationProvider>

          <label for="prizeName">수여∙주최기관</label>
          <input placeholder="수여∙주최기관" id="prizeName" />
        </div>
        <div className={styles.modalFooter}>
          <button>제출</button>
          <button>취소</button>
        </div>
      </div>
    </div>
  );
};

export default Award;
