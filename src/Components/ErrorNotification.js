import React from "react";
import { useSelector, useDispatch } from "react-redux";
import pricesSelectors from "../Redux/price/price-selectors";
import priceActions from "../Redux/price/price-actions";
import jobsActions from "../Redux/jobs/jobs-action";
import jobsSelectors from "../Redux/jobs/jobs-selectors";
import Error from "./Error";
import styles from "../Assets/styles/main.module.scss";

export default function ErrorNotification() {
  const dispatch = useDispatch();
  const getHouseLockError = useSelector(pricesSelectors.getHouseLockError);
  const getKreminError = useSelector(pricesSelectors.getKreminError);
  const getZamokUkrError = useSelector(pricesSelectors.getZamokUkrError);
  const getTopZamokError = useSelector(pricesSelectors.getTopZamokError);
  const getZamochnikiError = useSelector(pricesSelectors.getZamochnikiError);
  const getKupiZamokError = useSelector(pricesSelectors.getKupiZamokError);
  const getUkrLockError = useSelector(pricesSelectors.getUkrLockError);
  const getSvitZamkivError = useSelector(pricesSelectors.getSvitZamkivError);
  const get740Error = useSelector(pricesSelectors.get740Error);

  const getZamokUkrJobError = useSelector(jobsSelectors.getZamokUkrJobError);
  const getTopZamokJobError = useSelector(jobsSelectors.getTopZamokJobError);

  const hideErrorHL = () => {
    dispatch(priceActions.hideErrorHL());
  };
  const hideErrorKremin = () => {
    dispatch(priceActions.hideErrorKremin());
  };
  const hideErrorZamokUkr = () => {
    dispatch(priceActions.hideErrorZamokUkr());
  };
  const hideErrorTopZamok = () => {
    dispatch(priceActions.hideErrorTopZamok());
  };
  const hideErrorZamochniki = () => {
    dispatch(priceActions.hideErrorZamochniki());
  };
  const hideErrorUkrLock = () => {
    dispatch(priceActions.hideErrorUkrLock());
  };
  const hideError740 = () => {
    dispatch(priceActions.hideError740());
  };
  const hideErrorSvitZamkiv = () => {
    dispatch(priceActions.hideErrorSvitZamkiv());
  };
  const hideErrorKupiZamok = () => {
    dispatch(priceActions.hideErrorKupiZamok());
  };

  const hideErrorZamokUkrJob = () => {
    dispatch(jobsActions.hideErrorZamokUkrJob());
  };
  const hideErrorTopZamokJob = () => {
    dispatch(jobsActions.hideErrorTopZamokJob());
  };

  return (
    <div className={styles.errorContainer}>
      {getHouseLockError.isOpen && getHouseLockError.error && (
        <Error
          from={"getHouseLockError"}
          message={getHouseLockError.error}
          action={hideErrorHL}
        />
      )}
      {getKreminError.isOpen && getKreminError.error && (
        <Error
          from={"getKreminError"}
          message={getKreminError.error}
          action={hideErrorKremin}
        />
      )}
      {getZamokUkrError.isOpen && getZamokUkrError.error && (
        <Error
          from={"getZamokUkrError"}
          message={getZamokUkrError.error}
          action={hideErrorZamokUkr}
        />
      )}
      {getTopZamokError.isOpen && getTopZamokError.error && (
        <Error
          from={"getTopZamokError"}
          message={getTopZamokError.error}
          action={hideErrorTopZamok}
        />
      )}
      {getZamochnikiError.isOpen && getZamochnikiError.error && (
        <Error
          from={"getZamochnikiError"}
          message={getZamochnikiError.error}
          action={hideErrorZamochniki}
        />
      )}
      {getKupiZamokError.isOpen && getKupiZamokError.error && (
        <Error
          from={"getKupiZamokError"}
          message={getKupiZamokError.error}
          action={hideErrorKupiZamok}
        />
      )}
      {getUkrLockError.isOpen && getUkrLockError.error && (
        <Error
          from={"getUkrLockError"}
          message={getUkrLockError.error}
          action={hideErrorUkrLock}
        />
      )}
      {getSvitZamkivError.isOpen && getSvitZamkivError.error && (
        <Error
          from={"getSvitZamkivError"}
          message={getSvitZamkivError.error}
          action={hideErrorSvitZamkiv}
        />
      )}
      {get740Error.isOpen && get740Error.error && (
        <Error
          from={"get740Error"}
          message={get740Error.error}
          action={hideError740}
        />
      )}

      {getZamokUkrJobError.isOpen && getZamokUkrJobError.error && (
        <Error
          from={"jobZamokUKr"}
          message={getZamokUkrJobError.error}
          action={hideErrorZamokUkrJob}
        />
      )}
      {getTopZamokJobError.isOpen && getTopZamokJobError.error && (
        <Error
          from={"jobTopZamok"}
          message={getTopZamokJobError.error}
          action={hideErrorTopZamokJob}
        />
      )}
    </div>
  );
}
