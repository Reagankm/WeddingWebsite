import PageWrapper from '@/components/PageWrapper/PageWrapper';
import { protest } from '@/theme';
import { Center, Container, Grid, Space, Title } from '@mantine/core';
import React from 'react';
import Image from 'next/image';
import ventress from '../assets/ventress.jpg';

const HomePage = () => {
    return (
        <PageWrapper>

            <Container
                style={{ position: 'relative',
                                width: '100%',
                                height: '100vh',
                                overflow: 'hidden' }}
            >
            {/*<Container style={{ position: 'relative', width: '100%', height: '100vh' }}>*/}

                {/* Background Image on medium and large screens */}
                <Container visibleFrom='md'>
                    <Image
                        src={ventress}
                        alt="Dog background"
                        layout="fill"  // Use fill to occupy the full container space
                        objectFit="cover"  // Ensures the image covers the full container without distortion
                        priority  // Optimize loading for performance
                        style={{ zIndex: -1 }} // Place it behind other elements
                    />
                </Container>


            <Grid  style={{ height: '100%', zIndex: 1 }} align="center">
                <Grid.Col>

                    {/* For medium and large screens */}
                    {/* TODO: Only do picture, absolute positioning, and textShadow on medium and larger screens */}
                    <Container style={{
                        color: 'white',
                        textShadow: '2px 2px 4px rgba(0, 0, 0, 0.7)'  // Horizontal, Vertical, Blur Radius, Color
                    }} size={'md'} p={'xl'} visibleFrom='md'>
                        <Title>Kevin Ward</Title>
                        <Center>
                        <Title style={{fontFamily: protest.style.fontFamily, fontSize:'4rem'}}>&</Title>
                        </Center>
                        <Title>Reagan Middlebrook</Title>
                    </Container>

                    {/* For small screens */}
                    <Container size={'xs'} p={'xl'} hiddenFrom='md'>
                        <Title order={3} >Kevin Ward</Title>
                        <Center>
                            <Title  order={3} style={{fontFamily: protest.style.fontFamily, fontSize:'4rem'}}>&</Title>
                        </Center>
                        <Title  order={3}>Reagan Middlebrook</Title>
                    </Container>

                    {/* For everybody */}
                    <Space h="xl" />

                    {/* For medium and large screens */}
                    <Container visibleFrom='md'>
                        <Space h="xl" />
                        <Space h="xl" />
                        <Space h="xl" />
                        <Space h="xl" />
                        <Space h="xl" />
                        <Space h="xl" />
                        <Space h="xl" />

                        <Container style={{
                            position: 'absolute',
                            top: '65%',
                            left: '50%',
                            transform: 'translate(-50%, -50%)',
                            color: 'white'}}>
                            <Title order={3}>Save the Date</Title>
                            <Title style={{fontFamily: protest.style.fontFamily}} order={3}>Seattle, WA</Title>
                            <Title order={3}>February 1, 2025</Title>
                        </Container>
                    </Container>

                    {/* For small screens */}
                    <Container hiddenFrom='md'>
                        <Title order={3}>Save the Date</Title>
                        <Title style={{fontFamily: protest.style.fontFamily}} order={3}>Seattle, WA</Title>
                        <Title order={3}>February 1, 2025</Title>
                    </Container>



                </Grid.Col>
            </Grid>
            </Container>
        </PageWrapper>
    )
}

export default HomePage;
