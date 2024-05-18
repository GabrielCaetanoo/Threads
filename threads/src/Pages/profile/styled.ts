import styled, {createGlobalStyle} from 'styled-components';

type TypeTextoCustomizavel = {
    color: string;
    size: string;
    left?: string;
    top?: string;
    weight?: string;
}

type ContainerRespostasProps = {
    isVisible: boolean;
};

type TypeIcone = {
    top?: string;
    bottom?: string;
    left?: string;
    radius?: string;
    border?: string;
    width?: string;
}

type TypeDivThreadsOuRespostas = {
    outlined: string;
}

type TypeContainerThreads = {
    display?: string;
}

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
    width: 630px;
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
    justify-content: flex-center;
    margin-top: -5px;
`;

export const DivNomePerfil = styled.div`
    display: flex;
    justify-content: flex-start;
    flex-direction: row;
    margin-top: -10px;

`;

export const DivFoto = styled.div`
    display: flex;
    flex: 1;
    width: 100%;
    flex-direction: row;
    justify-content: flex-end;
    align-items: flex-start;
`;

export const Nome = styled.h1`
    font-size: 25px;
    color: #F3F5F7;
    font-family: "Roboto", sans-serif;
    font-weight: 500;
    text-decoration: none;
    margin: 0;
    border: 0;
    margin-top: 5px;
    letter-spacing: 0.5px;
`;

export const NomePerfil = styled.h2`
    font-size: 14px;
    color: #F3F5F7;
    font-family: "Roboto", sans-serif;
    font-weight: 300;
    text-decoration: none;
    letter-spacing: 0.5px;
    margin: 0;
    border: 0;
`;

export const BotaoThreads = styled.button` 
    padding: 5px 7px;
    border-radius: 10px;
    font-family: "Roboto", sans-serif;
    background-color: #1E1E1E;
    border: 0;
    color: #616161;
    font-size: 10px;
    letter-spacing: 0.5px;
    margin-left: 5px;
`;

export const FotoPerfil = styled.img`
    border-radius: 50%;
    width: 100%;
    max-width: 85px;
`;

export const Biografia = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    width: 100%;
    margin-top: 15px;
`;

export const TextoBiografia = styled.h3`
    border: 0;
    margin: 0;
    font-family: "Roboto", sans-serif;
    font-size: 15px;
    letter-spacing: 0.5px;
    color: #F3F5F7;
    font-weight: 300;
    margin-bottom: -3px;
`;

export const ContainerSeguidoresLink = styled.div`
    display: flex;
    flex-direction: row;
    width: 100%;
    margin-top: 25px;
`;

export const DivSeguidoresLink = styled.div`
    display: flex;
    align-items: center;
    flex-direction: row;
`;

export const DivIconesInstagram = styled.div`
    display: flex;
    align-items: center;
    flex-direction: row;
    flex: 1;
    justify-content: flex-end;
`;

export const TextoCustumizavel = styled.p<TypeTextoCustomizavel>`
    border: 0;
    margin: 0;
    font-family: "Roboto", sans-serif;
    color: ${(props) => (props.color ? props.color : "white")};
    font-size: ${(props) => (props.size ? `${props.size}px` : "15px")};
    letter-spacing: 0.2px;
    margin-left: ${(props) => props.left ? `${props.left}px` : "0px"};
    margin-top: ${(props) => props.top ? `${props.top}px` : "0px"};
    font-weight: ${(props) => props.weight ? props.weight : 300};
`;

export const Icone = styled.img<TypeIcone>`
    width: 100%;
    max-width: ${(props) => props.width ? `${props.width}px` : "23PX"};
    margin-right: 15px;
    cursor: pointer;
    border: ${(props) => props.border ? props.border : "none"};
    border-radius: ${(props) => props.radius ? props.radius : "0px"};
    margin-bottom: ${(props) => props.bottom ? `${props.bottom}px` : "0px"};
    margin-top: ${(props) => props.top ? `${props.top}px` : "0px"};
    margin-left: ${(props) => props.left ? `${props.left}px` : "0px"};
`;

export const ContainerThredsOuRespostas = styled.div`
    display: flex;
    flex-direction: row;
    width: 100%;
`;

export const DivThreadsOuRespostas = styled.div<TypeDivThreadsOuRespostas>`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    flex: 1;
    padding: 12px 0px;
    margin-top: 15px;
    border-bottom: ${(props) => props.outlined === "true" ? "1px solid white" : "0px"};
    cursor: pointer;
`;

export const ContainerThreads = styled.div<TypeContainerThreads>`
    display: ${(props) => props.display ?  props.display : "flex"};
    width: 100%;
    color: white;
    padding-top: 30px;
`;

export const DivFotoThreadsContainer = styled.div`
    display: flex;
    flex: 1;
`;

export const FotoThreadsDiv = styled.img`
    border-radius: 50%;
    width: 100%;
    max-width: 37px;
    max-height: 37px;
`;

export const DivPostThreadsContainer = styled.div`
    display: flex;
    flex: 8;
    width: 100%;
    margin-left: -8px;
    flex-direction: column;
`;

export const HeaderDivPostThreadsContainer = styled.div`
    display: flex;
    flex-direction: row;
    width: 100%;
`;

export const PerfilThreads = styled.div` 
    display: flex;
    flex: 1;
    cursor: pointer;
`;

export const TempoPostThreads = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: flex-end;
    flex: 1;
`;

export const DivPostThreads = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
`;

export const DivIconesThreads = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;
    padding: 5px 0px;
    margin-top: 15px;
`;

export const ContainerDownload = styled.div`
    margin-top: 35px;
    background-color: #0A0A0A;
    width: 100%;
    border-radius: 15px;
    height: 130px;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 60px;
    max-width: 500px;
`;

export const BotaoBaixarThreads = styled.button`
    font-family: "roboto", sans-serif;
    font-size: 15px;
    color: #F3F5F7;
    border: 1.5px solid #5D5D5D;
    background: transparent;
    padding: 7px 12px;
    cursor: pointer;
    border-radius: 10px;
    font-weight: 300;
    margin-top: 30px;
`;

export const ContainerRespostas = styled.div<ContainerRespostasProps>`
    display: ${(props) => (props.isVisible ? "flex" : "none")};
    flex-direction: column;
    margin-top: 20px;
`;