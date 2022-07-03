import React, {useState} from "react";
import styles from "../Styles/main.module.css";
import {useSelector} from "react-redux";
import {PDFDownloadLink} from "@react-pdf/renderer";
import {AiOutlineDashboard, AiOutlineDownload} from "react-icons/ai";
import {GrUserWorker} from 'react-icons/gr';
import pricesSelectors from "../Redux/price/price-selectors";
import Loader from '../Components/Loader';
import PDFFile from "./PDFFile";
import WorkerMenu from './WorkerMenu';

export default function AppNav() {
    const [isShown, setIsShown] = useState(false);
    const handleWorkerMenu = ()=>{
        setIsShown(current => !current);
    };

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
            <h2>Price Checker</h2>
            <div className={styles.printSection}>
                <PDFDownloadLink document={<PDFFile data={dataPDF}/>} fileName="priceChecker.pdf">
                    {({loading}) => (loading? <button className={styles.printBTNLoading}>Loading <AiOutlineDownload className={styles.iconL}/></button>:  <button className={styles.printBTN}>Download<AiOutlineDownload className={styles.iconMain}/></button>)}
                </PDFDownloadLink>
            </div>
            <div>
                <button className={styles.printBTN} onClick={handleWorkerMenu}>Worker<GrUserWorker className={styles.iconMain}/></button>
            </div>
            <div>
                <a className={styles.printBTN} href='https://app-pricechecker-back.herokuapp.com/admin/queues' target="_blank" rel="noreferrer"><AiOutlineDashboard className={styles.iconMainLink}/></a>
            </div>
        </header>
            {isShown && (<WorkerMenu/>)}
            <div className={styles.loader}>
            {loading && <Loader />}
            </div>
            </>
    );
}