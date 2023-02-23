import styled, { keyframes, ThemeProvider } from 'styled-components';
import { darkTheme } from '@/components/theme/Theme';
import LogoComponent from '@/components/ui/uicomponents/logo';
import SocialIcons from '@/components/pages/main/social';
import HomeButton from '@/components/ui/buttons/home-button';
import BigTitle from '@/components/pages/blog/big-title';



const Box = styled.div`
background-color: ${props => props.theme.body};
width: 100vw;
height:100vh;
position: relative;
overflow: hidden;
`
const float = keyframes`
0% { transform: translateY(-10px) }
50% { transform: translateY(15px) translateX(15px) }
100% { transform: translateY(-10px) }
`
const Goku = styled.div`
position: absolute;
top: 10%;
right: 5%;
width: 20vw;
animation: ${float} 4s ease infinite;
img{
    width: 100%;
    height: auto;
}
`
const Main = styled.div`
  border: 2px solid ${(props) => props.theme.text};
  color: ${(props) => props.theme.text};
  padding: 2rem;
  width: 50vw;
  height: 60vh;
  z-index: 3;
  line-height: 1.5;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: calc(0.6rem + 1vw);
 backdrop-filter: blur(4px);
  
  position: absolute;
  left: calc(5rem + 5vw);
  top: 10rem;
  font-family: 'Ubuntu Mono', monospace;
  font-style: italic;
`




export default function AboutPage() {
    return (
        <ThemeProvider theme={darkTheme}>
            <Box>

                <LogoComponent theme='dark' />
                <SocialIcons theme='dark' />
                <HomeButton />

                <Goku>
                    <img src="/Images/goku.png" alt="spaceman" />
                </Goku>
                <Main>
                    I'm a Full-Stack developer located in Nepal(still learning). I love to create simple  websites with great user experience.
                    <br /> <br />
                    I'm interested in the whole frontend and backend stack Like trying new things and building great projects. I'm an independent self learned developer. I love to write codes and read books.
                    <br /> <br />
                    I believe everything is an Art when you put your consciousness in it. And the strongest weapon is your resolve.
                </Main>

                <BigTitle text="ABOUT" top="10%" left="5%" />


            </Box>

        </ThemeProvider>

    )
}
