import React, {useEffect} from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import pricesSelectors from "../Redux/price-selectors";
import priceActions from "../Redux/price-actions";


export default function ErrorNotify(){
    const houseLock = useSelector(pricesSelectors.getHouseLockError);
    const kremin = useSelector(pricesSelectors.getKreminError);
    const topZamok = useSelector(pricesSelectors.getTopZamokError);
    const zamokUkr = useSelector(pricesSelectors.getZamokUkrError);
    const ua740 = useSelector(pricesSelectors.get740Error);
    const ukrLock = useSelector(pricesSelectors.getUkrLockError);
    const zamochniki = useSelector(pricesSelectors.getZamochnikiError);
    const svitZamkiv = useSelector(pricesSelectors.getSvitZamkivError);
    const kupiZamok = useSelector(pricesSelectors.getKupiZamokError);

    const dispatch = useDispatch();

    const handleClick = (event) => {
        event.preventDefault();
        dispatch(priceActions.hideErrorHouseLock());
        // dispatch(priceActions.hideErrorKremin());
    };

    const notify =()=>{
        if(houseLock.error&&houseLock.open){
            toast.error('🦄 Wow so easy!', {
                position: "top-right",
                autoClose: false,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
            });
        }
    }
    useEffect(() => {
        notify();
    }, );

    return(
        <>
            <ToastContainer
                position="top-right"
                autoClose={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
            />
        </>
    )
}