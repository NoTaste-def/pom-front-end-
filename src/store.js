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
export default configureStore({
  reducer: {
    // 작명 : state이름.reducer <--- .reducer 안쓰면 적용 안됨.
    posts: posts.reducer,
  },
});
