import styled from "styled-components";
import { Link } from "react-router-dom";
import axios from "axios";
import React from "react";

export default function MovieSelection() {

    const [movieList, setMovieList] = React.useState([]);

    React.useEffect(() => {
        const promise = axios.get("https://mock-api.driven.com.br/api/v5/cineflex/movies");
        promise.then( (response) => setMovieList(response.data) );
    }, [])

    return (
    <MovieSelectionStyle>
        <h1>Selecione o filme</h1>
        <ContainerMovies>
            {movieList.map((value, index) => <Link to={`/sessoes/${value.id}`} key={index}><img alt={`Poster do filme ${value.title}`} src={value.posterURL}/></Link>)}
        </ContainerMovies>
    </MovieSelectionStyle>
    )
}

const MovieSelectionStyle = styled.main`
    
    text-align: center;
    h1 {
        font-family: 'Roboto';
        font-size: 24px;
        line-height: 28px;
        letter-spacing: 0.04em;
        color: #293845;
        margin: 25px;
    }

`;

const ContainerMovies = styled.div`
    width: 95%;
    margin: 0 auto;
    img {
        width: 129px;
        height: 193px;
        margin: 20px;
        box-shadow: 0px 2px 4px 2px rgba(0, 0, 0, 0.1);
        border-radius: 3px;
    }
`;