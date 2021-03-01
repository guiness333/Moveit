import React from "react";
import { Logo } from "../components/Logo";
import { Login_block } from "../components/Login_block";
import styles from "../styles/pages/Login.module.css";

export default function Login() {
  return (
    <div className={styles.container}>
      <section>
        <img src='/icons/backLogo.svg' width='600rem'></img>
      </section>
      <section>
        <Logo />
        <Login_block />
      </section>
    </div>
  );
}
