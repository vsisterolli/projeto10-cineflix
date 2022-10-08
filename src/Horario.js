import styled from "styled-components"
import { Link } from "react-router-dom"

export default function Horario({day}) {
    return (
        <HorarioStyled>
            <h2>{day.weekday} - {day.date}</h2>
            {day.showtimes.map((value, index) => <Link key={index} to={`/assentos/${value.id}`}><button>{value.name}</button></Link>)}
        </HorarioStyled>
    )
};

const HorarioStyled = styled.div`
    h2 {
        font-family: 'Roboto';
        font-size: 20px;
        line-height: 23px;
        letter-spacing: 0.02em;
        color: #293845;
        margin-bottom: 22px;
    }
    button {
        height: 43px;
        width: 83px;
        border: 0px;
        color: white;
        font-family: 'Roboto';
        font-size: 18px;
        line-height: 21px;
        letter-spacing: 0.02em;
        background: #E8833A;
        border-radius: 3px;
        margin-right: 9px;
        margin-bottom: 30px;
        cursor: pointer;
    }
`