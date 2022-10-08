import GlobalStyle from "./GlobalStyle";
import Header from "./Header";
import MovieSelection from "./MovieSelection";
import MovieTimeSchedule from "./MovieTimeSchedule";
import { BrowserRouter, Routes, Route } from "react-router-dom";

export default function App() {
    return (
        <BrowserRouter>
            <GlobalStyle/>
            <Header/>
            <Routes>
                <Route path="/" element={<MovieSelection/>}/>
                <Route path="/sessoes/:idFilme" element={<MovieTimeSchedule/>}/>
            </Routes>
        </BrowserRouter>
    )
}