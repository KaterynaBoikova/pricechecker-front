import { createAction } from '@reduxjs/toolkit';

const fetchPricesHLRequest = createAction('prices/fetchPricesHLRequest');
const fetchPricesHLSuccess = createAction('prices/fetchPricesHLSuccess');
const fetchPricesHLError = createAction('prices/fetchPricesHLError');

const fetchPricesKreminRequest = createAction('prices/fetchPricesKreminRequest');
const fetchPricesKreminSuccess = createAction('prices/fetchPricesKreminSuccess');
const fetchPricesKreminError = createAction('prices/fetchPricesKreminError');

const fetchPricesZamokUkrRequest = createAction('prices/fetchPricesZamokUkrRequest');
const fetchPricesZamokUkrSuccess = createAction('prices/fetchPricesZamokUkrSuccess');
const fetchPricesZamokUkrError = createAction('prices/fetchPricesZamokUkrError');

const fetchPricesTopZamokRequest = createAction('prices/fetchPricesTopZamokRequest');
const fetchPricesTopZamokSuccess = createAction('prices/fetchPricesTopZamokSuccess');
const fetchPricesTopZamokError = createAction('prices/fetchPricesTopZamokError');

const fetchPricesZamochnikiRequest = createAction('prices/fetchPricesZamochnikiRequest');
const fetchPricesZamochnikiSuccess = createAction('prices/fetchPricesZamochnikiSuccess');
const fetchPricesZamochnikiError = createAction('prices/fetchPricesZamochnikiError');

const fetchPricesUkrLockRequest = createAction('prices/fetchPricesUkrLockRequest');
const fetchPricesUkrLockSuccess = createAction('prices/fetchPricesUkrLockSuccess');
const fetchPricesUkrLockError = createAction('prices/fetchPricesUkrLockError');

const fetchPrices740Request = createAction('prices/fetchPrices740Request');
const fetchPrices740Success = createAction('prices/fetchPrices740Success');
const fetchPrices740Error = createAction('prices/fetchPrices740Error');

const fetchPricesSvitZamkivRequest = createAction('prices/fetchPricesSvitZamkivRequest');
const fetchPricesSvitZamkivSuccess = createAction('prices/fetchPricesSvitZamkivSuccess');
const fetchPricesSvitZamkivError = createAction('prices/fetchPricesSvitZamkivError');

const fetchPricesKupiZamokRequest = createAction('prices/fetchPricesKupiZamokRequest');
const fetchPricesKupiZamokSuccess = createAction('prices/fetchPricesKupiZamokSuccess');
const fetchPricesKupiZamokError = createAction('prices/fetchPricesKupiZamokError');


// const hideErrorHouseLock = createAction('errors/hideErrorHouseLock');
// const hideErrorKremin = createAction('errors/hideErrorHouseLock');
// const hideErrorTopZamok = createAction('errors/hideErrorHouseLock');
// const hideErrorZamokUkr = createAction('errors/hideErrorHouseLock');
// const hideError740 = createAction('errors/hideErrorHouseLock');
// const hideErrorSvitZamkiv = createAction('errors/hideErrorHouseLock');
// const hideErrorZamochniki = createAction('errors/hideErrorHouseLock');
// const hideErrorUkrLock = createAction('errors/hideErrorHouseLock');
// const hideErrorKupiZamok = createAction('errors/hideErrorHouseLock');

export default {
    // hideErrorHouseLock,
    // hideErrorKupiZamok,
    // hideErrorUkrLock,
    // hideErrorZamochniki,
    // hideErrorSvitZamkiv,
    // hideError740,
    // hideErrorZamokUkr,
    // hideErrorTopZamok,
    // hideErrorKremin,
    fetchPricesKupiZamokRequest,
    fetchPricesKupiZamokSuccess,
    fetchPricesKupiZamokError,
    fetchPricesSvitZamkivRequest,
    fetchPricesSvitZamkivSuccess,
    fetchPricesSvitZamkivError,
    fetchPricesUkrLockRequest,
    fetchPricesUkrLockSuccess,
    fetchPricesUkrLockError,
    fetchPrices740Request,
    fetchPrices740Success,
    fetchPrices740Error,
    fetchPricesHLRequest,
    fetchPricesHLSuccess,
    fetchPricesHLError,
    fetchPricesKreminRequest,
    fetchPricesKreminSuccess,
    fetchPricesKreminError,
    fetchPricesZamokUkrRequest,
    fetchPricesZamokUkrSuccess,
    fetchPricesZamokUkrError,
    fetchPricesTopZamokRequest,
    fetchPricesTopZamokSuccess,
    fetchPricesTopZamokError,
    fetchPricesZamochnikiRequest,
    fetchPricesZamochnikiSuccess,
    fetchPricesZamochnikiError,
};
