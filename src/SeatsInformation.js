import styled from "styled-components";

const color = {
    "true": "#C3CFD9",
    "false": "#FBE192",
    "selected": "#1AAE9E"
};

export default function SeatsInformation() {
    return(
        <StyledSeatsInformation>
            <div>
                <Botao available={"selected"}></Botao>
                <h3 data-identifier="seat-selected-subtitle">Selecionado</h3>
            </div>
            <div>
                <Botao available={"true"}></Botao>
                <h3 data-identifier="seat-available-subtitle">Disponível</h3>
            </div>
            <div>
                <Botao available={"false"}></Botao>
                <h3 data-identifier="seat-unavailable-subtitle">Indisponível</h3>
            </div>
        </StyledSeatsInformation>
    )
}

const StyledSeatsInformation = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    margin-bottom: 42px;
    div {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        margin-left: 20px;
        margin-top: 16px;
    }
    h3 { 
        font-family: 'Roboto';
        font-size: 13px;
        line-height: 15px;
        display: flex;
        align-items: center;
        letter-spacing: -0.013em;
        color: #4E5A65;
    }
`

const Botao = styled.button`
    width: 25px;
    height: 25px;
    left: 78px;
    top: 377px;
    margin-bottom: 6px;
    background: ${props => color[props.available]};
    border: 1px solid #0E7D71;
    border-radius: 17px;
`