import styled from "styled-components"

export default function Footer({infoFilme, infoSession, time}) {
    return (
        <>
        <FakeFooter/>
        <StyledFooter>
            <div>
                <img data-identifier="movie-img-preview" alt={`Poster do filme ${infoFilme.title}`}src={infoFilme.posterURL}/>
            </div>
            <Container>
                <h2 data-identifier="movie-and-session-infos-preview">{infoFilme.title}</h2>
                <h2 data-identifier="movie-and-session-infos-preview">{infoSession.weekday}  {time}</h2>
            </Container>
        </StyledFooter>
        </>
    )
}

const FakeFooter = styled.div`
    height: 117px;
`

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
        margin-left: 14px;
        font-family: 'Roboto';
        font-size: 26px;
        line-height: 30px;
        color: #293845;
    }
`

const Container = styled.section`
    display: flex;
    flex-direction: column;
`