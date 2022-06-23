import axios from "axios";
import actions from './price-actions';

// axios.defaults.baseURL = ' https://app-pricechecker-back.herokuapp.com/api/getPrices';

axios.defaults.baseURL = ' http://localhost:8060/api/getPrices';
const fetchPricesZamokUkr =()=>async dispatch=>{
    dispatch(actions.fetchPricesZamokUkrRequest());
    await axios.get('/zamokukr/jobResult')
        .then(({data})=>dispatch(actions.fetchPricesZamokUkrSuccess(data)))
        .catch(error=>dispatch(actions.fetchPricesZamokUkrError(error.message)))
};
const fetchPricesTopZamok =()=>async dispatch=>{
    dispatch(actions.fetchPricesTopZamokRequest());
    await axios.get('/topzamok/jobResult')
        .then(({data})=>dispatch(actions.fetchPricesTopZamokSuccess(data)))
        .catch(error=>dispatch(actions.fetchPricesTopZamokError(error.message)))
};


const fetchPricesHL =()=>async dispatch=>{
    dispatch(actions.fetchPricesHLRequest());
   await axios.get('/houselock')
        .then(({data})=>dispatch(actions.fetchPricesHLSuccess(data)))
        .catch(error=>dispatch(actions.fetchPricesHLError(error.message)))
};
const fetchPricesKremin =()=>async dispatch=>{
    dispatch(actions.fetchPricesKreminRequest());
   await axios.get('/kremin')
        .then(({data})=>dispatch(actions.fetchPricesKreminSuccess(data)))
        .catch(error=>dispatch(actions.fetchPricesKreminError(error.message)))
};
const fetchPricesKupiZamok =()=>async dispatch=>{
    dispatch(actions.fetchPricesKupiZamokRequest());
    await axios.get('/kupizamok')
        .then(({data})=>dispatch(actions.fetchPricesKupiZamokSuccess(data)))
        .catch(error=>dispatch(actions.fetchPricesKupiZamokError(error.message)))
};
const fetchPricesUkrLock =()=>async dispatch=>{
    dispatch(actions.fetchPricesUkrLockRequest());
    await axios.get('/ukrlock')
        .then(({data})=>dispatch(actions.fetchPricesUkrLockSuccess(data)))
        .catch(error=>dispatch(actions.fetchPricesUkrLockError(error.message)))
};
const fetchPricesSvitZamkiv =()=>async dispatch=>{
    dispatch(actions.fetchPricesSvitZamkivRequest());
    await axios.get('/svitzamkiv')
        .then(({data})=>dispatch(actions.fetchPricesSvitZamkivSuccess(data)))
        .catch(error=>dispatch(actions.fetchPricesSvitZamkivError(error.message)))
};
const fetchPricesZamochniki =()=>async dispatch=>{
    dispatch(actions.fetchPricesZamochnikiRequest());
    await axios.get('/zamochniki')
        .then(({data})=>dispatch(actions.fetchPricesZamochnikiSuccess(data)))
        .catch(error=>dispatch(actions.fetchPricesZamochnikiError(error.message)))
};
const fetchPrices740 =()=>async dispatch=>{
    dispatch(actions.fetchPrices740Request());
    await axios.get('/740')
        .then(({data})=>dispatch(actions.fetchPrices740Success(data)))
        .catch(error=>dispatch(actions.fetchPrices740Error(error.message)))
};


export default {
    fetchPricesHL,
    fetchPricesKremin,
    fetchPricesZamokUkr,
    fetchPricesTopZamok,
    fetchPricesKupiZamok,
    fetchPrices740,
    fetchPricesZamochniki,
    fetchPricesSvitZamkiv,
    fetchPricesUkrLock,
};
