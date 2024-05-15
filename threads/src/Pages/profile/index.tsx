import { Container, Logo, Header, DivNome, DivFoto, Nome, NomePerfil, BotaoThreads, DivNomePerfil, FotoPerfil, Biografia, TextoBiografia} from "./styled";

import LogoSVG from "../../../src/assets/images/logo.svg";
import Perfil from "../../../src/assets/images/Perfil.jpg";

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
                 <FotoPerfil src={Perfil} alt="teste"></FotoPerfil>
                </DivFoto>
            </Header>

            <Biografia>
                <TextoBiografia>

                </TextoBiografia>
            </Biografia>
            
        </Container>
        
    )
}

export default Profile;