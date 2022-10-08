import styled from "styled-components";

export default function FormUserData({data, setData}) {

    function handleChange(e) {
        setData({
            ...data,
            [e.target.name]: e.target.value
        })
    }

    return (
        <StyledFormUserData>
            <h2>Nome do comprador:</h2>
            <input data-identifier="buyer-name-input" name="buyer" value={data.buyer} onChange={handleChange} type="text" placeholder="Digite seu nome..."/>
            <h2>CPF do comprador:</h2>
            <input data-identifier="buyer-cpf-input" name="cpf" value={data.cpf} onChange={handleChange} type="text" placeholder="Digite seu cpf..."/>
        </StyledFormUserData>
    )    
}

const StyledFormUserData = styled.form`
    
    margin: 0 auto;
    width: 327px;

    h2 {
        font-family: 'Roboto';
        font-size: 18px;
        line-height: 21px;
        color: #293845;
    }

    input {
        padding: 18px;
        width: 327px;
        height: 51px;
        background: #FFFFFF;
        border: 1px solid #D5D5D5;
        border-radius: 3px;
        margin-bottom: 7px;
    }

    input::placeholder {
        font-family: 'Roboto';
        font-style: italic;
        font-weight: 400;
        font-size: 18px;
        line-height: 21px;
        color: #AFAFAF;
    }

`