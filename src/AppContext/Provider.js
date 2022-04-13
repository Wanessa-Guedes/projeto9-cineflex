// responsável por distribuir e lidar com os dados
import react from "react";
import { useState } from "react";
import AppContext from "./Context";

const AppProvider = ({children}) => {

    const [dadosFinais, setDadosFinais] = useState({filme: null,
        dia: null,
        horario: null,
        assentos: null,
        nome: null,
        cpf: null });

    const updateSucessScreen = (filme, dia, horario, assentos, nome, cpf) => {
        setDadosFinais({
            filme: filme,
            dia: dia,
            horario: horario,
            assentos: assentos,
            nome: nome,
            cpf: cpf 
        })
    } 

    return(
        <AppContext.Provider value={{updateSucessScreen}}>
            {children}
        </AppContext.Provider>
    )
}

export default AppProvider;