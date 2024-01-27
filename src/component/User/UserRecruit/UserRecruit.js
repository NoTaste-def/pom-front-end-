import react from "react";
import { useState } from "react";

import "../../../App.css";
const UserRecruit = () => {
  const [userInfo, setUserInfo] = useState([]);

  return (
    <div>
      <header>
        <div className="Nav">
          <h4 className="PageName">유저 채용공고</h4>
        </div>
      </header>
      <nav></nav>
      <main></main>
      <footer></footer>
    </div>
  );
};

export default UserRecruit;
