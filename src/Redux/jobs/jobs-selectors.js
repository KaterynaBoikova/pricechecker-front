const getZamokUkrJob = (state) => state.jobs.zamokUkrJob;
const getTopZamokJob = (state) => state.jobs.topZamokJob;

const getZamokUkrJobError = (state) => state.jobs.errorZamokUkrJob;
const getTopZamokJobError = (state) => state.jobs.errorTopZamokJob;

const jobSelectors = {
  getZamokUkrJob,
  getTopZamokJob,
  getZamokUkrJobError,
  getTopZamokJobError,
};

export default jobSelectors;
