import styled from "styled-components";
import React from "react";

const color = {
    "true": "#C3CFD9",
    "false": "#FBE192",
    "selected": "#1AAE9E"
};


export default function Seat({data, setData, infoSeat, children}) {

    const [aux, setAux] = React.useState({...infoSeat});

    function selectSeat() {

        if(infoSeat.isAvailable === false) {
            alert("Esse assento não está disponível!")
            return;
        }
        
        let reservatedSeatsSet = data.reservatedSeats;
        if(data.reservatedSeats === undefined)
            reservatedSeatsSet = new Set();

        children = Number(children)
        if(reservatedSeatsSet.has(children)) {
            infoSeat.isAvailable = true;
            reservatedSeatsSet.delete(children);
        }
        else {
            infoSeat.isAvailable = "selected";
            reservatedSeatsSet.add(children);
        }

        setData({...data, "reservatedSeats": reservatedSeatsSet});
        setAux({...infoSeat});

    }

    return (
        <StyledSeat onClick={(children) => selectSeat(children)} available={aux.isAvailable}>{children}</StyledSeat>
    )
}

const StyledSeat = styled.button`

    width: 26px;
    height: 26px;
    background: ${props => color[props.available]};
    border: 1px solid #808F9D;
    border-radius: 12px;
    
    font-family: 'Roboto';
    font-size: 11px;
    line-height: 13px;
    text-align: center;
    letter-spacing: 0.04em;
    margin: 7px;
    cursor: pointer;

`
