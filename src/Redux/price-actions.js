import { createAction } from '@reduxjs/toolkit';


const fetchPricesHLRequest = createAction('prices/fetchPricesHLRequest');
const fetchPricesHLSuccess = createAction('prices/fetchPricesHLSuccess');
const fetchPricesHLError = createAction('prices/fetchPricesHLError');
const hideErrorHL = createAction('prices/hideErrorHL');

const fetchPricesKreminRequest = createAction('prices/fetchPricesKreminRequest');
const fetchPricesKreminSuccess = createAction('prices/fetchPricesKreminSuccess');
const fetchPricesKreminError = createAction('prices/fetchPricesKreminError');
const hideErrorKremin = createAction('prices/hideErrorKremin');

const fetchPricesZamokUkrRequest = createAction('prices/fetchPricesZamokUkrRequest');
const fetchPricesZamokUkrSuccess = createAction('prices/fetchPricesZamokUkrSuccess');
const fetchPricesZamokUkrError = createAction('prices/fetchPricesZamokUkrError');
const hideErrorZamokUkr = createAction('prices/hideErrorZamokUkr');

const fetchPricesTopZamokRequest = createAction('prices/fetchPricesTopZamokRequest');
const fetchPricesTopZamokSuccess = createAction('prices/fetchPricesTopZamokSuccess');
const fetchPricesTopZamokError = createAction('prices/fetchPricesTopZamokError');
const hideErrorTopZamok = createAction('prices/hideErrorTopZamok');

const fetchPricesZamochnikiRequest = createAction('prices/fetchPricesZamochnikiRequest');
const fetchPricesZamochnikiSuccess = createAction('prices/fetchPricesZamochnikiSuccess');
const fetchPricesZamochnikiError = createAction('prices/fetchPricesZamochnikiError');
const hideErrorZamochniki = createAction('prices/hideErrorZamochniki');

const fetchPricesUkrLockRequest = createAction('prices/fetchPricesUkrLockRequest');
const fetchPricesUkrLockSuccess = createAction('prices/fetchPricesUkrLockSuccess');
const fetchPricesUkrLockError = createAction('prices/fetchPricesUkrLockError');
const hideErrorUkrLock = createAction('prices/hideErrorUkrLock');

const fetchPrices740Request = createAction('prices/fetchPrices740Request');
const fetchPrices740Success = createAction('prices/fetchPrices740Success');
const fetchPrices740Error = createAction('prices/fetchPrices740Error');
const hideError740 = createAction('prices/hideError740');

const fetchPricesSvitZamkivRequest = createAction('prices/fetchPricesSvitZamkivRequest');
const fetchPricesSvitZamkivSuccess = createAction('prices/fetchPricesSvitZamkivSuccess');
const fetchPricesSvitZamkivError = createAction('prices/fetchPricesSvitZamkivError');
const hideErrorSvitZamkiv = createAction('prices/hideErrorSvitZamkiv');

const fetchPricesKupiZamokRequest = createAction('prices/fetchPricesKupiZamokRequest');
const fetchPricesKupiZamokSuccess = createAction('prices/fetchPricesKupiZamokSuccess');
const fetchPricesKupiZamokError = createAction('prices/fetchPricesKupiZamokError');
const hideErrorKupiZamok = createAction('prices/hideErrorKupiZamok');


export default {
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
    hideErrorHL,
    hideErrorKremin,
    hideErrorZamokUkr,
    hideErrorTopZamok,
    hideErrorZamochniki,
    hideErrorUkrLock,
    hideError740,
    hideErrorSvitZamkiv,
    hideErrorKupiZamok,
};
