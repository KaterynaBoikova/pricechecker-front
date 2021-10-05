import React, { useState } from "react";
import { useDispatch } from "react-redux";
import styles from "../Styles/main.module.css";

export default function AppNav() {
    return (
        <header className={styles.header}>
            <h2>Check Prices</h2>
        </header>
    );
}