import React from "react";
import styles from "./SetUserSheet.module.css";

const Army = () => {
  return (
    <div>
      <div>
        <h6>병역여부</h6>
        <select>
          <option>Y</option>
          <option>N</option>
        </select>
      </div>
      <div>
        <h6>복무 기간</h6>
        <input type="date" /> ~ <input type="date" />
      </div>
      <div>
        <h6>보직</h6>
        <input type="text" placeholder="복무 당시 보직" />
      </div>
    </div>
  );
};

export default Army;
