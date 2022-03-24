import axios from "axios";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

import FooterPageTwo from "./FooterPageTwo";

export default function PageTwo() {

    const {movieId} = useParams();
    const [infosFilme, setInfosFilme] = useState({
        days: []
    });

    useEffect(() => {
        const promess = axios.get(`https://mock-api.driven.com.br/api/v5/cineflex/movies/${movieId}/showtimes`);
        promess.then(response => {
            const {data} = response;
            setInfosFilme(data);
        })
        promess.catch(error =>console.log(error.response));
    }, [movieId]);

    return (<>
        <main>
            <div className="Main__HeadP1">
                <p>
                    Selecione o horário
                </p>
            </div>
            {
                infosFilme.days.map(infoFilme => {
                    return (
                        <div className="Main__PageTwo">
                            <div>
                                <p>{infoFilme.weekday} - {infoFilme.date}</p>
                            </div>
                            <div className="Main___PageTwo__MovieTime">
                            {
                                infoFilme.showtimes.map(info => {
                                    return (
                                            <div className="Main__PageTwo__borderTime"><p>{info.name}</p></div>
                                        )
                                })
                            }
                            </div>
                        </div>)
                }) 
            }
        </main>
        <FooterPageTwo url={infosFilme.posterURL} title={infosFilme.title}/>
    </>)
}