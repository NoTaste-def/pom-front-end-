import React, { useState } from "react";
import { CiCalendar } from "react-icons/ci";
import Datetime from "react-datetime";

const DateSelect = () => {
  const [date, setDate] = useState("");
  const [open, setOpen] = useState(false);

  const format = "YYYY-MM-DD";

  const getSeperator = () => {
    const regex = /[^0-9a-zA-z]+/;
    const match = format.match(regex);

    if (match) {
      const symbol = match[0];
      const index = [];

      for (let i = 0; i < format.length; i++) {
        if (format[i] === symbol) {
          index.push(i);
        }
      }
      return { symbol, index };
    }
    return { symbol: undefined, index: [] };
  };

  const seperator = getSeperator();

  const handleChangeDate = (e) => {
    let cur = e.target.value;

    if (seperator.symbol && seperator.index.length > 0) {
      seperator.index.forEach((i) => {
        if (cur.length > i) {
          cur = cur.slice(0, i) + seperator.symbol + cur.slice(i);
        }
      });
    }
    setDate(cur);
  };

  const handleOnClick = () => {
    setOpen(!open);
  };

  const handleChangeCalendar = (selec) => {
    const formattedDate = selec.format(format);
    setDate(formattedDate);
    setOpen(false);
  };

  return (
    <div>
      <input
        type="text"
        value={date}
        placeholder="placeholder"
        onChange={handleChangeDate}
      />
      <button type="button" onClick={handleOnClick}>
        <CiCalendar />
      </button>
      {open && (
        <Datetime
          input={false}
          timeFormat={false}
          dateFormat={format}
          value={date}
          onChange={handleChangeCalendar}
        />
      )}
    </div>
  );
};

export default DateSelect;
