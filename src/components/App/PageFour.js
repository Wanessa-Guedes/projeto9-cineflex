
import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import AppContext from "../../AppContext/Context";

export default function PageFour() {

    const {dadosFinais} = useContext(AppContext);
    const {assentos, cpf, dia, filme, horario, nome} = dadosFinais;
    const assentosComprados = [...assentos.values()];
    const navigate = useNavigate();

    //console.log(assentosComprados);

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
                        <p className="main__page4_subInfosFilmes">{dia} {horario}</p>
                    </div>
                    <div className="Main__PageFour">
                        <p className="main__page4_infosFilmes">Ingressos</p>
                        {
                            assentosComprados.map(assento => {return (
                            <p key={assento} className="main__page4_subInfosFilmes"> Assento {assento}</p>
                            )})
                        }
                    </div>
                    <div className="Main__PageFour">
                        <p className="main__page4_infosFilmes">Comprador</p>
                        <p className="main__page4_subInfosFilmes">Nome: {nome}</p>
                        <p className="main__page4_subInfosFilmes">CPF: {cpf}</p>
                    </div>
                </div>
                <button onClick={() => navigate("/")} className="Main___PageThree_ReserveButton">
                    Voltar pra Home
                </button>
            </main>
        </>
    )
}