

export default function PageThree() {

    const assentos = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20];


    return (
        <main>
            <div className="Main__HeadP1">
                <p>
                    Selecione o(s) assento(s)
                </p>
            </div>
            <div className="Main__PageThree">
                {
                    assentos.map((assento, index) => {
                        if (assento < 10) { return <p key={index} className="Main___PageThree_Seats">0{assento}</p> }
                        else { return <p key={index} className="Main___PageThree_Seats">{assento}</p> }
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
        </main>
    )
}