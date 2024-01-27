import "./App.css";
import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Login from "../src/component/Login";

import UserMain from "../src/component/User/UserMain/UserMain";
import UserInfo from "./component/User/UserInfo/UserInfo";
import UserPort from "./component/User/UserPort/UserPort";
import UserRecruit from "./component/User/UserRecruit/UserRecruit";
import UserSheet from "./component/User/UserSheet/UserSheet";
import SetUserSheet from "./component/User/UserSheet/SetSheet/SetUserSheet";

import CoApplli from "./component/Co/CoApplli/CoApplli";
import CoInfo from "./component/Co/CoInfo/CoInfo";
import CoMain from "./component/Co/CoMain/CoMain";
import CoTag from "./component/Co/CoTag/CoTag";
import CoUp from "./component/Co/CoUp/CoUp";

function App() {
  return (
    <Routes>
      {/* <Route path="/" Component={Login} />
        <Route path="/UserMain" Component={UserMain} />
        <Route path="/UserInfo" Component={UserInfo} />
        <Route path="/UserPort" Component={UserPort} />
        <Route path="/UserRecruit" Component={UserRecruit} /> */}
      <Route path="/" element={<UserSheet />} />
      <Route path="/setusersheet" element={<SetUserSheet />} />

      {/* <Route path="/CoApplli" Component={CoApplli} />
        <Route path="/CoInfo" Component={CoInfo} />
        <Route path="/CoMain" Component={CoMain} />
        <Route path="/CoTag" Component={CoTag} />
        <Route path="/CoUp" Component={CoUp} /> */}
    </Routes>
  );
}

export default App;
