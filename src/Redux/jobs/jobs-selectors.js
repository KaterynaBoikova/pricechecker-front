
const getZamokUkrJob = state=>state.jobs.zamokUkrJob;
const getTopZamokJob = state=>state.jobs.topZamokJob;

const getZamokUkrJobError = state=>state.jobs.errorZamokUkrJob;
const getTopZamokJobError = state=>state.jobs.errorTopZamokJob;



export default {
    getZamokUkrJob,
    getTopZamokJob,
    getZamokUkrJobError,
    getTopZamokJobError,
};