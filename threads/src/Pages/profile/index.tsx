import { Container, Logo, Header, DivNome, DivFoto, Nome, NomePerfil, BotaoThreads, DivNomePerfil} from "./styled";

import LogoSVG from "../../../src/assets/images/logo.svg";


const Profile = () => {

    return (
        <Container>

            <Logo src={LogoSVG} alt="Logo" />

            <Header>
                <DivNome>
                    <Nome>Gabriel Caetano </Nome> <br/>
                    <DivNomePerfil>
                    <NomePerfil>gabriel_caetanou</NomePerfil> 
                    <BotaoThreads>threads.net</BotaoThreads> 
                    </DivNomePerfil>

                </DivNome>

                <DivFoto>
                 dasdasdasdad
                </DivFoto>
            </Header>
            
        </Container>
        
    )
}

export default Profile;