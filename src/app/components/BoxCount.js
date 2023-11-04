"use client"

import React from 'react'
import { useState , useContext } from 'react'
import AmountContext from '../context/AmountContext';

const BoxCount = () => {

    const [oneKg , setOneKg] = useState(0);
    const [halfKg , setHalfKg] = useState(0);
    const [oneByFour , setOneByFour] = useState(0);
    const [totalAmount , setTotalAmount] = useState(0);

    const {setTotal} = useContext(AmountContext);
    const {total} = useContext(AmountContext);

    // One kg functions...
    function addOneKg(){
        // oneKg = oneKg + 1;
        setOneKg(oneKg + 1);
        setTotalAmount(totalAmount + 240);
        setTotal(totalAmount + 240);   
    }
    function removeOneKg(){
        if(oneKg === 0){
            return;
        }
        // oneKg = oneKg - 1;
        setOneKg(oneKg - 1);
        setTotalAmount(totalAmount - 240);
        setTotal(totalAmount - 240);
    }

    // Half kg functions...
    function addHalfKg(){
        // halfKg = halfKg + 1;
        setHalfKg(halfKg + 1);
        setTotalAmount(totalAmount + 120);
        setTotal(totalAmount + 120);
    }
    function removeHalfKg(){
        if(halfKg === 0){
            return;
        }
        // halfKg = halfKg - 1;
        setHalfKg(halfKg - 1);
        setTotalAmount(totalAmount - 120);
        setTotal(totalAmount - 120);
    }

    // One by four
    function addOneByFour(){
        // oneByFour = oneByFour + 1;
        setOneByFour(oneByFour + 1);
        setTotalAmount(totalAmount + 60);
        setTotal(totalAmount + 60);
    }
    function removeOneByFour(){
        if(oneByFour === 0){
            return;
        }
        // oneByFour = oneByFour - 1;
        setOneByFour(oneByFour - 1);
        setTotalAmount(totalAmount - 60);
        setTotal(totalAmount - 60);
    }

    return (
        <div>
            <h1>Select the no. of boxes</h1>

            {/* One kg box count */}
            <div>1 kg boxes :-</div>
            <button onClick={addOneKg}>ADD</button>
            <button onClick={removeOneKg}>REMOVE</button>
            <div>{oneKg}</div>

            {/* Half kg box count */}
            <div>Half kg boxes :-</div>
            <button onClick={addHalfKg}>ADD</button>
            <button onClick={removeHalfKg}>REMOVE</button>
            <div>{halfKg}</div>

            {/* 250g box count */}
            <div>250g boxes :-</div>
            <button onClick={addOneByFour}>ADD</button>
            <button onClick={removeOneByFour}>REMOVE</button>
            <div>{oneByFour}</div>

            <h1>Total Payable Amount = {total}</h1>
        </div>
    )
}

export default BoxCount