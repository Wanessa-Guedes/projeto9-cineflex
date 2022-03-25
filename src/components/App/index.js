import { BrowserRouter, Routes, Route } from "react-router-dom";

import PageOne from "../PageOne";
import PageTwo from "../PageTwo";
import PageThree from "../PageThree";
import Header from "../Header";

export default function App(){
    return(


    <BrowserRouter>
            <Header />
            <Routes>
                <Route path="/" element={<PageOne />}></Route>
                <Route path="/movieinfo/:movieId" element={<PageTwo />}></Route>
                <Route path="/movieinfo/movieId/:sessionId" element={<PageThree />}></Route>
            </Routes>
        </BrowserRouter> 
/*         <>
            <Header />
            <PageThree />
        </> */

    )
}