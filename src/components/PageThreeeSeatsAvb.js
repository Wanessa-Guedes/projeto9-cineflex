
import { useState } from "react";

export default function PageThreeSeatsAvb(props) {
    console.log(props.assento)
    //const [seatReservation, setSeatReservation] = useState(false);
    const [testeStyle, setTesteStyle] = useState("");
    //const [testeAssento, setTesteAssento] = useState([]);

    function options(seatSelected) {
        //setSeatReservation(true)
        setTesteStyle("selected")
        props.updateSeats(seatSelected)
    }

        if (props.seat < 10) {
            return (<p key={props.index} className={`Main___PageThree_Seats ${testeStyle}`} onClick={() => {setTesteStyle("selected") 
                                                                                                                options(props.index+1)}}>0{props.seat}</p>)
        }
        else {
            return (<p key={props.index} className={`Main___PageThree_Seats ${testeStyle}`} onClick={() => {setTesteStyle("selected") 
                                                                                                                    options(props.index+1)}}>{props.seat}</p>)
        }
}