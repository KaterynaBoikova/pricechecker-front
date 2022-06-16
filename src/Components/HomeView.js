import React, {useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import priceOperations from "../Redux/price-operations";
import pricesSelectors from "../Redux/price-selectors";
import Loader from "react-loader-spinner";
import styles from "../Styles/main.module.css";
import PDFFile from "./PDFFile";
import {PDFDownloadLink} from "@react-pdf/renderer";
import { AiOutlineDownload } from 'react-icons/ai';

export default function HomeView() {
    const loading = useSelector(pricesSelectors.getLoading);

    const [statusHL, setStatusHL] = useState(null);
    const [statusKremin, setStatusKremin] = useState(null);
    const [statusTopZamok, setStatusTopZamok] = useState(null);
    const [statusZamokUkr, setStatusZamokUkr] = useState(null);
    const [statusUkrLock, setStatusUkrLock] = useState(null);
    const [status740, setStatus740] = useState(null);
    const [statusZamochniki, setStatusZamochniki] = useState(null);
    const [statusSvitZamkiv, setStatusSvitZamkiv] = useState(null);
    const [statusKupiZamok, setStatusKupiZamok] = useState(null);

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
    const dispatch = useDispatch();
    const handleClickHL = (event) => {
        event.preventDefault();
        dispatch(priceOperations.fetchPricesHL());
        setStatusHL(true);
    };
    const handleClickKremin = (event) => {
        event.preventDefault();
        dispatch(priceOperations.fetchPricesKremin());
        setStatusKremin(true);
    };
    const handleClickKupiZamok = (event) => {
        event.preventDefault();
        dispatch(priceOperations.fetchPricesKupiZamok());
        setStatusKupiZamok(true);
    };
    const handleClickSvitZamkiv = (event) => {
        event.preventDefault();
        dispatch(priceOperations.fetchPricesSvitZamkiv());
        setStatusSvitZamkiv(true);
    };
    const handleClickZamochniki = (event) => {
        event.preventDefault();
        dispatch(priceOperations.fetchPricesZamochniki());
        setStatusZamochniki(true);
    };
    const handleClick740 = (event) => {
        event.preventDefault();
        dispatch(priceOperations.fetchPrices740());
        setStatus740(true);
    };
    const handleClickUkrLock = (event) => {
        event.preventDefault();
        dispatch(priceOperations.fetchPricesUkrLock());
        setStatusUkrLock(true);
    };
    const handleClickZamokUkr = (event) => {
        event.preventDefault();
        dispatch(priceOperations.fetchPricesZamokUkr());
        setStatusZamokUkr(true);
    };
    const handleClickTopZamok = (event) => {
        event.preventDefault();
        dispatch(priceOperations.fetchPricesTopZamok());
        setStatusTopZamok(true);
    };

    return (
        <>
            <div className={styles.printSection}>
                <PDFDownloadLink document={<PDFFile data={dataPDF}/>} fileName="priceChecker.pdf">
                    {({loading}) => (loading? <button className={styles.printBTNLoading}>Loading <AiOutlineDownload/></button>:  <button className={styles.printBTN}>Download<AiOutlineDownload/></button>)}
                </PDFDownloadLink>
            </div>
            {loading && <Loader
                type="ThreeDots"
                color="teal"
                height={130}
                width={130}
                style={{
                    textAlign: "center",
                }}
            />}

            <div className={styles.wrapper}>

                <div className={styles.column0}>
                    <div className={styles.columnHeadersModel}>Model</div>
                    {statusHL && houseLock.map(({ model }) => (
                        <div className={styles.cellModel}>{model}</div>
                    ))}
                </div>

            <div className={styles.column1}>
                <div className={styles.columnHeaders}><button className={styles.btnMain} type="button" onClick={handleClickHL}>HouseLock</button></div>
                {statusHL && houseLock.map(({ model, priceHouseLock, link}) => (
                        <div className={styles.cell}><a href={link} target="_blank" rel="noreferrer">{priceHouseLock}</a></div>
                ))}
            </div>

                <div className={styles.column2}>
                    <div className={styles.columnHeaders}><button className={styles.btnMain} type="button" onClick={handleClickKremin}>Kremin</button></div>
                    {statusKremin && kremin.map(({ model, priceKremin, link }) => (
                <div className={styles.cell}><a href={link} target="_blank" rel="noreferrer">{priceKremin}</a></div>
                ))}
                </div>

                <div className={styles.column3}>
                    <div className={styles.columnHeaders}><button className={styles.btnMain} type="button" onClick={handleClickTopZamok}>TopZamok</button></div>
                    {statusTopZamok && topZamok.map(({ model, priceTopZamok, link }) => (
                        <div className={styles.cell}><a href={link} target="_blank" rel="noreferrer">{priceTopZamok}</a></div>
                    ))}
                </div>

                <div className={styles.column4}>
                    <div className={styles.columnHeaders}><button className={styles.btnMain} type="button" onClick={handleClickZamokUkr}>ZamokUkr</button></div>
                    {statusZamokUkr && zamokUkr.map(({ model, priceZamokUkr, link }) => (
                        <div className={styles.cell}><a href={link} target="_blank" rel="noreferrer">{priceZamokUkr}</a></div>
                    ))}
                </div>

                <div className={styles.column5}>
                    <div className={styles.columnHeaders}><button className={styles.btnMain} type="button" onClick={handleClick740}>ua740</button></div>
                    {status740 && ua740.map(({ model, price740, link }) => (
                        <div className={styles.cell}><a href={link} target="_blank" rel="noreferrer">{price740}</a></div>
                    ))}
                </div>

                <div className={styles.column6}>
                    <div className={styles.columnHeaders}><button className={styles.btnMain} type="button" onClick={handleClickKupiZamok}>KupiZamok</button></div>
                    {statusKupiZamok && kupiZamok.map(({ model, priceKupiZamok, link }) => (
                        <div className={styles.cell}><a href={link} target="_blank" rel="noreferrer">{priceKupiZamok}</a></div>
                    ))}
                </div>

                <div className={styles.column7}>
                    <div className={styles.columnHeaders}><button className={styles.btnMain} type="button" onClick={handleClickUkrLock}>UkrLock</button></div>
                    {statusUkrLock && ukrLock.map(({ model, priceUkrLock, link }) => (
                        <div className={styles.cell}><a href={link} target="_blank" rel="noreferrer">{priceUkrLock}</a></div>
                    ))}
                </div>

                <div className={styles.column8}>
                    <div className={styles.columnHeaders}><button className={styles.btnMain} type="button" onClick={handleClickZamochniki}>Zamochniki</button></div>
                    {statusZamochniki && zamochniki.map(({ model, priceZamochniki, link }) => (
                        <div className={styles.cell}><a href={link} target="_blank" rel="noreferrer">{priceZamochniki}</a></div>
                    ))}
                </div>

                <div className={styles.column9}>
                    <div className={styles.columnHeaders}><button className={styles.btnMain} type="button" onClick={handleClickSvitZamkiv}>SvitZamkiv</button></div>
                    {statusSvitZamkiv && svitZamkiv.map(({ model, priceSvitZamkiv, link }) => (
                        <div className={styles.cell}><a href={link} target="_blank" rel="noreferrer">{priceSvitZamkiv}</a></div>
                    ))}
                </div>

            </div>
            </>
    )
}