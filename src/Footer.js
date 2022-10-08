import styled from "styled-components"

export default function Footer({infoFilme}) {
    return (
        <StyledFooter>
            <div>
                <img src={infoFilme.posterURL}/>
            </div>
            <h2>{infoFilme.title}</h2>
        </StyledFooter>
    )
}

const StyledFooter = styled.footer`
    position: fixed;
    display: flex;
    align-items: center;
    width: 100%;
    height: 117px;
    left: 0px;
    bottom: 0px;
    background: #DFE6ED;
    border: 1px solid #9EADBA;

    div {
        display: flex;
        align-items: center;
        justify-content: center;
        background-color: white;
        box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1);
        border-radius: 2px;
        width: 64px;
        height: 89px;
        margin: 10px;
    }

    img { 
        width: 48px;
        height: 72px;
    }

    h2 { 
        margin: 14px;
        font-family: 'Roboto';
        font-size: 26px;
        line-height: 30px;
        color: #293845;
    }
`