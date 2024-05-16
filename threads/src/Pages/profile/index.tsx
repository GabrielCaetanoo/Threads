import { Container, 
         Logo, 
         Header, 
         DivNome, 
         DivFoto, 
         Nome, 
         NomePerfil, 
         BotaoThreads, 
         DivNomePerfil, 
         FotoPerfil, 
         Biografia, 
         TextoBiografia,
         ContainerSeguidoresLink,
         DivSeguidoresLink,
         DivIconesInstagram,
         TextoCustumizavel,
         LogoInstagram} from "./styled";

import LogoSVG from "../../../src/assets/images/logo.svg";
import Perfil from "../../../src/assets/images/Perfil.jpg";
import LogoInstagramSVG from "../../../src/assets/images/instagram.svg"

const Profile = () => {

    return (
        <Container>

            <Logo src={LogoSVG} alt="Logo" />

            <Header>
                <DivNome>
                    <Nome>Gabriel Caetano </Nome> <br/>
                      <DivNomePerfil>
                        <NomePerfil>gabrielcaetanou</NomePerfil> 
                        <BotaoThreads>threads.net</BotaoThreads> 
                      </DivNomePerfil>

                </DivNome>

                <DivFoto>
                 <FotoPerfil src={Perfil} alt="teste"></FotoPerfil>
                </DivFoto>
            </Header>

            <Biografia>
                <TextoBiografia>
                    Programador junior a 1 ano.
                </TextoBiografia>

                <TextoBiografia>
                    🗺Maringá-PR
                </TextoBiografia>

                <TextoBiografia>
                   👨‍💻Software engineer
                </TextoBiografia>

                <TextoBiografia>
                    •Adam’s group
                </TextoBiografia>

                
            </Biografia>

            <ContainerSeguidoresLink>
                <DivSeguidoresLink>
                    <TextoCustumizavel color="#616161" size="14.5">
                        1038 Seguidores . github/gabriel_caetanou
                    </TextoCustumizavel>
                    
                </DivSeguidoresLink>

                <DivIconesInstagram>
                    <LogoInstagram src={LogoInstagramSVG} alt="ISSO AI"></LogoInstagram>
                    
                </DivIconesInstagram>
            </ContainerSeguidoresLink>
            
        </Container>
        
    )
}

export default Profile;