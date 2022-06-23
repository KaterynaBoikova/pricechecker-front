import React from "react";
import {VscDebugStart} from 'react-icons/vsc';
import axios from "axios";
import styles from '../Styles/main.module.css';

export default function WorkerMenu(){
    const postJobTZ = async ()=>{
        await axios.post('http://localhost:8060/api/getPrices/topzamok/job')
            .then(({data})=>data)
            .catch(error=>error.message)
    };

    const postJobZU = async ()=>{
        await axios.post('http://localhost:8060/api/getPrices/zamokukr/job')
            .then(({data})=>data)
            .catch(error=>error.message)
    };

    return(
        <div className={styles.menu}>
            <div>
                <button className={styles.btnMenu} onClick={postJobTZ}>Start Top Zamok Job</button>
            </div>
            <div>
                <button className={styles.btnMenu} onClick={postJobZU}>Start Zamok Ukr Job</button>
            </div>
        </div>
    )
}