import React from "react";
import styles from "./Loading.module.scss";

export default function Loading() {
  return (
    <div className="centerContent">
      <div className={styles.skCircle}>
        <div className={`${styles.skCircle1} ${styles.skChild}`}></div>
        <div className={`${styles.skCircle2} ${styles.skChild}`}></div>
        <div className={`${styles.skCircle3} ${styles.skChild}`}></div>
        <div className={`${styles.skCircle4} ${styles.skChild}`}></div>
        <div className={`${styles.skCircle5} ${styles.skChild}`}></div>
        <div className={`${styles.skCircle6} ${styles.skChild}`}></div>
        <div className={`${styles.skCircle7} ${styles.skChild}`}></div>
        <div className={`${styles.skCircle8} ${styles.skChild}`}></div>
        <div className={`${styles.skCircle9} ${styles.skChild}`}></div>
        <div className={`${styles.skCircle10} ${styles.skChild}`}></div>
        <div className={`${styles.skCircle11} ${styles.skChild}`}></div>
        <div className={`${styles.skCircle12} ${styles.skChild}`}></div>
      </div>
    </div>
  );
}