import React, { useEffect } from "react";
import styles from "../Assets/styles/main.module.scss";
import { AiOutlineCloseCircle, BsExclamationLg } from "react-icons/all";

export default function Error({ from, message, action }) {
  useEffect(() => {
    const timer = setTimeout(() => {
      action();
    }, 10000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className={styles.messageContainer}>
      <p className={styles.errorText}>
        <BsExclamationLg />
        {message}
      </p>
      <p className={styles.textFrom}>{from}</p>
      <button className={styles.closeBoxBtn} onClick={action}>
        <AiOutlineCloseCircle className={styles.closeBoxIcon} />
      </button>
    </div>
  );
}
