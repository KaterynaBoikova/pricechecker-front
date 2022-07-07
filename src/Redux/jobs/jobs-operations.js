import axios from "axios";
import jobsActions from "./jobs-action";
const JOB_NAME_TZ = "topZamok";
const JOB_NAME_ZU = "zamokUkr";
const BASE_URL =
  "https://app-pricechecker-back.herokuapp.com/api/getPrices/jobs/";

const postJobAndGetProgressTZ = () => async (dispatch) => {
  dispatch(
    jobsActions.postJobTopZamokSuccess({
      progress: 0,
      status: "started",
      jobId: "",
      jobName: "",
    })
  );
  await axios
    .post(`${BASE_URL}${JOB_NAME_TZ}`)
    .then(({ data }) => {
      const { jobId } = data;
      return new Promise(function (resolve) {
        const intervalID = setInterval(async function () {
          const getStatus = await axios.get(`${BASE_URL}progress/${jobId}`);
          dispatch(jobsActions.postJobTopZamokSuccess(getStatus.data));
          const status = getStatus.data;
          if (status.status !== "active") {
            clearInterval(intervalID);
          }
          resolve(status);
        }, 10000);
      });
    })
    .catch((error) => dispatch(jobsActions.errorTopZamokJob(error.message)));
};
const postJobAndGetProgressZU = () => async (dispatch) => {
  dispatch(
    jobsActions.postJobZamokUkrSuccess({
      progress: 0,
      status: "started",
      jobId: "",
      jobName: "",
    })
  );
  await axios
    .post(`${BASE_URL}${JOB_NAME_ZU}`)
    .then(({ data }) => {
      const { jobId } = data;
      return new Promise(function (resolve) {
        const intervalID = setInterval(async function () {
          const getStatus = await axios.get(`${BASE_URL}progress/${jobId}`);
          dispatch(jobsActions.postJobZamokUkrSuccess(getStatus.data));
          const status = getStatus.data;
          if (status.status !== "active") {
            clearInterval(intervalID);
          }
          resolve(status);
        }, 10000);
      });
    })
    .catch((error) => dispatch(jobsActions.errorZamokUkrJob(error.message)));
};

export default {
  postJobAndGetProgressTZ,
  postJobAndGetProgressZU,
};
