import React, { useState } from "react";

import AmountContext from "./AmountContext";


const AmountContextProvider = ({ children }) => {

    const [total, setTotal] = useState(0);

    return (
        <AmountContext.Provider value={{total, setTotal}}>
            {children}
        </AmountContext.Provider>
    )
}

export default AmountContextProvider 