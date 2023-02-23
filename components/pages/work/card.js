import { Github } from "@/components/ui/AllSvgs";
import Link from "next/link";
import styled from "styled-components";
import BigTitle from "../blog/big-title";

const Box = styled.li`
width:16rem;
height:40vh;
background-color:${props => props.theme.text};
color:${props => props.theme.body};
padding:1.5rem 2rem;
margin-right:8rem;
border-radius:5px 40px 5px 40px;
display:flex;
flex-direction:column;
justify-content:space-between;
border:1px solid ${props => props.theme.body};
transition: all 0.2s ease;

&:hover{
    background-color:${props => props.theme.body};
    color:${props => props.theme.text};
    border:1px solid ${props => props.theme.text};
}

`

const Title = styled.h2`
font-size:calc(1em + 0.5vw);
`
const Description = styled.h2`
font-size:calc(0.8em + 0.3vw);
font-family:'Poppins',sans-serif;
font-weight:500;
`
const Tags = styled.div`
border-top:2px solid ${props => props.theme.body};
padding-top:0.5rem;
display:flex;
flex-wrap:wrap;
${Box}:hover &{
    border-top:1px solid ${props => props.theme.text};
}
`
const Tag = styled.span`
margin-right:1rem;
font-size:calc(0.8rem + 0.3vw);

`
const Footer = styled.footer`
display:flex;
justify-content:space-between;

`
const Linking = styled(Link)`
background-color: ${props => props.theme.body};
color: ${props => props.theme.text};
text-decoration:none;
padding:0.5rem calc(2rem + 2vw);
border-radius:0 0 0 50px;
font-size:calc(1em + 0.5vw);

${Box}:hover &{
    background:  ${props => props.theme.text};
    color: ${props => props.theme.body};
}
`

const Git = styled(Link)`
color:inherit;
text-decoration:none;
${Box}:hover &{
   &>*{
    fill:${props => props.theme.text};
   }
}

`

export default function Card(props) {
    const { id, name, description, tags, demo, github } = props.data;
    return (<Box>
        <Title>
            {name}
        </Title>
        <Description>
            {description}
        </Description>
        <Tags>
            {tags.map((t, id) => {
                return <Tag key={id}>#{t}</Tag>;
            })}
        </Tags>
        <Footer>
            <Linking href={demo} target="_blank">
                Visit
            </Linking>
            <Git href={github} target="_blank">
                <Github height={30} width={30} />
            </Git>
        </Footer>

    </Box>)
}