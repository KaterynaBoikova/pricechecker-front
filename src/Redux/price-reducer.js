import { combineReducers } from 'redux';
import { createReducer } from '@reduxjs/toolkit';
import actions from './price-actions';

const houseLock = createReducer([], {
    [actions.fetchPricesHLSuccess]: (state, action) => {
        return action.payload.houseLock;
    },
});
const kremin = createReducer([], {
    [actions.fetchPricesKreminSuccess]: (state, action) => {
        return action.payload.kremin;
    },
});
const zamokUkr = createReducer([], {
    [actions.fetchPricesZamokUkrSuccess]: (state, action) => {
        return action.payload.zamokUkr;
    },
});
const topZamok = createReducer([], {
    [actions.fetchPricesTopZamokSuccess]: (state, action) => {
        return action.payload.topZamok;
    },
});
const ukrLock = createReducer([], {
    [actions.fetchPricesUkrLockSuccess]: (state, action) => {
        return action.payload.ukrLock;
    },
});
const kupiZamok = createReducer([], {
    [actions.fetchPricesKupiZamokSuccess]: (state, action) => {
        return action.payload.kupiZamok;
    },
});
const svitZamkiv = createReducer([], {
    [actions.fetchPricesSvitZamkivSuccess]: (state, action) => {
        return action.payload.svitZamkiv;
    },
});
const zamochniki = createReducer([], {
    [actions.fetchPricesZamochnikiSuccess]: (state, action) => {
        return action.payload.zamochniki;
    },
});
const ua740 = createReducer([], {
    [actions.fetchPrices740Success]: (state, action) => {
        return action.payload.ua740;
    },
});


const errorHouseLock = createReducer({error: null, isOpen: false}, {
    [actions.fetchPricesHLError]: (state, action) => {
        return {error: action.payload, isOpen: true};
    },
    [actions.hideErrorHouseLock]: (state, action) => {
        return {error: null, isOpen: false};
    },
});
const errorKremin = createReducer({error: null, isOpen: false}, {
    [actions.fetchPricesKreminError]: (state, action) => {
        return {error: action.payload, isOpen: true};
    },
    [actions.hideErrorKremin]: (state, action) => {
        return {error: null, isOpen: false};
    },
});
const errorZamokUkr = createReducer({error: null, isOpen: false}, {
    [actions.fetchPricesZamokUkrError]: (state, action) => {
        return {error: action.payload, isOpen: true};
    },
    [actions.hideErrorZamokUkr]: (state, action) => {
        return {error: null, isOpen: false};
    },
});
const errorTopZamok = createReducer({error: null, isOpen: false}, {
    [actions.fetchPricesTopZamokError]: (state, action) => {
        return {error: action.payload, isOpen: true};
    },
    [actions.hideErrorTopZamok]: (state, action) => {
        return {error: null, isOpen: false};
    },
});
const error740 = createReducer({error: null, isOpen: false}, {
    [actions.fetchPrices740Error]: (state, action) => {
        return {error: action.payload, isOpen: true};
    },
    [actions.hideError740]: (state, action) => {
        return {error: null, isOpen: false};
    },
});
const errorSvitZamkiv = createReducer({error: null, isOpen: false}, {
    [actions.fetchPricesSvitZamkivError]: (state, action) => {
        return {error: action.payload, isOpen: true};
    },
    [actions.hideErrorSvitZamkiv]: (state, action) => {
        return {error: null, isOpen: false};
    },
});
const errorUkrLock = createReducer({error: null, isOpen: false}, {
    [actions.fetchPricesUkrLockError]: (state, action) => {
        return {error: action.payload, isOpen: true};
    },
    [actions.hideErrorUkrLock]: (state, action) => {
        return {error: null, isOpen: false};
    },
});
const errorKupiZamok = createReducer({error: null, isOpen: false}, {
    [actions.fetchPricesKupiZamokError]: (state, action) => {
        return {error: action.payload, isOpen: true};
    },
    [actions.hideErrorKupiZamok]: (state, action) => {
        return {error: null, isOpen: false};
    },
});
const errorZamochniki = createReducer({error: null, isOpen: false}, {
    [actions.fetchPricesZamochnikiError]: (state, action) => {
        return {error: action.payload, isOpen: true};
    },
    [actions.hideErrorZamochniki]: (state, action) => {
        return {error: null, isOpen: false};
    },
});

const loading = createReducer(false, {
    [actions.fetchPricesHLRequest]: ()=>true,
    [actions.fetchPricesHLSuccess]: ()=>false,
    [actions.fetchPricesHLError]: ()=>false,
    [actions.fetchPricesKreminRequest]: ()=>true,
    [actions.fetchPricesKreminSuccess]: ()=>false,
    [actions.fetchPricesKreminError]: ()=>false,
    [actions.fetchPricesZamokUkrRequest]: ()=>true,
    [actions.fetchPricesZamokUkrSuccess]: ()=>false,
    [actions.fetchPricesZamokUkrError]: ()=>false,
    [actions.fetchPricesTopZamokRequest]: ()=>true,
    [actions.fetchPricesTopZamokSuccess]: ()=>false,
    [actions.fetchPricesTopZamokError]: ()=>false,
    [actions.fetchPrices740Request]: ()=>true,
    [actions.fetchPrices740Success]: ()=>false,
    [actions.fetchPrices740Error]: ()=>false,
    [actions.fetchPricesSvitZamkivRequest]: ()=>true,
    [actions.fetchPricesSvitZamkivSuccess]: ()=>false,
    [actions.fetchPricesSvitZamkivError]: ()=>false,
    [actions.fetchPricesUkrLockRequest]: ()=>true,
    [actions.fetchPricesUkrLockSuccess]: ()=>false,
    [actions.fetchPricesUkrLockError]: ()=>false,
    [actions.fetchPricesKupiZamokRequest]: ()=>true,
    [actions.fetchPricesKupiZamokSuccess]: ()=>false,
    [actions.fetchPricesKupiZamokError]: ()=>false,
    [actions.fetchPricesZamochnikiRequest]: ()=>true,
    [actions.fetchPricesZamochnikiSuccess]: ()=>false,
    [actions.fetchPricesZamochnikiError]: ()=>false,

})

export default combineReducers({
    loading,
    houseLock,
    kremin,
    zamokUkr,
    topZamok,
    ukrLock,
    ua740,
    zamochniki,
    svitZamkiv,
    kupiZamok,
    errorHouseLock,
    errorZamochniki,
    errorKupiZamok,
    errorUkrLock,
    errorSvitZamkiv,
    error740,
    errorTopZamok,
    errorZamokUkr,
    errorKremin,
});
