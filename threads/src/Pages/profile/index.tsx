import React, { useState } from "react";

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
         ContainerThredsOuRespostas,
         DivThreadsOuRespostas,
         ContainerThreads,
         DivFotoThreadsContainer,
         FotoThreadsDiv,
         DivPostThreadsContainer,
         HeaderDivPostThreadsContainer,
         PerfilThreads,
         TempoPostThreads,
         Icone} from "./styled";

import LogoSVG from "../../../src/assets/images/logo.svg";
import Perfil from "../../../src/assets/images/Perfil.jpg";
import LogoInstagramSVG from "../../../src/assets/images/instagram.svg"
import Mais from "../../../src/assets/images/mais.svg"
import Ellipsis from "../../../src/assets/images/ellipsis.svg"

const Profile = () => {

    const [ThreadsOuRespostas, setThreadsOuRespostas] = useState("threads");

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
                    <Icone src={LogoInstagramSVG} alt="ISSO AI"></Icone>
                    <Icone src={Mais} alt="ISSO AI"></Icone>
                    
                </DivIconesInstagram>
            </ContainerSeguidoresLink>

            <ContainerThredsOuRespostas>
                <DivThreadsOuRespostas outlined={ThreadsOuRespostas === "threads" ? "true" : "false"}
                onClick={() => setThreadsOuRespostas("threads")} >
                    <TextoCustumizavel color="white" size="15">
                         Threads
                    </TextoCustumizavel>    
                </DivThreadsOuRespostas >

                <DivThreadsOuRespostas outlined={ThreadsOuRespostas === "respostas" ? "true" : "false"}
                onClick={() => setThreadsOuRespostas("respostas")}>
                    <TextoCustumizavel color="white" size="15">
                         Respostas
                    </TextoCustumizavel>

                </DivThreadsOuRespostas >
            </ContainerThredsOuRespostas>

            <ContainerThreads display={ThreadsOuRespostas === "threads" ? "flex" : "none"}>
                <DivFotoThreadsContainer>
                    <FotoThreadsDiv src={Perfil}/>

                </DivFotoThreadsContainer>


                <DivPostThreadsContainer>
                    <HeaderDivPostThreadsContainer>
                        <PerfilThreads>
                            <TextoCustumizavel left="-15" size="14" color="white">
                                @gabriel_caetanou
                            </TextoCustumizavel>
                        </PerfilThreads>

                        <TempoPostThreads>
                            <TextoCustumizavel size="14" color="gray">
                                3sem <Icone top="-7" src={Ellipsis} width="15"/>
                            </TextoCustumizavel>
                        </TempoPostThreads>
                    </HeaderDivPostThreadsContainer>
                
                </DivPostThreadsContainer>

            </ContainerThreads>
            
        </Container>
        
    )
}

export default Profile;