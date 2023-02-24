import Image from "next/image";
import Link from "next/link";
import styled, { keyframes } from "styled-components";

const rotate = keyframes`
from{
    transform:rotate(0);
}to{
    transform:rotate(-360deg);
}
`
const Center = styled(Link)`
opacity:85%;

display: flex;
flex-direction:column;
gap:20px;
text-decoration: none;
text-align:center;
color:black;
position:absolute;
top:50%;
left:50%;
height: 200px;
width:200px;
transform:translate(-50%,-50%);
border:none;
outline:none;
background-color:transparent;
cursor:pointer;

display:flex;
flex-direction:column;
justify-content:center;
align-items:center;

transition:transform 10s ease-in-out;

&>:first-child{
    animation:${rotate} infinite 2s;
}


`

const Text = styled.div`
font-size:100px;
font-family:'Poppins';
opacity:40%;
text-align:center;
`

export default function ErrorPageContent() {
    function genjutsu() {
        alert("You are already under My genjutsu");
    }

    return (
        <div>
            <Text>
                Oops!
                Something you are searching is that something I forgot to make!
            </Text>
            <Center href="/" onClick={genjutsu}>
                <Image
                    src="/Images/mangekyou.png"
                    style={{
                        borderRadius: '50%'
                    }}
                    height={500}
                    width={500}
                    alt="mageko sharingan"
                />
                <span>Break The Genjutsu<br />Break The Eye</span>

            </Center>
        </div>
    )
}