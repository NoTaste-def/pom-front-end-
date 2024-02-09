import { createSlice, configureStore } from "@reduxjs/toolkit";

const posts = createSlice({
  name: "posts",
  initialState: [
    {
      id: 1,
      title: "제목1 : 네이버 상반기 채용 공고",
      author: "홍길동",
      date: "2024-01-01",
      exp: "2024-05-01",
    },
    {
      id: 2,
      title: "제목2 : 카카오 상반기 채용 공고",
      author: "아무개",
      date: "2024-12-31",
      exp: "2024-05-01",
    },
  ],
  reducers: {},
});

const usersheet = createSlice({
  name: "usersheet",
  initialState: {
    userId: "",
    army_yn: "",
    army_start_period: "",
    army_end_period: "",
    army_position: "",
    army_rank: "",
    army_number: "",
    reason_no_army: "",
    education: {
      education: "",
      start_period: "",
      end_period: "",
      school_name: "",
      edu_status: "",
      dept: "",
      dept_type_name: "",
      grade: "",
    },
    history: [
      {
        id: 0,
        history_start_period: "",
        history_end_period: "",
        history_company: "",
        history_position: "",
        history_department: "",
      },
    ],
    tech: [
      {
        id: 0,
        tech_name: "",
        tech_get_day: "",
        tech_authority: "",
        tech_certification_status: 0,
      },
    ],
    voca: [{ id: 0, voca_name: "", voca_score: "", voca_date: "" }],
    awards: [
      {
        id: 0,
        awards_name: "",
        awards_authority: "",
        awards_get: "",
      },
    ],
  },
  reducers: {
    ArmyYN(state, action) {
      state.army_yn = action.payload;
    },
    ReasonNo(state, action) {
      state.reason_no_army = action.payload;
    },
    setStartArmy(state, action) {
      state.army_start_period = action.payload;
    },
    setEndArmy(state, action) {
      state.army_end_period = action.payload;
    },
    setWhichSurved(state, action) {
      state.army_position = action.payload;
    },
    setMilRank(state, action) {
      state.army_rank = action.payload;
    },
    setSurvNum(state, action) {
      state.army_number = action.payload;
    },
    addHis(state, action) {
      state.history.push(action.payload);
    },
    deleteHis(state, action) {
      const index = state.history.findIndex((item) => {
        return item.id === action.payload;
      });
      state.history.splice(index, 1);
    },
    setStartHis(state, action) {
      let [index, value] = action.payload;
      state.history[index].history_start_period = value;
    },
    setEndHis(state, action) {
      let [index, value] = action.payload;
      state.history[index].history_end_period = value;
    },
  },
});

export let {
  ArmyYN,
  ReasonNo,
  setStartArmy,
  setEndArmy,
  setWhichSurved,
  setMilRank,
  setSurvNum,
  addHis,
  deleteHis,
  setStartHis,
  setEndHis,
} = usersheet.actions;

export default configureStore({
  reducer: {
    // 작명 : state이름.reducer <--- .reducer 안쓰면 적용 안됨.
    posts: posts.reducer,
    usersheet: usersheet.reducer,
  },
});
