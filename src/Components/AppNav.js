import React, { useState } from "react";
import { useDispatch } from "react-redux";
import styles from "../Styles/main.module.css";
import PDFFile from "./PDFFile";
import {PDFDownloadLink} from "@react-pdf/renderer";

export default function AppNav() {
    return (
        <header className={styles.header}>
            <h2>Check Prices</h2>
        <PDFDownloadLink document={<PDFFile />} fileName="priceChecker.pdf">
            {({loading}) => (loading? <button>Loading</button>:  <button>Download</button>)}
        </PDFDownloadLink>
        </header>
    );
}