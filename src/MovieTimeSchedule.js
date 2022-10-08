import { useParams } from 'react-router-dom';
import React from 'react';
import styled from 'styled-components';
import axios from 'axios';

import Footer from './Footer';
import Horario from './Horario';

export default function MovieTimeSchedule() {

    const {idFilme} = useParams();
    const [infoFilme, setInfoFilme] = React.useState({"days": []})
    React.useEffect(() => {
        const promise = axios.get(`https://mock-api.driven.com.br/api/v5/cineflex/movies/${idFilme}/showtimes`);
        promise.then(response => setInfoFilme(response.data));
    }, [idFilme])

    return(
        <TimeScheduleStyle>
            <h1>Selecione o horário</h1>
            <ContainerHorarios>
                {infoFilme.days.map((value, index) => <Horario key={index} day={value}/>)}
            </ContainerHorarios>
            <Footer infoFilme={infoFilme}/>
            <FakeFooter/>
        </TimeScheduleStyle>
    )
}

const TimeScheduleStyle = styled.section`

    h1 {
        text-align: center;
        font-family: 'Roboto';
        font-size: 24px;
        line-height: 28px;
        letter-spacing: 0.04em;
        color: #293845;
        margin: 25px;
    }
`;

const ContainerHorarios = styled.div`
    margin: 0 auto;
    padding: 24px;
    width: 95%;
`

const FakeFooter = styled.div`
    height: 111px;
`