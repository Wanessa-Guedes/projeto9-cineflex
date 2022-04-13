import axios from "axios";
import { useState, useEffect, useContext } from "react";
import { useParams, useNavigate } from "react-router-dom";
import styled from "styled-components";
import AppContext from "../AppContext/Context";

import FooterPageThree from "./FooterPageThree";
import PageThreeSeatsAvb from "./PageThreeeSeatsAvb";

export default function PageThree() {

    const [seatStatus, setSeatStatus] = useState(new Map())
    const [dadosCompra, setDadosCompra] = useState({ nome: "", cpf: "" });

    const { sessionId } = useParams();

    const [infosreservation, setInfosReservation] = useState(null);
    const navigate = useNavigate();
    const {setDadosFinais} = useContext(AppContext);

    useEffect(() => {
        const promess = axios.get(`https://mock-api.driven.com.br/api/v5/cineflex/showtimes/${sessionId}/seats`);
        promess.then(response => {
            const { data } = response;
            setInfosReservation(data);
        })
        promess.catch(error => console.log(error.response));
    }, [sessionId]);

    function finalizarCompra(e) {
        e.preventDefault();
        if(assentos.length > 0){
            const promess = axios.post(`https://mock-api.driven.com.br/api/v5/cineflex/seats/book-many`,
            {
                ids: [...seatStatus.keys()],
                name: dadosCompra.nome,
                cpf: dadosCompra.cpf
            });
            promess.then(response =>{
                setDadosFinais({
                    filme: infosreservation.movie.title,
                    dia: infosreservation.day.date,
                    horario: infosreservation.name,
                    assentos: seatStatus,
                    nome: dadosCompra.nome,
                    cpf: dadosCompra.cpf,
                })
                navigate("/movieinfo/movieId/final")
            })
        } 
    }

    function montarAssentos() {
        if (infosreservation != null) {
            return infosreservation.seats.map((assento, index) => {
                const selecionado = seatStatus.has(assento.id);
                return <PageThreeSeatsAvb
                    seat={assento.name}
                    index={index}
                    idseat={assento.id}
                    disponivel={assento.isAvailable}
                    selecionado={selecionado}
                    updateSeats={(id, numero) => toggle(id, numero)} />
            })
        } else {
            return (<p>Carregando...</p>)
        }
    }

    function toggle(id, numero) {
        const jaSelecionado = seatStatus.has(id);
        if (jaSelecionado) {
            seatStatus.delete(id);
            setSeatStatus(new Map(seatStatus))
        } else {
            setSeatStatus(new Map(seatStatus.set(id, numero)))
        }
    }

    function montarFormulario() {
        return (
            <>
                <label htmlFor="nome">Nome do comprador:</label>
                <input type="text" id="nome" value={dadosCompra.nome} placeholder="Digite seu nome..." required
                    onChange={(e) => setDadosCompra({ ...dadosCompra, nome: e.target.value })} />

                <label htmlFor="cpf">CPF do comprador:</label>
                <input type="text" id="cpf" value={dadosCompra.cpf} placeholder="Digite seu CPF..." required
                    onChange={(e) => setDadosCompra({ ...dadosCompra, cpf: e.target.value })} />

                <div>
                    <button>Reservar assento(s)</button>
                </div>
            </>

        )

    }

    function montarFooter(){

            if(infosreservation != null){
            return(
            <FooterPageThree url={infosreservation.movie.posterURL} 
            title={infosreservation.movie.title} 
            day={infosreservation.day.weekday} 
            hour={infosreservation.name} />
            )
            } else {
                return (
                    <p>Carregandos informações do filme....</p>
                )
            }
    }

    const assentos = montarAssentos();
    const formularioCompra = montarFormulario();
    const footer = montarFooter();

    return (
        <>
            <main>
                <div className="Main__HeadP1">
                    <p>
                        Selecione o(s) assento(s)
                    </p>
                </div>
                <div className="Main__PageThree">

                    {assentos}

                    {/* Aqui é a legenda dos assentos*/}
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

                <FormularioCompra onSubmit={finalizarCompra}>
                    {formularioCompra}
                </FormularioCompra>

                {/* Aqui podia passar para um formulário para aprender a fazer!! */}
            </main>
                {footer}
            
        </>
    )
}

const FormularioCompra = styled.form`
    display: flex;
    flex-direction: column;
    align-self: start;
    width: 100%;
    margin-bottom: 200px;

  * {
    margin: 5px 0;
    }

    input {
    width: 100%;
    height: 50px;
    padding-left: 20px;
    }

    button {
    background-color: #E8833A;
    width: 225px;
    color: white;
    padding: 10px 5px;
    border: 0;
    cursor: pointer;
    }

    div {
    display: flex;
    justify-content: center;
    align-items: center;
    }
`;