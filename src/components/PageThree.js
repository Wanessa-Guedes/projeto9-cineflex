import axios from "axios";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

import FooterPageThree from "./FooterPageThree";

export default function PageThree() {

    //const assentos = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20];
    const [nameReservation, setNameReservation] = useState("");

    const {sessionId} = useParams();
    //console.log(sessionId)
    const [infosreservation, setInfosReservation] = useState({
        day:{},
        movie:{},
        seats: []
    });

    useEffect(() => {
        const promess = axios.get(`https://mock-api.driven.com.br/api/v5/cineflex/showtimes/${sessionId}/seats`);
        promess.then(response => {
            const {data} = response;
            //console.log(data)
            setInfosReservation(data);
        })
        promess.catch(error =>console.log(error.response));
    }, [sessionId]);

    console.log(infosreservation.seats)

    return (
        <>
            <main>
                <div className="Main__HeadP1">
                    <p>
                        Selecione o(s) assento(s)
                    </p>
                </div>
                <div className="Main__PageThree">
                    {
                        infosreservation.seats.map((assento, index) => {
                            if (assento.name < 10) { return <p key={index} className="Main___PageThree_Seats">0{assento.name}</p> }
                            else { return <p key={index} className="Main___PageThree_Seats">{assento.name}</p> }
                        })
                    }
                </div>
                <div className="Main__PageThree__ContainInfosSeats">
                    <div className="Main__PageThree__ContainerInfos">
                        <div className="Main__PageThree__infoSeats Selected"></div>
                        <p>Selecionado</p>
                    </div>
                    <div className="Main__PageThree__ContainerInfos">
                        <div className="Main__PageThree__infoSeats Avaiable"></div>
                        <p>Disponível</p>
                    </div>
                    <div className="Main__PageThree__ContainerInfos">
                        <div className="Main__PageThree__infoSeats Unavaiable"></div>
                        <p>Indisponível</p>
                    </div>
                </div>
                <div className="Main___PageThree_BuyerInfos">
                    <div>
                        <p> Nome do Comprador:</p>
                        <input type="text" placeholder="Digite seu nome" onChange={nameReservation => setNameReservation(...nameReservation.target.value)}></input>
                    </div>

                    <div>
                        <p> CPF do Comprador:</p>
                        <input placeholder="Digite seu CPF" ></input>
                    </div>
                </div>
                <div className="Main___PageThree_ReserveButton">
                    Reservar assento(s)
                </div>
            </main>

            <FooterPageThree url={infosreservation.movie.posterURL} title={infosreservation.movie.title} day={infosreservation.day.weekday} hour={infosreservation.name}/>
        </>
    )
}