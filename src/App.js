import GlobalStyle from "./GlobalStyle";
import Header from "./Header";
import MovieSelection from "./MovieSelection";
import MovieTimeSchedule from "./MovieTimeSchedule";
import MovieAvailablePlaces from "./MovieAvailablePlaces";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import React from "react";

export default function App() {

    const [data, setData] = React.useState({
        "filme": "",
        "buyer": "",
        "cpf": ""
    });

    return (
        <BrowserRouter>
            <GlobalStyle/>
            <Header/>
            <Routes>
                <Route path="/" element={<MovieSelection/>}/>
                <Route path="/sessoes/:idFilme" element={<MovieTimeSchedule/>}/>
                <Route path="/assentos/:idSessao" element={<MovieAvailablePlaces data={data} setData={setData}/>}/>
            </Routes>
        </BrowserRouter>
    )
}