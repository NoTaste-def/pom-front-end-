import { useState } from "react";
import { Link } from "react-router-dom";
import Nav from "react-bootstrap/Nav";

import styles from "./SetUserSheet.module.css";
import Army from "./Army";
import Edu from "./Edu";
import His from "./His";
import Tech from "./Tech";
import Lang from "./Lang";

const SetUserSheet = () => {
  const pageName = "입력하셈.";
  const [history, setHistory] = useState([{}]); // 경력 정보 관리할 객체
  const [tech, setTech] = useState([{}]); // 기술자격증 정보 관리할 객체
  const [lang, setLang] = useState([{}]); // 어학자격증 정보 관리할 객체

  return (
    <div>
      <div className={styles.Navbar}>
        <h4>{pageName}</h4>
      </div>
      <div className={styles.InputContainer}>
        <form onSubmit={handleFormSubmit}>
          <div>
            <h3>병역여부</h3>
            <Army />
          </div>
          <div>
            <h3>학력을 선택해 주세요.</h3>
            <Edu />
          </div>
          <div>
            <h3>경력을 입력해 주세요.</h3>
            <His history={history} setHistory={setHistory} />
          </div>
          <div>
            <h3>기술 자격증을 기재해 주세요.</h3>
            <Tech tech={tech} setTech={setTech} />
          </div>
          <div>
            <h3>어학 자격증을 기재해 주세요.</h3>
            <Lang lang={lang} setLang={setLang} />
          </div>
        </form>
        <Link to={"/"}>
          <button>제출하기</button>
        </Link>
      </div>
    </div>
  );
};

const handleFormSubmit = (event) => {
  event.preventDefault();
};

export default SetUserSheet;
