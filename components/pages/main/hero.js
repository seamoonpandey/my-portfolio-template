
import SocialIcons from "@/components/pages/main/social";
import HomeButton from "@/components/ui/buttons/home-button";
import LogoComponent from "@/components/ui/uicomponents/logo";
import styled, { keyframes } from "styled-components";

import Link from "next/link";
import { Setting } from "@/components/ui/AllSvgs";
import { useState } from "react";
import Intro from "./intro";
import { motion } from "framer-motion";


const MainContainer = styled.div`
background: ${props => props.theme.body};
width:100vw;
height: 100vh;
overflow: hidden;

position:relative;
h2,h2,h4,h5,h6{
    font-family:'Karla',sans-serif;
    font-weght:500;
}
`

const Container = styled.div`
padding:2rem;

`
const Contact = styled(Link)`
color:${props => props.theme.text};
position:absolute;
top:2rem;
right: calc(1rem + 2vw);
text-decoration:none;
z-index:3;

`
const BLOG = styled(Link)`
color:${props => props.theme.text};
position:absolute;
top:50%;
right: calc(1rem + 2vw);
transform:rotate(90deg) translate(-50%,-50%);
text-decoration:none;
z-index:1;

`
const WORK = styled(Link)`
color: ${props => props.click ? props.theme.body : props.theme.text};
position: absolute;
top: 50%;
left: calc(1rem + 2vw);
transform: translate(-50%, -50%) rotate(-90deg) ;
text-decoration: none;
z-index:1;
`

const BottomBar = styled.div`
position:absolute;
bottom:1rem;
left:0;
right:0;
width:100%;

display:flex;
justify-content:space-evenly;

`
const ABOUT = styled(Link)`
color:${props => props.click ? props.theme.body : props.theme.text};
text-decoration:none;
z-index:1;

`
const SKILLS = styled(Link)`
color:${props => props.theme.text};
text-decoration:none;
z-index:1;

`
const rotate = keyframes`
from{
    transform:rotate(0);
}to{
    transform:rotate(360deg);
}
`
const Center = styled.button`
position:absolute;
top:${props => props.click ? '85%' : '50%'};
left:${props => props.click ? '92%' : '50%'};
transform:translate(-50%,-50%);
border:none;
outline:none;
background-color:transparent;
cursor:pointer;

display:flex;
flex-direction:column;
justify-content:center;
align-items:center;

transition:all 1s ease;

&>:first-child{
    animation:${rotate} infinite 1.5s linear;
}
&>:last-child{
    display:${props => props.click ? 'none' : 'inline-block'}
    padding-top:1rem;
}

`
const DarkDiv = styled.div`
position:absolute;
top:0;
background-color:#000;
bottom:0;
right:50%;
width:${props => props.click ? '50%' : '0%'};
height:${props => props.click ? '100%' : '0%'};
z-index:1;
transition:height .5s ease, width 1s ease .5s;

`

export default function Hero() {
    const [click, setClick] = useState(false);
    function handleClick() {
        setClick(prevState => !prevState);
    }

    return (
        <MainContainer>
            <DarkDiv click={click} />
            <Container>
                <HomeButton />
                <LogoComponent theme={click ? 'dark' : 'light'} />
                <SocialIcons theme={click ? 'dark' : 'light'} />
                <Center click={click}>
                    <Setting onClick={handleClick} width={click ? 120 : 200} height={click ? 120 : 200} fill='currentColor' />
                    {!click && (<span><h3>Who am I ?</h3></span>)}
                </Center>
                <Contact href="mailto:hackedasocial@gmail.com">
                    <motion.h2
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                    >
                        Talk to me...
                    </motion.h2>
                </Contact>
                <BLOG href="/blog">
                    <motion.h2
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                    >
                        Blog
                    </motion.h2>
                </BLOG>
                <WORK href="/work">
                    <motion.h2
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                    >
                        Work
                    </motion.h2>
                </WORK>
                <BottomBar>
                    <ABOUT href="/about" click={click}>
                        <motion.h2
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.9 }}>
                            About me
                        </motion.h2>
                    </ABOUT>
                    <SKILLS href="/skills" click={click}>
                        <motion.h2
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.9 }}
                        >
                            My skills
                        </motion.h2>
                    </SKILLS>
                </BottomBar>
            </Container>
            {click && (<Intro click={click} />)}
        </MainContainer>
    )
}