import React, { useEffect, useCallback } from 'react'
import '../App.css';
import { useSelector, useDispatch } from 'react-redux';
//  Actios
import { increase, decrease } from '../store/CounterSlice';
import { logIn, logOut } from '../store/AuthSlice';


const Counter = () => {

    const isLogin = () => {
        return globalState.auth.isLogIn
    };

    const loginHandler = (status) => {
        if (status) {
            dispatch(logOut(4));
        } else {
            dispatch(logIn());
        }
    }

    const globalState = useSelector((state) => state);
    const dispatch = useDispatch();

    const counterHandler = useCallback(
        (type, value) => {
            if (type === 'increase') {
                dispatch(increase(value));
            } else {
                dispatch(decrease(value));
            }
        }
    , [dispatch]);

    useEffect(() => {
        counterHandler('increase', 4)
    }, [counterHandler]);

    return (
        <div className='App'>
            <h1>Hello Redux Basic</h1>
            {
                isLogin() &&
                <>
                    <div className='counter'>Counter: {globalState.counter.value}</div>
                    <div>
                        <button className='btn' onClick={() => counterHandler('increase', 4)}>increase +</button>
                        <button className='btn' onClick={() => counterHandler('decrease', 2)}>decrease -</button>
                    </div>
                </>
            }
            <div>
                <button className='btn' onClick={() => loginHandler(isLogin())}>{isLogin() ? 'LogOut' : 'LogIn'}</button>
            </div>
        </div>
    )
}

export default Counter