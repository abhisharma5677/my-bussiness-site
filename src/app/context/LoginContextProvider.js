import React, { useState } from "react";

import LoginContext from "./LoginContext";

const LoginContextProvider = ({ children }) => {

    const [login , setLogin] = useState(false);

    return (
        <LoginContext.Provider value={{login, setLogin}}>
            {children}
        </LoginContext.Provider>
    )
}

export default LoginContextProvider