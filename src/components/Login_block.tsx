import { useContext, useState } from "react";
import Link from "next/link";
import styles from "../styles/components/Login_block.module.css";
import { LoginContext } from '../contexts/LoginContext';
import Cookies from "js-cookie";


export function Login_block() {
  const {username, handleInput } = useContext(LoginContext);
  const Login = () =>{
    Cookies.set('username', username);
  }


  return (
    <div className={styles.container}>
      <h2>Bem-vindo</h2>
      <div className={styles.text}>
        <img src="/icons/github.svg" />
        <p>Faça login com seu Github para começar</p>
      </div>
      <div className={styles.inputButton}>
        <input
          placeholder="Digite seu username"
          value={username}
          onChange={(e) => handleInput(e.target.value)}
        ></input>
        <Link href="/">
          <button type="button" onClick={Login}>
            <img src="/icons/seta.svg"></img>
          </button>
        </Link>
      </div>
    </div>
  );
}
