import React, {useState} from "react";
import axios from "axios";
import styles from '../Styles/main.module.css';
import {useDispatch} from "react-redux";
import jobsActions from "../Redux/jobs/jobs-action";
import ProgressBar from '../Components/ProgressBar';
import fetchStatus from "./helper";

const BASE_URL = 'https://app-pricechecker-back.herokuapp.com/api/getPrices/jobs/';
const LINK_PROGRESS = 'https://app-pricechecker-back.herokuapp.com/api/getPrices/jobs/progress/';
const JOB_NAME_TZ = 'topZamok';
const JOB_NAME_ZU = 'zamokUkr';

export default function WorkerMenu(){
    const dispatch = useDispatch();

    const [statusTZ, setStatusTZ] = useState({
        'progress': 0,
        'status': '',
        'jobId': '',
        'jobName': '',
    });

    const [statusZU, setStatusZU] = useState({
        'progress': 0,
        'status': '',
        'jobId': '',
        'jobName': '',
    });
    const errorZamokUkrJob = ()=>{dispatch(jobsActions.errorZamokUkrJob());}
    const errorTopZamokJob = ()=>{dispatch(jobsActions.errorTopZamokJob());}

    const handleClickTZ = async (event)=>{
        event.preventDefault();
        await axios.post(`${BASE_URL}${JOB_NAME_TZ}`)
                            .then(({data})=>{
                                dispatch(jobsActions.postJobTopZamokSuccess(data));
                                const {jobId} = data;
                                return fetchStatus(LINK_PROGRESS, jobId, setStatusTZ, errorTopZamokJob );
                            })
                            .catch(error=>dispatch(jobsActions.errorTopZamokJob(error.message)))
    };

    const handleClickZU = async (event)=>{
        event.preventDefault();
        await axios.post(`${BASE_URL}${JOB_NAME_ZU}`)
            .then(({data})=>{
                dispatch(jobsActions.postJobZamokUkrSuccess(data));
                const {jobId} = data;
                return fetchStatus(LINK_PROGRESS, jobId, setStatusZU, errorZamokUkrJob);
            })
            .catch(error=>dispatch(jobsActions.errorZamokUkrJob(error.message)))
    };

    return(
        <div className={styles.menu}>
            <div className={styles.menuWrapper}>
            <div className={styles.menuSide}>
                <button className={styles.btnMenuStart} onClick={handleClickTZ}>Start</button>
                <span className={styles.line}></span>
                <div className={styles.barWrapper}><ProgressBar progress={statusTZ.progress} label={`TopZamok ${statusTZ.status}`} /></div>
            </div>
            <div className={styles.menuSide}>
                <button className={styles.btnMenuStart} onClick={handleClickZU}>Start</button>
                <span className={styles.line}></span>
                <div><ProgressBar progress={statusZU.progress} label={`ZamokUkr ${statusZU.status}`} /></div>
            </div>
            </div>
        </div>
    )
}