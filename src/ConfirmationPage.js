import styled from "styled-components";
import { Link } from "react-router-dom";
import React from "react";

export default function ConfirmationPage({data, setData}) {

    let aux = {...data}
    let seatsArray = [...aux.realSeatsNumbers];
    seatsArray = seatsArray.sort((a, b) => a-b);

    return (
        <StyledConfirmationPage data-identifier="movie-session-infos-reserve-finished">
            <h1>Pedido feito<br/>com sucesso!</h1>
            <h2>Filme e sessão</h2>
            <h3>{aux.filme.movie.title}</h3>
            <h3>{aux.filme.day.date} {aux.filme.name}</h3>
            <h2>Ingressos</h2>
            {seatsArray.map((value, index) => <h3 key={index} data-identifier="seat-infos-reserve-finished">Assento {value}</h3>)}
            <h2>Comprador</h2>
            <h3 data-identifier="buyer-infos-reserve-finished">Nome: {aux.buyer}</h3>
            <h3 data-identifier="buyer-infos-reserve-finished">CPF: {aux.cpf}</h3>
            <StyledLink onClick={() => setData({
            "filme": "",
            "buyer": "",
            "cpf": ""
        })} to="/"><button data-identifier="back-to-home-btn">Voltar pra home</button></StyledLink>
        </StyledConfirmationPage>
    )
}

const StyledLink = styled(Link)`
    text-decoration: none;
    display: flex;
    justify-content: center;
    margin-top: 40px;
    button {
        width: 225px;
        height: 42px;
        background: #E8833A;
        border-radius: 3px;
        border: 0px;
        font-family: 'Roboto';
        font-size: 18px;
        line-height: 21px;
        letter-spacing: 0.04em;

        color: #FFFFFF;
    }

`

const StyledConfirmationPage = styled.section`
    padding: 29px;
    h1 {
        font-family: 'Roboto';
        margin: 0 auto;
        font-weight: 700;
        font-size: 24px;
        line-height: 28px;
        text-align: center;
        letter-spacing: 0.04em;
        color: #247A6B;
        margin-top: 40px;
        margin-bottom: 40px;
    }
    h2 {
        margin-bottom: 8px;
        margin-top: 30px;
        font-family: 'Roboto';
        font-style: normal;
        font-weight: 700;
        font-size: 24px;
        line-height: 28px;
        letter-spacing: 0.04em;
        color: #293845;
    }
    h3 {
        font-family: 'Roboto';
        font-style: normal;
        font-weight: 400;
        font-size: 22px;
        line-height: 26px;
        letter-spacing: 0.04em;

        color: #293845;
    }
`;