// responsável por distribuir e lidar com os dados
import react from "react";
import { useState } from "react";
import AppContext from "./Context";

const AppProvider = ({children}) => {

    const [dadosFinais, setDadosFinais] = useState(null);

    return(
        <AppContext.Provider value={{dadosFinais, setDadosFinais}}>
            {children}
        </AppContext.Provider>
    )
}

export default AppProvider;