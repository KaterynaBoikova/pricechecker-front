import React, { useState } from "react";
import styles from "../Assets/styles/main.module.scss";
import { useSelector } from "react-redux";
import { PDFDownloadLink } from "@react-pdf/renderer";
import { AiOutlineDashboard, AiOutlineDownload } from "react-icons/ai";
import { GrUserWorker } from "react-icons/gr";
import pricesSelectors from "../Redux/price/price-selectors";
import Loader from "../Components/Loader";
import PDFFile from "./PDFFile";
import WorkerMenu from "./WorkerMenu";

export default function AppNav() {
  const [isShown, setIsShown] = useState(false);
  const handleWorkerMenu = () => {
    setIsShown((current) => !current);
  };

  const loadingData = useSelector(pricesSelectors.getLoading);
  const houseLock = useSelector(pricesSelectors.getHouseLock);
  const kremin = useSelector(pricesSelectors.getKremin);
  const topZamok = useSelector(pricesSelectors.getTopZamok);
  const zamokUkr = useSelector(pricesSelectors.getZamokUkr);
  const ua740 = useSelector(pricesSelectors.get740);
  const ukrLock = useSelector(pricesSelectors.getUkrLock);
  const zamochniki = useSelector(pricesSelectors.getZamochniki);
  const svitZamkiv = useSelector(pricesSelectors.getSvitZamkiv);
  const kupiZamok = useSelector(pricesSelectors.getKupiZamok);

  const dataPDF = {
    houseLock,
    kremin,
    topZamok,
    zamokUkr,
    ua740,
    ukrLock,
    zamochniki,
    svitZamkiv,
    kupiZamok,
  };

  return (
    <>
      <header className={styles.header}>
        <div className={styles.printSection}>
          <PDFDownloadLink
            document={<PDFFile data={dataPDF} />}
            fileName="priceChecker.pdf"
          >
            {({ loading }) =>
              loading ? (
                <button className={styles.btnNav}>
                  Loading <AiOutlineDownload className={styles.svgIcon} />
                </button>
              ) : (
                <button className={styles.btnNav}>
                  Download
                  <AiOutlineDownload className={styles.svgIcon} />
                </button>
              )
            }
          </PDFDownloadLink>
        </div>
        <div>
          <button className={styles.btnNav} onClick={handleWorkerMenu}>
            Worker
            <GrUserWorker className={styles.svgIcon} />
          </button>
        </div>
        <div>
          <a
            href="https://app-pricechecker-back.herokuapp.com/admin/queues"
            target="_blank"
            rel="noreferrer"
          >
            <button className={styles.btnNav}>
              <AiOutlineDashboard className={styles.svgIcon} />
            </button>
          </a>
        </div>
      </header>
      {isShown && <WorkerMenu />}
      <div className={styles.loader}>{loadingData && <Loader />}</div>
    </>
  );
}
