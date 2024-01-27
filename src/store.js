import { createSlice, configureStore } from "@reduxjs/toolkit";

const dummy = createSlice({
  name: "dummyResume",
  initialState: {
    user_db: {
      userId: "1234",
      userName: "홍길동",
      resume: {
        userId: "1234",
      },
      employmentId: "123456",
    },
    resume_db: {
      userId: "1234",
      army_yn: "Y",
      army_period: "20150101-20160101",
      army_position: "병사",
      education_elementary: "초등학교1",
      education_middle: "중학교1",
      education_high: "고등학교1",
      education_univ: "대학교1",
      education_more_univ: "대학교2",
    },
    history_db: {
      userId: "1234",
      history_period: "20160101-20180101",
      history_company: "ABC 주식회사",
      history_position: "개발자",
    },
    tech_db: {
      userId: "1234",
      tech_name: "자바 개발자",
      tech_get_day: "20170101",
      tech_authority: "IT 자격시험소",
      tech_certification_status: 1,
    },
    voca_db: {
      userId: "1234",
      voca_name: "TOEFL",
      voca_score: 100,
      voca_date: "20151201",
    },
    awards_db: {
      userId: "1234",
      awards_name: "우수사원상",
      awards_authority: "회사 내부",
      awards_get: "20171215",
    },
  },
  reducers: {},
});

export default configureStore({
  reducer: {
    // 작명 : state이름.reducer <--- .reducer 안쓰면 적용 안됨.
    dummy: dummy.reducer,
  },
});
