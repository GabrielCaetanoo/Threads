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
         DivPostThreads,
         DivIconesThreads,
         ContainerDownload,
         BotaoBaixarThreads,
         ContainerRespostas,
         Icone} from "./styled";

import LogoSVG from "../../../src/assets/images/logo.svg";
import Perfil from "../../../src/assets/images/Perfil.jpg";
import LogoInstagramSVG from "../../../src/assets/images/instagram.svg"
import Mais from "../../../src/assets/images/mais.svg"
import Ellipsis from "../../../src/assets/images/ellipsis.svg"
import Curtir from "../../../src/assets/images/curtir.svg"
import Comentario from "../../../src/assets/images/comentario.svg"
import Encaminhar from "../../../src/assets/images/encaminhar.svg"
import Sincronizar from "../../../src/assets/images/sincronizar.svg"


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
                            <TextoCustumizavel size="14" color="grey">
                                3sem <Icone top="-7" src={Ellipsis} width="15"/>
                            </TextoCustumizavel>
                        </TempoPostThreads>
                    </HeaderDivPostThreadsContainer>
                    
                    <DivPostThreads>
                        <TextoCustumizavel size="15" color="white" top="15"> 
                           Gostei do App, olhando o back-end percebi que foi desenvolvido com Rust.
                        </TextoCustumizavel>

                        <TextoCustumizavel size="15" color="white" top="15"> 
                           A parte mobile parece ser React Native, teremos que aguardar a Meta confirmar.
                        </TextoCustumizavel>

                        <TextoCustumizavel size="15" color="white" top="15"> 
                           Pra mim ficou mais otimizado que o Twitter.
                        </TextoCustumizavel>
                    </DivPostThreads>

                    <DivIconesThreads>
                        <Icone width="20" src={Curtir} />
                        <Icone width="20" src={Comentario} />
                        <Icone width="20" src={Sincronizar} />
                        <Icone width="20" src={Encaminhar} />
                    </DivIconesThreads>
                    <TextoCustumizavel size="15" color="grey" top="5">9 curtidas</TextoCustumizavel>
                </DivPostThreadsContainer>
            </ContainerThreads>

            <ContainerRespostas isVisible={ThreadsOuRespostas === "respostas"}>
                <TextoCustumizavel size="15" color="white" top="15">
                    Sem respostas adicionadas.
                </TextoCustumizavel>
            </ContainerRespostas>

            <ContainerDownload>
                <Icone width="42" left="-40" src={LogoSVG} />
                <Icone width="50" left="20"top="-33" src={Perfil} radius="50%" border="3px solid #0A0A0A" />

                <TextoCustumizavel size="14" color="#5D5D5D" top="15">
                    Baixe o app Threads para ver mais de gabrielcaetanou.
                </TextoCustumizavel>

                <BotaoBaixarThreads>
                    Baixar o Threads
                </BotaoBaixarThreads>
            </ContainerDownload>
            
        </Container>
        
    )
}

export default Profile;