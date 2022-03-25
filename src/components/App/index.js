import { BrowserRouter, Routes, Route } from "react-router-dom";

import Header from "../Header";
import PageOne from "../PageOne";
import PageTwo from "../PageTwo";
import PageThree from "../PageThree";
import PageFour from "./PageFour";

export default function App(){
    return(


    <BrowserRouter>
            <Header />
            <Routes>
                <Route path="/" element={<PageOne />}></Route>
                <Route path="/movieinfo/:movieId" element={<PageTwo />}></Route>
                <Route path="/movieinfo/movieId/:sessionId" element={<PageThree />}></Route>
                <Route path="/movieinfo/movieId/final" element={<PageFour />}></Route>
            </Routes>
        </BrowserRouter> 
/*         <>
            <Header />
            <PageFour />
        </> */

    )
}