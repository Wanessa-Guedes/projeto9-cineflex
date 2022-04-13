import { createContext } from "react";

// Define o context, ponto de entrada, ponto de configuração
// Gera dois outros filhos - Consumer e provider
// Consumer:Quando a gnt quiser acessar o valor do provider
// Provider serve para distribuir a informação

const AppContext = createContext({
    filme: null,
    dia: null,
    horario: null,
    assentos: null,
    nome: null,
    cpf: null
});

export default AppContext;