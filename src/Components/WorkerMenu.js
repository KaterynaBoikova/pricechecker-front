import React from "react";
import styles from "../Assets/styles/main.module.scss";
import { useDispatch, useSelector } from "react-redux";
import jobsSelectors from "../Redux/jobs/jobs-selectors";
import jobsOperations from "../Redux/jobs/jobs-operations";
import ProgressBar from "./ProgressBar";

export default function WorkerMenu() {
  const dispatch = useDispatch();
  const getTopZamokJob = useSelector(jobsSelectors.getTopZamokJob);
  const getZamokUkrJob = useSelector(jobsSelectors.getZamokUkrJob);

  const handleClickTZ = async (event) => {
    event.preventDefault();
    dispatch(jobsOperations.postJobAndGetProgressTZ());
  };

  const handleClickZU = async (event) => {
    event.preventDefault();
    dispatch(jobsOperations.postJobAndGetProgressZU());
  };

  return (
    <div className={styles.workerMenu}>
      <div className={styles.workerMenuSide}>
        <div className={styles.workerMenuData}>
          <h4>Top Zamok Job</h4>
          <p>Status: {getTopZamokJob.status}</p>
          <button className={styles.btnWorker} onClick={handleClickTZ}>
            Start
          </button>
        </div>
        <div className={styles.workerMenuBar}>
          <ProgressBar progress={getTopZamokJob.progress} />
        </div>
      </div>
      <div className={styles.workerMenuSide}>
        <div className={styles.workerMenuData}>
          <h4>Zamok Ukr Job</h4>
          <p>Status: {getZamokUkrJob.status}</p>
          <button className={styles.btnWorker} onClick={handleClickZU}>
            Start
          </button>
        </div>
        <div className={styles.workerMenuBar}>
          <ProgressBar progress={getZamokUkrJob.progress} />
        </div>
      </div>
    </div>
  );
}
