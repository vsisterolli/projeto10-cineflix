import styled from "styled-components";
import {BsFillArrowLeftCircleFill} from "react-icons/bs";
import { useLocation, useNavigate } from "react-router-dom";

export default function Header() {

    const navigate = useNavigate();
    const location = useLocation();

    return(
        <HeaderStyle>
            <h1>CINEFLEX</h1>
            <BackIconStyled path={location.pathname} onClick={() => navigate(-1)} name="arrow-back-circle-outline"/>
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

const BackIconStyled = styled(BsFillArrowLeftCircleFill)`
    color: black;
    font-size: 22px;
    position: absolute;
    left: 40px;
    display: ${props => props.path === '/' || props.path === '/sucesso' ? "none" : "initial"};
`