import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import priceOperations from "../Redux/price/price-operations";
import pricesSelectors from "../Redux/price/price-selectors";
import styles from "../Assets/styles/main.module.scss";
import jobsSelectors from "../Redux/jobs/jobs-selectors";
import removeUAH from "../Components/helper";

export default function HomeView() {
  const getZamokUkrJob = useSelector(jobsSelectors.getZamokUkrJob);
  const getTopZamokJob = useSelector(jobsSelectors.getTopZamokJob);

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

  const dispatch = useDispatch();
  const handleClickHL = (event) => {
    dispatch(priceOperations.fetchPricesHL());
    setStatusHL(true);
  };
  const handleClickKremin = (event) => {
    dispatch(priceOperations.fetchPricesKremin());
    setStatusKremin(true);
  };
  const handleClickKupiZamok = (event) => {
    dispatch(priceOperations.fetchPricesKupiZamok());
    setStatusKupiZamok(true);
  };
  const handleClickSvitZamkiv = (event) => {
    dispatch(priceOperations.fetchPricesSvitZamkiv());
    setStatusSvitZamkiv(true);
  };
  const handleClickZamochniki = (event) => {
    dispatch(priceOperations.fetchPricesZamochniki());
    setStatusZamochniki(true);
  };
  const handleClick740 = (event) => {
    dispatch(priceOperations.fetchPrices740());
    setStatus740(true);
  };
  const handleClickUkrLock = (event) => {
    dispatch(priceOperations.fetchPricesUkrLock());
    setStatusUkrLock(true);
  };
  const handleClickZamokUkr = (event) => {
    dispatch(priceOperations.fetchPricesZamokUkr(getZamokUkrJob.jobId));
    setStatusZamokUkr(true);
  };
  const handleClickTopZamok = (event) => {
    dispatch(priceOperations.fetchPricesTopZamok(getTopZamokJob.jobId));
    setStatusTopZamok(true);
  };

  return (
    <>
      <div className={styles.mainContainer}>
        <div className={styles.mainWrapper}>
          <div className={styles.column0}>
            <div className={styles.columnHeaderModel}>Model</div>
            {statusHL &&
              houseLock.map(({ model }, index) => (
                <div className={styles.cellModel} key={index}>
                  {model}
                </div>
              ))}
          </div>

          <div className={styles.column1}>
            <div className={styles.columnHeader}>
              <button
                className={styles.btnMain}
                type="button"
                onClick={handleClickHL}
              >
                HouseLock
              </button>
            </div>
            {statusHL &&
              houseLock.map(({ model, priceHouseLock, link }, index) => (
                <div className={styles.cell} key={index}>
                  {link === "" ? (
                    <a
                      href={link}
                      aria-disabled="true"
                      className={styles.linkNotActive}
                    >
                      {priceHouseLock}
                    </a>
                  ) : (
                    <a href={link} target="_blank" rel="noreferrer">
                      {removeUAH(priceHouseLock)}
                    </a>
                  )}
                </div>
              ))}
          </div>

          <div className={styles.column1}>
            <div className={styles.columnHeader}>
              <button
                className={styles.btnMain}
                type="button"
                onClick={handleClickKremin}
              >
                Kremin
              </button>
            </div>
            {statusKremin &&
              kremin.map(({ model, priceKremin, link }, index) => (
                <div className={styles.cell} key={index}>
                  {link === "" ? (
                    <a
                      href={link}
                      aria-disabled="true"
                      className={styles.linkNotActive}
                    >
                      {priceKremin}
                    </a>
                  ) : (
                    <a href={link} target="_blank" rel="noreferrer">
                      {removeUAH(priceKremin)}
                    </a>
                  )}
                </div>
              ))}
          </div>

          <div className={styles.column1}>
            <div className={styles.columnHeader}>
              <button
                className={styles.btnMain}
                type="button"
                onClick={handleClickTopZamok}
              >
                TopZamok
              </button>
            </div>
            {statusTopZamok &&
              topZamok.map(({ model, priceTopZamok, link }, index) => (
                <div className={styles.cell} key={index}>
                  {link === "" ? (
                    <a
                      href={link}
                      aria-disabled="true"
                      className={styles.linkNotActive}
                    >
                      {priceTopZamok}
                    </a>
                  ) : (
                    <a href={link} target="_blank" rel="noreferrer">
                      {removeUAH(priceTopZamok)}
                    </a>
                  )}
                </div>
              ))}
          </div>

          <div className={styles.column1}>
            <div className={styles.columnHeader}>
              <button
                className={styles.btnMain}
                type="button"
                onClick={handleClickZamokUkr}
              >
                ZamokUkr
              </button>
            </div>
            {statusZamokUkr &&
              zamokUkr.map(({ model, priceZamokUkr, link }, index) => (
                <div className={styles.cell} key={index}>
                  {link === "" ? (
                    <a
                      href={link}
                      aria-disabled="true"
                      className={styles.linkNotActive}
                    >
                      {priceZamokUkr}
                    </a>
                  ) : (
                    <a href={link} target="_blank" rel="noreferrer">
                      {removeUAH(priceZamokUkr)}
                    </a>
                  )}
                </div>
              ))}
          </div>

          <div className={styles.column1}>
            <div className={styles.columnHeader}>
              <button
                className={styles.btnMain}
                type="button"
                onClick={handleClick740}
              >
                ua740
              </button>
            </div>
            {status740 &&
              ua740.map(({ model, price740, link }, index) => (
                <div className={styles.cell} key={index}>
                  {link === "" ? (
                    <a
                      href={link}
                      aria-disabled="true"
                      className={styles.linkNotActive}
                    >
                      {price740}
                    </a>
                  ) : (
                    <a href={link} target="_blank" rel="noreferrer">
                      {removeUAH(price740)}
                    </a>
                  )}
                </div>
              ))}
          </div>

          <div className={styles.column1}>
            <div className={styles.columnHeader}>
              <button
                className={styles.btnMain}
                type="button"
                onClick={handleClickKupiZamok}
              >
                KupiZamok
              </button>
            </div>
            {statusKupiZamok &&
              kupiZamok.map(({ model, priceKupiZamok, link }, index) => (
                <div className={styles.cell} key={index}>
                  {link === "" ? (
                    <a
                      href={link}
                      aria-disabled="true"
                      className={styles.linkNotActive}
                    >
                      {priceKupiZamok}
                    </a>
                  ) : (
                    <a href={link} target="_blank" rel="noreferrer">
                      {removeUAH(priceKupiZamok)}
                    </a>
                  )}
                </div>
              ))}
          </div>

          <div className={styles.column1}>
            <div className={styles.columnHeader}>
              <button
                className={styles.btnMain}
                type="button"
                onClick={handleClickUkrLock}
              >
                UkrLock
              </button>
            </div>
            {statusUkrLock &&
              ukrLock.map(({ model, priceUkrLock, link }, index) => (
                <div className={styles.cell} key={index}>
                  {link === "" ? (
                    <a
                      href={link}
                      aria-disabled="true"
                      className={styles.linkNotActive}
                    >
                      {priceUkrLock}
                    </a>
                  ) : (
                    <a href={link} target="_blank" rel="noreferrer">
                      {removeUAH(priceUkrLock)}
                    </a>
                  )}
                </div>
              ))}
          </div>

          <div className={styles.column1}>
            <div className={styles.columnHeader}>
              <button
                className={styles.btnMain}
                type="button"
                onClick={handleClickZamochniki}
              >
                Zamochniki
              </button>
            </div>
            {statusZamochniki &&
              zamochniki.map(({ model, priceZamochniki, link }, index) => (
                <div className={styles.cell} key={index}>
                  {link === "" ? (
                    <a
                      href={link}
                      aria-disabled="true"
                      className={styles.linkNotActive}
                    >
                      {priceZamochniki}
                    </a>
                  ) : (
                    <a href={link} target="_blank" rel="noreferrer">
                      {removeUAH(priceZamochniki)}
                    </a>
                  )}
                </div>
              ))}
          </div>

          <div className={styles.column1}>
            <div className={styles.columnHeader}>
              <button
                className={styles.btnMain}
                type="button"
                onClick={handleClickSvitZamkiv}
              >
                SvitZamkiv
              </button>
            </div>
            {statusSvitZamkiv &&
              svitZamkiv.map(({ model, priceSvitZamkiv, link }, index) => (
                <div className={styles.cell} key={index}>
                  {link === "" ? (
                    <a
                      href={link}
                      aria-disabled="true"
                      className={styles.linkNotActive}
                    >
                      {priceSvitZamkiv}
                    </a>
                  ) : (
                    <a href={link} target="_blank" rel="noreferrer">
                      {removeUAH(priceSvitZamkiv)}
                    </a>
                  )}
                </div>
              ))}
          </div>
        </div>
      </div>
    </>
  );
}
