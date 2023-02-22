import { lightTheme } from "@/components/theme/Theme";
import styled, { ThemeProvider } from "styled-components";
import { Develope, Design, Linux, Coding } from "@/components/ui/AllSvgs";
import BigTitle from "../blog/big-title";
import LogoComponent from "@/components/ui/uicomponents/logo";
import HomeButton from "@/components/ui/buttons/home-button";
import SocialIcons from "../main/social";


const Box = styled.div`
background-color: ${props => props.theme.body};
width: 100vw;
height:auto;
position: relative;
display: flex;
flex-wrap:wrap;
justify-content: space-evenly;
gap:50px;
align-items: center;
padding:30px;
`

const Main = styled.div`
border: 2px solid ${props => props.theme.text};
color: ${props => props.theme.text};
background-color: ${props => props.theme.body};
padding: 2rem;  
padding-bottom:5rem;
width: 30vw;
height: 60vh;
z-index:3;
line-height: 1.5;
cursor: pointer;
font-family: 'Ubuntu Mono',monospace;
display: flex;
flex-direction: column;
justify-content: space-between;
&:hover{
    color: ${props => props.theme.body};
    background-color: ${props => props.theme.text};
}
`
const Title = styled.h2`
display: flex;
justify - content: center;
align - items: center;
font - size: calc(1em + 1vw);
${Main}: hover & {
    &>* {
        fill: ${props => props.theme.body};
    }
}
&>*: first - child{
    margin - right: 1rem;
}
`

const Description = styled.div`
color: ${props => props.theme.text};
font-size: calc(0.6em + 1vw);
padding: 0.5rem 0;
${Main}: hover & {

    color: ${props => props.theme.body};
    
}
strong{
    margin - bottom: 1rem;
    text - transform: uppercase;
}
ul, p{
    margin - left: 2rem;
}
`


export default function SkillContent() {
    return (
        <ThemeProvider theme={lightTheme}>
            <Box>
                <LogoComponent />
                <HomeButton />
                <SocialIcons />
                <Main>
                    <Title>
                        <Design width={40} height={40} /> Designer
                    </Title>
                    <Description>
                        I love to create Designs. I believe a quality and creative product takes quality time to accomplish. Minimal, Simple and clean.
                    </Description>
                    <Description>
                        <strong>I like to design. </strong>
                        <ul>
                            <li>Applications</li>
                            <li>Websites</li>
                        </ul>
                    </Description>
                    <Description>
                        <strong>Tools</strong>
                        <ul>
                            <li>Figma</li>
                            <li>Illustrator</li>
                            <li>InkSpace</li>
                        </ul>
                    </Description>
                </Main>
                <Main>
                    <Title>
                        <Develope width={40} height={40} /> FullStack Web Developer
                    </Title>
                    <Description>
                        I enjoy bringing new ideas to life using the MERN stack.
                    </Description>
                    <Description>

                        <strong>Skills</strong>
                        <p>
                            Html, Css, Js, React, Redux, Material UI, Bootstrap, Tailwind, Firebase , Nodejs, Mongodb, Nextjs etc.
                        </p>
                    </Description>
                    <Description>
                        <strong>Tools</strong>
                        <ul>
                            <li>VS Code</li>
                            <li>Git and Github</li>
                        </ul>
                    </Description>
                </Main>
                <Main>
                    <Title>
                        <Linux width={40} height={40} /> Linux Os
                    </Title>
                    <Description>
                        I have my hands on linux and I am pretty comfortable with the linux CLI.<br />
                    </Description>
                    <Description>
                        <strong>Distro's used</strong>
                        <ul>
                            <li>Ubuntu</li>
                            <li>Kali</li>
                        </ul>
                    </Description>
                </Main>
                <Main>
                    <Title>
                        <Coding width={40} height={40} /> Programming
                    </Title>
                    <Description>
                        Being an computer engineering aspirant I have my hands on some of the programming languages.</Description>
                    <Description>
                        <strong>Languages </strong>
                        <ul>
                            <li>C</li>
                            <li>C++</li>
                            <li>JavaScript</li>
                        </ul>
                    </Description>
                </Main>
                <BigTitle text="SKILLS" top="50%" right="30%" />
            </Box>
        </ThemeProvider>
    )
}