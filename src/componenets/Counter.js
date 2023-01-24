import React from 'react'
import '../App.css';
import { useEffect, useCallback } from 'react';
import { useSelector, useDispatch } from 'react-redux';
const Counter = () => {

    const dispatch = useDispatch();
    const globleState = useSelector((state) => state);

    const handelerCounterValue = (value) => {
        if (value < 1) {
            return 'No Number'
        }
        return value
    }

    const counteropration = useCallback((type, payload) => {
        dispatch({ type, payload })
    }, [dispatch])

    useEffect(() => counteropration('increase', 10), [counteropration])

    const toggleCounter = () => {
        dispatch({type: 'toggleCounter'})
    }

    return (
        <div className='App'>
            <h1>Hello Redux Basic</h1>
            {globleState.showCounter && (
                <>
                    <div className='counter'>Counter: { handelerCounterValue(globleState.value) }</div>
                    <div>
                        <button className='btn' onClick={() => counteropration('increase', 4)}>increase +</button>
                        <button className='btn' onClick={() => counteropration('decrease', 2)}>decrease -</button>
                    </div>
                </>
            )}
            <div>
                <button className='btn' onClick={toggleCounter}>Hide/Show Counter Number</button>
            </div>
        </div>
    )
}

export default Counter