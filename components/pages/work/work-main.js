import { useEffect, useRef } from 'react';
import styled, { keyframes, ThemeProvider } from 'styled-components';
import { darkTheme } from '@/components/theme/Theme';
import LogoComponent from '@/components/ui/uicomponents/logo';
import SocialIcons from '@/components/pages/main/social';
import HomeButton from '@/components/ui/buttons/home-button';
import BigTitle from '../blog/big-title';
import { Work } from '@/data/WorkData';
import Card from './card';
import { Setting } from '@/components/ui/AllSvgs';
import { motion } from 'framer-motion';





const Box = styled.div`
  background-color: ${(props) => props.theme.body};
  height: 400vh;
  position: relative;
  display: flex;
  align-items: center;
`;

const Main = styled(motion.ul)`
  position: fixed;
  top: 12rem;
  left: calc(10rem + 15vw);
  height: 40vh;
  display: flex;
  color: white;
`;
const Rotate = styled.span`
  display: block;
  position: fixed;
  right: 1rem;
  bottom: 1rem;
  width: 80px;
  height: 80px;
  z-index: 1;
`;

const Alert = styled.div`
z-index:3;
display:block;
position:fixed;
left:28%;
bottom:1rem;
wordWrap: wrap;
color:#ECECEC;


`

// Framer-motion Configuration
const container = {
    hidden: { opacity: 0 },
    show: {
        opacity: 1,

        transition: {
            staggerChildren: 0.5,
            duration: 0.5,
        },
    },
};

export default function WorkContent() {
    const ref = useRef(null);
    const settIn = useRef(null);

    useEffect(() => {
        let element = ref.current;

        const rotate = () => {
            element.style.transform = `translateX(${-window.pageYOffset}px)`;

            return (settIn.current.style.transform =
                "rotate(" + -window.pageYOffset + "deg)");
        };

        window.addEventListener("scroll", rotate);
        return () => {
            window.removeEventListener("scroll", rotate);
        };
    }, []);

    return (
        <ThemeProvider theme={darkTheme}>
            <Box>
                <LogoComponent theme="dark" />
                <SocialIcons theme="dark" />
                <HomeButton />

                <Main ref={ref} variants={container} initial="hidden" animate="show">
                    {Work.map((d) => (
                        <Card key={d.id} data={d} />
                    ))}
                </Main>
                <Rotate ref={settIn}>
                    <Setting width={80} height={80} fill={darkTheme.text} />
                </Rotate>

                <BigTitle text="WORK" top="32%" right="30%" />
                <Alert>
                    These given demos do not operate as they are said to be due to the access removal of the database. So they are just demos for the frontend
                </Alert>
            </Box>
        </ThemeProvider>
    );
};
