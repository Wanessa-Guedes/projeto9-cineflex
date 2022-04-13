
import { useState } from "react";
import styled from "styled-components";

export default function PageThreeSeatsAvb(props) {

    const {seat, index, idseat, disponivel, selecionado, updateSeats} = props;

    function selecionarAssento(){
        if(!disponivel) alert('Esse assento não está disponível, por favor, escolha outro.');
        else updateSeats(idseat, seat);
    }

    return (
        <Posicao
        selecionado = {selecionado} 
        disponivel = {disponivel}
        onClick={selecionarAssento}     
        > 
            {seat}
        </Posicao>
    )

}

function corAssento(selecionado, disponivel){
    if(selecionado) return "#8DD7CF";
    else if (disponivel) return "#C3CFD9";
    else return "#FBE192"; 
}

const Posicao = styled.button`
    width: 26px;
    height: 26px;
    color: #C3CFD9;
    border: 1px solid #808F9D;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: ${({selecionado, disponivel}) => corAssento(selecionado, disponivel)};
    cursor: pointer;
    margin: 20px 7px;
    color: #222;
`