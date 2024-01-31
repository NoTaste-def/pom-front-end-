import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import img from "../../../../test.jpg";

import styles from "./SetUserSheet.module.css";
import Army from "./Army";
import Edu from "./Edu";
import His from "./His";
import Tech from "./Tech";
import Lang from "./Lang";

const SetUserSheet = () => {
  const [his, setHis] = useState([{}]); // 경력 정보 관리할 객체
  const [tech, setTech] = useState([{}]); // 기술자격증 정보 관리할 객체
  const [lang, setLang] = useState([{}]); // 어학자격증 정보 관리할 객체
  const [fade, setFade] = useState();

  const [armyStat, setArmyStat] = useState(false);
  const [eduStat, setEduStat] = useState(false);
  const [hisStat, setHisStat] = useState(false);
  const [techStat, setTechStat] = useState(false);
  const [langStat, setLangStat] = useState(false);

  // 병역 모달창 관리
  const openArmy = () => {
    setArmyStat(true);
  };
  const closeArmy = () => {
    setArmyStat(false);
  };

  // 학력 모달창 관리
  const openEdu = () => {
    setEduStat(true);
  };
  const closeEdu = () => {
    setEduStat(false);
  };

  // 경력 모달창 관리
  const openHis = () => {
    setHisStat(true);
  };
  const closeHis = () => {
    setHisStat(false);
  };

  // 기술 모달창 관리
  const openTech = () => {
    setTechStat(true);
  };
  const closeTech = () => {
    setTechStat(false);
  };

  // 언어 모달창 관리
  const openLang = () => {
    setLangStat(true);
  };
  const closeLang = () => {
    setLangStat(false);
  };
  //

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
    <div className={`setContainer ${styles.start} ${fade}`}>
      <div className={styles.Navbar}>
        <h4>이력서 작성</h4>
      </div>
      <div className={styles.defaultStatusFlex}>
        <img
          alt="증명사진"
          src={img}
          style={({ height: "132px" }, { width: "103px" })}
        />
        <ul>
          <li>이름 : 김영권</li>
          <li>이메일 : 1234@1234</li>
          <li>전화번호 : 1234</li>
        </ul>
      </div>

      <div className={styles.mainContainer}>
        <div>
          <button className={styles.armyBtn} onClick={openArmy}>
            병역
          </button>
          <Army isOpen={armyStat} onClose={closeArmy} />
        </div>
        <div>
          <button className={styles.eduBtn} onClick={openEdu}>
            학력
          </button>
          <Edu isOpen={eduStat} onClose={closeEdu} />
        </div>
        <div>
          <button className={styles.hisBtn} onClick={openHis}>
            경력
          </button>
          <His isOpen={hisStat} onClose={closeHis} his={his} setHis={setHis} />
        </div>
        <div>
          <button className={styles.techBtn} onClick={openTech}>
            기술
          </button>
          <Tech
            isOpen={techStat}
            onClose={closeTech}
            tech={tech}
            setTech={setTech}
          />
        </div>
        <div>
          <button className={styles.langBtn} onClick={openLang}>
            어학
          </button>
          <Lang
            isOpen={langStat}
            onClose={closeLang}
            lang={lang}
            setLang={setLang}
          />
        </div>
      </div>
      <div className={styles.footerContainer}>
        <button className={styles.submitBtn}>제출하기</button>
      </div>
    </div>
  );
};

const handleFormSubmit = (event) => {
  event.preventDefault();
};

export default SetUserSheet;
