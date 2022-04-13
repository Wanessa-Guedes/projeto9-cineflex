
import { useParams } from "react-router-dom";
import { useContext } from "react";
import AppContext from "../../AppContext/Context";

export default function PageFour() {

    const {filme} = useContext(AppContext)

    return (
        <>
            <main>
                <div className="Main__HeadP1 headP4">
                    <p>
                        Pedido feito com sucesso!
                    </p>
                </div>
                <div className="Main__PageFour_Encaps">
                    <div className="Main__PageFour">
                        <p className="main__page4_infosFilmes"> Filme e sessão</p>
                        <p className="main__page4_subInfosFilmes">{filme}</p>
                        <p className="main__page4_subInfosFilmes">24/06/2021 15:00</p>
                    </div>
                    <div className="Main__PageFour">
                        <p className="main__page4_infosFilmes">Ingressos</p>
                        <p className="main__page4_subInfosFilmes">Assento 15</p>
                        <p className="main__page4_subInfosFilmes">Assento 16</p>
                    </div>
                    <div className="Main__PageFour">
                        <p className="main__page4_infosFilmes">Comprador</p>
                        <p className="main__page4_subInfosFilmes">Nome: João da Silva Sauro</p>
                        <p className="main__page4_subInfosFilmes">CPF: 123.456.789-10</p>
                    </div>
                </div>
                <div className="Main___PageThree_ReserveButton">
                    Voltar pra Home
                </div>
            </main>
        </>
    )
}