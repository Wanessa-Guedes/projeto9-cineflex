import axios from "axios";
import {useState, useEffect} from "react";
import { Link } from "react-router-dom";

export default function MainP1() {

        const [movies, setMovies] = useState([]);

        useEffect(() => {
        const promess = axios.get("https://mock-api.driven.com.br/api/v5/cineflex/movies");
        promess.then((answer) =>{
            const {data} = answer;
            setMovies(data);
        } );
            promess.catch(error =>console.log(error.answer));
        }, []);

    return (

        <main>
            <div className="Main__HeadP1">
                <p>
                    Selecione o filme
                </p>
            </div>
            <div className="Main__BannerMovie">
                {
                    movies.map(movie => {return <Link to={`/movieinfo/${movie.id}`}><img key={movie.id} src={movie.posterURL} alt=""></img></Link>})
                }
            </div>
        </main>
        
    )

}