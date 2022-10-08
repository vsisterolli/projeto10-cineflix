import { useParams } from "react-router-dom";
import styled from "styled-components";
import React from "react";
import axios from "axios";
import { Link } from "react-router-dom";

import Seat from "./Seat";
import SeatsInformation from "./SeatsInformation";
import FormUserData from "./FormUserData";
import Footer from "./Footer";

export default function MovieAvailablePlaces({data, setData}) {

    const {idSessao} = useParams();
    const [infoFilme, setInfoFilme] = React.useState({"seats": [], "movie": {}, "day": {}})

    React.useEffect(() => {
        const promise = axios.get(`https://mock-api.driven.com.br/api/v5/cineflex/showtimes/${idSessao}/seats`);
        promise.then(response => {setInfoFilme(response.data); setData({...data, "filme": response.data})});
    }, [idSessao])

    return(
        <AvailablePlacesStyled>
            <h1>Selecione o(s) assento(s)</h1>
            <StyledSeats>
                {infoFilme.seats.map((value, index) => <Seat key={index} data={data} setData={setData} infoSeat={value}>{index+1}</Seat>)}
            </StyledSeats>
            <SeatsInformation/>
            <FormUserData data={data} setData={setData}/>
            <StyledReservateMovie to="/sucesso"><button data-identifier="reservation-btn" onClick={() => {
                const objPOST = {
                    "ids": [...data.reservatedSeats],
                    "name": data.name,
                    "cpf": data.cpf
                }
                const promise = axios.post("https://mock-api.driven.com.br/api/v5/cineflex/seats/book-many", objPOST);
            }}>Reservar assento(s)</button></StyledReservateMovie>
            <Footer infoFilme={infoFilme.movie} infoSession={infoFilme.day} time={` - ${infoFilme.name}`}/>
        </AvailablePlacesStyled>
    )
}

const AvailablePlacesStyled = styled.section`
    display: flex;
    flex-direction: column;
    h1 {
        text-align: center;
        font-family: 'Roboto';
        font-size: 24px;
        line-height: 28px;
        letter-spacing: 0.04em;
        color: #293845;
        margin: 25px;
    }
`

const StyledReservateMovie = styled(Link)`
    display: flex;
    justify-content: center;
    text-decoration: none;
    button {
        width: 225px;
        height: 42px;
        background: #E8833A;
        border: 0;
        font-size: 18px;
        line-height: 21px;
        font-family: 'Roboto';
        letter-spacing: 0.04em;
        color: #FFFFFF;
        margin-top: 57px;
        margin-bottom: 30px;
        cursor: pointer;
    }
`;

const StyledSeats = styled.div`
    width: 95%;
    max-width: 650px;
    margin: 0 auto;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
`