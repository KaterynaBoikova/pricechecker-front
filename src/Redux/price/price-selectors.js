
const getLoading = state=>state.priceChecker.loading;
const getHouseLock = state=>state.priceChecker.houseLock;
const getKremin = state=>state.priceChecker.kremin;
const getZamokUkr = state=>state.priceChecker.zamokUkr;
const getTopZamok = state=>state.priceChecker.topZamok;
const getZamochniki = state=>state.priceChecker.zamochniki;
const get740 = state=>state.priceChecker.ua740;
const getKupiZamok = state=>state.priceChecker.kupiZamok;
const getUkrLock = state=>state.priceChecker.ukrLock;
const getSvitZamkiv = state=>state.priceChecker.svitZamkiv;

const getHouseLockError = state=>state.priceChecker.errorHouseLock;
const getKreminError = state=>state.priceChecker.errorKremin;
const getZamokUkrError = state=>state.priceChecker.errorZamokUkr;
const getTopZamokError = state=>state.priceChecker.errorTopZamok;
const getZamochnikiError = state=>state.priceChecker.errorZamochniki;
const get740Error = state=>state.priceChecker.error740;
const getKupiZamokError = state=>state.priceChecker.errorKupiZamok;
const getUkrLockError = state=>state.priceChecker.errorUkrLock;
const getSvitZamkivError = state=>state.priceChecker.errorSvitZamkiv;


export default {
    getHouseLockError,
    getKreminError,
    getZamokUkrError,
    getTopZamokError,
    getZamochnikiError,
    get740Error,
    getKupiZamokError,
    getUkrLockError,
    getSvitZamkivError,
    getLoading,
    getHouseLock,
    getKremin,
    getTopZamok,
    getZamokUkr,
    getZamochniki,
    get740,
    getKupiZamok,
    getUkrLock,
    getSvitZamkiv,
};