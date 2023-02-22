import LogoComponent from '@/components/ui/uicomponents/logo';
import styled from 'styled-components';
import SocialIcons from '../main/social';
import HomeButton from '@/components/ui/buttons/home-button';

import { Blogs } from '@/data/BlogData';
import BlogComponent from './blog-component';
import AnchorComponent from './AnchorComponent';
import BigTitle from './big-title';
import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';




const MainContainer = styled(motion.div)`
background-image: url("/Images/seamoonlogo.png");
background-size: cover;
background-repeat: no-repeat;
background-attachment: fixed;
background-position: center;
`
const Container = styled.div`
background-color: ${props => `rgba(${props.theme.bodyRgba},0.8)`};
width: 100%;
height:auto;
position: relative;
padding-bottom: 5rem;
`

const Center = styled.div`
display: flex;
justify-content: center;
align-items: center;
padding-top: 10rem;
`

const Grid = styled.div`
display: grid;
grid-template-columns: repeat(2, minmax(calc(10rem + 15vw), 1fr));
grid-gap: calc(1rem + 2vw);
`

// Framer-motion config
const container = {

    hidden: { opacity: 0 },
    show: {
        opacity: 1,

        transition: {
            staggerChildren: 0.5,
            duration: 0.5,
        }
    }

}

export default function BlogsContent() {

    {

        const [numbers, setNumbers] = useState(0);

        useEffect(() => {
            let num = (window.innerHeight - 70) / 30;
            setNumbers(parseInt(num));
        }, [])


        return (
            <MainContainer
                variants={container}
                initial='hidden'
                animate='show'
                exit={{
                    opacity: 0, transition: { duration: 0.5 }
                }}
            >
                <Container>
                    <LogoComponent />
                    <HomeButton />
                    <SocialIcons />
                    <AnchorComponent number={numbers} />
                    <Center>
                        <Grid>

                            {
                                Blogs.map(blog => {
                                    return <BlogComponent key={blog.id} blog={blog} />
                                })
                            }
                        </Grid>

                    </Center>
                    <BigTitle text="BLOG" top="5rem" left="5rem" />
                </Container>
            </MainContainer>
        )
    }
}