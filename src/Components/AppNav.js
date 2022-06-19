import React from "react";
import styles from "../Styles/main.module.css";
import {useSelector} from "react-redux";
import {PDFDownloadLink} from "@react-pdf/renderer";
import {AiOutlineDownload} from "react-icons/ai";
import pricesSelectors from "../Redux/price-selectors";
import Loader from '../Components/Loader';
import PDFFile from "./PDFFile";

export default function AppNav() {
    const loading = useSelector(pricesSelectors.getLoading);
    const houseLock = useSelector(pricesSelectors.getHouseLock);
    const kremin = useSelector(pricesSelectors.getKremin);
    const topZamok = useSelector(pricesSelectors.getTopZamok);
    const zamokUkr = useSelector(pricesSelectors.getZamokUkr);
    const ua740 = useSelector(pricesSelectors.get740);
    const ukrLock = useSelector(pricesSelectors.getUkrLock);
    const zamochniki = useSelector(pricesSelectors.getZamochniki);
    const svitZamkiv = useSelector(pricesSelectors.getSvitZamkiv);
    const kupiZamok = useSelector(pricesSelectors.getKupiZamok);

    const dataPDF = {houseLock, kremin, topZamok, zamokUkr, ua740, ukrLock, zamochniki, svitZamkiv, kupiZamok};

    return (
        <>
        <header className={styles.header}>
            <h2>Check Prices</h2>
            <div className={styles.printSection}>
                <PDFDownloadLink document={<PDFFile data={dataPDF}/>} fileName="priceChecker.pdf">
                    {({loading}) => (loading? <button className={styles.printBTNLoading}>Loading <AiOutlineDownload className={styles.iconL}/></button>:  <button className={styles.printBTN}>Download<AiOutlineDownload className={styles.iconMain}/></button>)}
                </PDFDownloadLink>
            </div>
        </header>
            <div className={styles.loader}>
            {loading && <Loader />}
            </div>
            </>
    );
}