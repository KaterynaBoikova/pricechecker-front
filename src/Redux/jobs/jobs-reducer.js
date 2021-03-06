import { combineReducers } from "redux";
import { createReducer } from "@reduxjs/toolkit";
import actions from "./jobs-action";

const jobInitialState = {
  progress: 0,
  status: "not started",
  jobId: "",
  jobName: "",
};
const zamokUkrJob = createReducer(jobInitialState, {
  [actions.postJobZamokUkrSuccess]: (state, action) => {
    return action.payload;
  },
});
const topZamokJob = createReducer(jobInitialState, {
  [actions.postJobTopZamokSuccess]: (state, action) => {
    return action.payload;
  },
});

const errorZamokUkrJob = createReducer(
  { error: null, isOpen: false },
  {
    [actions.errorZamokUkrJob]: (state, action) => {
      return { error: action.payload, isOpen: true };
    },
    [actions.hideErrorZamokUkrJob]: (state, action) => {
      return { error: null, isOpen: false };
    },
  }
);

const errorTopZamokJob = createReducer(
  { error: null, isOpen: false },
  {
    [actions.errorTopZamokJob]: (state, action) => {
      return { error: action.payload, isOpen: true };
    },
    [actions.hideErrorTopZamokJob]: (state, action) => {
      return { error: null, isOpen: false };
    },
  }
);

export default combineReducers({
  zamokUkrJob,
  topZamokJob,
  errorZamokUkrJob,
  errorTopZamokJob,
});
