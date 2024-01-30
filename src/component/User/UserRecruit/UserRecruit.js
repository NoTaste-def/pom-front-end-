import react from "react";
import { useState } from "react";
import styles from "./UserRecruit.module.css";
import UserPage from "./UserPage.js";
import CompanyPage from "./CompanyPage.js";

const UserRecruit = () => {
  const [isUser, setIsUser] = useState(true);

  return (
    <div>
      <header></header>
      <nav></nav>
      <main>{isUser ? <UserPage /> : <CompanyPage />}</main>
      <footer></footer>
    </div>
  );
};

export default UserRecruit;
