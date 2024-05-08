import styled, {createGlobalStyle} from 'styled-components';

export const GlobalStyles = createGlobalStyle`
    body {
        margin: 0;
        padding: 0;
        background-color: #101010;
        display: flex;
        justify-content: center;
    }

`;

export const Container = styled.div`
    display: flex; 
    width: 700px;
    flex-direction: column;
    align-items: center;
    padding-top: 27px;
`;

export const Logo = styled.img`
    width: 100%;
    max-width: 23px;
`;

export const Header = styled.div`
    display: flex;
    flex-direction: row;
    width: 100%;
    margin-top: 40px;

`;

export const DivNome = styled.div`
    display: flex;
    flex: 1;
    width: 100%;
    flex-direction: column;
    justify-content: flex-start;
`;

export const DivNomePerfil = styled.div`
    display: flex;
    justify-content: flex-start;

`;

export const DivFoto = styled.div`
    display: flex;
    flex: 1;
    width: 100%;
`;

export const Nome = styled.h1`
    font-size: 20px;
    color: #F3F5F7;
    font-family: "Roboto", sans-serif;
    font-weight: 500;
    text-decoration: none;
`;

export const NomePerfil = styled.h2`
    font-size: 13px;
    color: #F3F5F7;
    font-family: "Roboto", sans-serif;
    font-weight: 300;
    text-decoration: none;
    margin-top: -28px;
`;

export const BotaoThreads = styled.button` 
    padding: 10px;
    border-radius: 10px;
    font-family: "Roboto", sans-serif;
    background-color: #3A3A3A;
    border: 0;


`;

