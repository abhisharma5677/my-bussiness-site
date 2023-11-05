"use client"

import React from 'react'
import { useState, useContext } from 'react'
import AmountContext from '../context/AmountContext';

const BoxCount = () => {

    const [oneKg, setOneKg] = useState(0);
    const [halfKg, setHalfKg] = useState(0);
    const [oneByFour, setOneByFour] = useState(0);
    const [totalAmount, setTotalAmount] = useState(0);

    const { setTotal } = useContext(AmountContext);
    const { total } = useContext(AmountContext);

    // One kg functions...
    function addOneKg() {
        // oneKg = oneKg + 1;
        setOneKg(oneKg + 1);
        setTotalAmount(totalAmount + 240);
        setTotal(totalAmount + 240);
    }
    function removeOneKg() {
        if (oneKg === 0) {
            return;
        }
        // oneKg = oneKg - 1;
        setOneKg(oneKg - 1);
        setTotalAmount(totalAmount - 240);
        setTotal(totalAmount - 240);
    }

    // Half kg functions...
    function addHalfKg() {
        // halfKg = halfKg + 1;
        setHalfKg(halfKg + 1);
        setTotalAmount(totalAmount + 120);
        setTotal(totalAmount + 120);
    }
    function removeHalfKg() {
        if (halfKg === 0) {
            return;
        }
        // halfKg = halfKg - 1;
        setHalfKg(halfKg - 1);
        setTotalAmount(totalAmount - 120);
        setTotal(totalAmount - 120);
    }

    // One by four
    function addOneByFour() {
        // oneByFour = oneByFour + 1;
        setOneByFour(oneByFour + 1);
        setTotalAmount(totalAmount + 60);
        setTotal(totalAmount + 60);
    }
    function removeOneByFour() {
        if (oneByFour === 0) {
            return;
        }
        // oneByFour = oneByFour - 1;
        setOneByFour(oneByFour - 1);
        setTotalAmount(totalAmount - 60);
        setTotal(totalAmount - 60);
    }

    return (
        <div style={{ display: "flex", justifyContent: "center" }}>
            <div className='paymentContainer'>
                <h1 style={{ textAlign: "center",marginBottom:"40px" }}>HAPPY SHOPPING</h1>

                {/* One kg box count */}
                <div className='boxHeading'>1 KG BOXES</div>
                <div style={{ display: "flex", justifyContent: "center", marginTop:"10px" , marginBottom:"10px" }}>
                    <button onClick={addOneKg} className='addBox'>ADD</button>
                    <button onClick={removeOneKg} className='removeBox'>REMOVE</button>
                </div>
                <div className='boxSelected'>No. of one kg boxes = {oneKg}</div>

                {/* Half kg box count */}
                <div className='boxHeading'>HALF KG BOXES</div>
                <div style={{ display: "flex", justifyContent: "center", marginTop:"10px" , marginBottom:"10px" }}>
                    <button onClick={addHalfKg} className='addBox'>ADD</button>
                    <button onClick={removeHalfKg} className='removeBox'>REMOVE</button>
                </div>
                <div className='boxSelected'>No. of half kg boxes = {halfKg}</div>

                {/* 250g box count */}
                <div className='boxHeading'>250g BOXES</div>
                <div style={{ display: "flex", justifyContent: "center", marginTop:"10px" , marginBottom:"10px" }}>
                    <button onClick={addOneByFour} className='addBox'>ADD</button>
                    <button onClick={removeOneByFour} className='removeBox'>REMOVE</button>
                </div>
                <div className='boxSelected'>No. of 250g boxes = {oneByFour}</div>

                <div className='totalAmount'>Total Payable Amount = <div className='totalCount'>{total}</div></div>
            </div>
        </div>
    )
}

export default BoxCount