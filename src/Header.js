import styled from "styled-components";

export default function Header() {
    return(
        <HeaderStyle>
            <h1>CINEFLEX</h1>
        </HeaderStyle>
    )
}

const HeaderStyle = styled.header`

    display: flex;
    align-items: center;
    justify-content: center;

    height: 67px;
    font-family: 'Roboto';
    font-size: 34px;
    line-height: 40px;
    color: #E8833A;
    text-align: center;
    background: #C3CFD9;
    
`;