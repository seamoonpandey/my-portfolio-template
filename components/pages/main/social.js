import Link from "next/link"
import { Github, Twitter, Facebook, Instagram, Linkedin } from '../../ui/AllSvgs';
import styled from "styled-components";
import { darkTheme } from "@/components/theme/Theme";


const Icons = styled.div`
display:flex;
flex-direction:column;
align-items:center;

position:fixed;
bottom:0;
left:2rem;

z-index:3;

&>*:not(:last-child){
    margin:.5rem 0;
}

`

const Line = styled.span`
width:2px;
height:7rem;
background-color:${props => props.color === 'dark' ? darkTheme.text : darkTheme.body};

`


export default function SocialIcons(props) {
    return (
        <Icons>
            <div>
                <Link href="https://github.com/seamoonpandey" style={{ color: 'inherit' }} target="_blank">
                    <Github width={25} height={25} fill={props.theme === "dark" ? darkTheme.text : darkTheme.body} />
                </Link>
            </div>
            <div>
                <Link href="https://twitter.com/seamoonpandey" style={{ color: 'inherit' }} target="_blank">
                    <Twitter width={25} height={25} fill={props.theme === "dark" ? darkTheme.text : darkTheme.body} />
                </Link>
            </div>
            <div>
                <Link href="https://www.facebook.com/sea.moon.12576" style={{ color: 'inherit' }} target="_blank">
                    <Facebook width={25} height={25} fill={props.theme === "dark" ? darkTheme.text : darkTheme.body} />
                </Link>
            </div>
            <div>
                <Link href="https://www.instagram.com/pandey_seamoon/" style={{ color: 'inherit' }} target="_blank">
                    <Instagram width={25} height={25} fill={props.theme === "dark" ? darkTheme.text : darkTheme.body} />
                </Link>
            </div>
            <div>
                <Link href="https://www.linkedin.com/in/seamoon-pandey-151b98254/" style={{ color: 'inherit' }} target="_blank">
                    <Linkedin width={25} height={25} fill={props.theme === "dark" ? darkTheme.text : darkTheme.body} />
                </Link>
            </div>
            <Line color={props.theme} />
        </Icons>
    )
}