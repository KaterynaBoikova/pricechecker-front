import axios from "axios";


const fetchStatus = (link, jobId, updateState, errorAction)=>{
    return new Promise(function (resolve) {
        const intervalID = setInterval(async function () {
            const getStatus = await axios.get(`${link}${jobId}`)
                .catch(error=>errorAction(error.message))
            const status = getStatus.data;
            updateState(prevState=>status);
            if(status.status!=='active'){
                clearInterval(intervalID);
            }
            resolve(status);
        }, 10000);
    });
};

export default fetchStatus;