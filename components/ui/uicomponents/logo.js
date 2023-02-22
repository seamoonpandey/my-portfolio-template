import styled from "styled-components"
import Image from "next/image";
import { darkTheme } from "@/components/theme/Theme";


const Logo = styled.h1`
display:'inline-block';
color:${props => props.color === 'dark' ? darkTheme.text : darkTheme.body};
font-family:'Pacifico',cursive;

position:fixed;
left:2rem;
top:2rem;
z-index:3;

`


export default function LogoComponent(props) {
    return (
        <Logo color={props.theme}>
            {/* <Image src='/Images/seamoonlogo.png' alt='logo' height={50} width={50} /> */}
            Ss
        </Logo>
    )
}