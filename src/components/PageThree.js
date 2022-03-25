import axios from "axios";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";

import FooterPageThree from "./FooterPageThree";
import PageThreeSeatsAvb from "./PageThreeeSeatsAvb";

export default function PageThree() {

    const [nameReservation, setNameReservation] = useState("");
    const [testeAssento, setTesteAssento] = useState([]);
    const [seatReservation, setSeatReservation] = useState(false);

    const { sessionId } = useParams();

    const [infosreservation, setInfosReservation] = useState({
        day: {},
        movie: {},
        seats: []
    });

    useEffect(() => {
        const promess = axios.get(`https://mock-api.driven.com.br/api/v5/cineflex/showtimes/${sessionId}/seats`);
        promess.then(response => {
            const { data } = response;
            setInfosReservation(data);
        })
        promess.catch(error => console.log(error.response));
    }, [sessionId]);

    function notAvailableSeat() {
        alert("Assento indisponível, por favor escolha outro!")
    }


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
                            if (!assento.isAvailable) {
                                if (assento.name < 10) { return <p key={index} className="Main___PageThree_Seats notavailable" onClick={() => notAvailableSeat()}>0{assento.name}</p> }
                                else { return <p key={index} className="Main___PageThree_Seats notavailable" onClick={() => notAvailableSeat()}>{assento.name}</p> }
                            } else {
                                return <PageThreeSeatsAvb seat={assento.name} index={index} idseat={assento.id} updateSeats={updateSeats => setTesteAssento([...testeAssento, updateSeats])} />
                            }
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
                        <input type="text" placeholder="Digite seu nome" onChange={nameReservation => setNameReservation(nameReservation.target.value)}></input>
                    </div>

                    <div>
                        <p> CPF do Comprador:</p>
                        <input placeholder="Digite seu CPF" ></input>
                    </div>
                </div>
                <div className="Main___PageThree_ReserveButton">
                    <Link to={`/movieinfo/movieId/final`} ><p> Reservar assento(s) </p></Link>
                </div>
            </main>

            <FooterPageThree url={infosreservation.movie.posterURL} title={infosreservation.movie.title} day={infosreservation.day.weekday} hour={infosreservation.name} />
        </>
    )
}