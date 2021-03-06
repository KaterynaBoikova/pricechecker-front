import { createAction } from "@reduxjs/toolkit";

const postJobZamokUkrSuccess = createAction("prices/postJobZamokUkrSuccess");
const errorZamokUkrJob = createAction("prices/errorZamokUkrJob");
const hideErrorZamokUkrJob = createAction("prices/hideErrorZamokUkrJob");

const postJobTopZamokSuccess = createAction("prices/postJobTopZamokSuccess");
const errorTopZamokJob = createAction("prices/errorTopZamokJob");
const hideErrorTopZamokJob = createAction("prices/hideErrorTopZamokJob");

const jobActions = {
  postJobZamokUkrSuccess,
  errorZamokUkrJob,
  hideErrorZamokUkrJob,
  postJobTopZamokSuccess,
  errorTopZamokJob,
  hideErrorTopZamokJob,
};
export default jobActions;
