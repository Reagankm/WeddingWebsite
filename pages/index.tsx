import PageWrapper from '@/components/PageWrapper/PageWrapper';
import { protest } from '@/theme';
import { Center, Container, Grid, Space, Title } from '@mantine/core';
import { useMediaQuery } from '@mantine/hooks';
import Image from 'next/image';
import React from 'react';
import ventress from '../assets/ventress.jpg';

const HomePage = () => {
    const isMediumScreen = useMediaQuery('(min-width: 62em)');

    // Helper function to generate multiple <Space /> components
    const renderSpaces = (count: number) => {
        return Array.from({ length: count }).map((_, index) => <Space key={index} h="xl" />);
    };

    return (
        <PageWrapper>

          {isMediumScreen ? (
            <Container
                style={{
                    position: 'relative',
                    width: '100%',
                    height: '100vh',
                    overflow: 'hidden' }}>
                <Image
                    src={ventress}
                    alt="Dog background"
                    layout="fill"
                    objectFit="cover"
                    priority
                    style={{ zIndex: -1 }}
                />
                <div
                    style={{
                        position: 'absolute',
                        top: 0,
                        left: 0,
                        width: '100%',
                        height: '100%',
                        backgroundColor: 'rgba(0, 0, 0, 0.25)', // Black with 33% opacity
                        zIndex: -1, // Place it between the image and text
                    }}
                />

            <Grid  style={{ height: '100%', zIndex: 1 }}
                   align="center">
                <Grid.Col>
                    <Container style={{
                        color: 'white',
                        textShadow: '2px 2px 4px rgba(0, 0, 0, 0.7)' // Horizontal, Vertical, Blur Radius, Color
                    }}
                               size={'md'}
                               p={'xl'}>
                        <Title order={1}>Kevin Ward</Title>
                        <Center>
                            <Title order={1}
                                   style={{fontFamily: protest.style.fontFamily, fontSize:'4rem'}}>&</Title>
                        </Center>
                        <Title order={1}>Reagan Middlebrook</Title>
                    </Container>

                    {renderSpaces(8)}

                    <Container style={{
                        position: 'absolute',
                        top: '65%',
                        left: '50%',
                        transform: 'translate(-50%, -50%)',
                        color: 'white'}}>

                      <Title order={3}>February 1, 2025</Title>
                      <Title style={{fontFamily: protest.style.fontFamily}} order={4}>Doors at 2:30pm; Ceremony at 3pm</Title>
                      <Title order={3}>WithinSoDo</Title>
                      <Title order={4}>2916 Utah Ave S</Title>
                      <Title order={4}>Seattle, WA</Title>

                    </Container>

                </Grid.Col>
            </Grid>
            </Container>) : (
            <Container>
              <Grid align="center">
                <Grid.Col>
                  <Container style={{
                    color: 'black',
                  }}
                             size={'xs'}
                             p={'xl'}>
                    <Title order={3}>Kevin Ward</Title>
                    <Center>
                      <Title order={3}
                             style={{fontFamily: protest.style.fontFamily, fontSize:'4rem'}}>&</Title>
                    </Center>
                    <Title order={3}>Reagan Middlebrook</Title>
                  </Container>

                  {renderSpaces(1)}

                  <Container>

                    <Title order={3}>February 1, 2025</Title>
                    <Title style={{fontFamily: protest.style.fontFamily}} order={4}>Doors at 2:30pm; Ceremony at 3pm</Title>
                    <Title order={3}>WithinSoDo</Title>
                    <Title order={4}>2916 Utah Ave S</Title>
                    <Title order={4}>Seattle, WA</Title>

                  </Container>

                </Grid.Col>
              </Grid>
            </Container>
          )}
        </PageWrapper>
    )
}

export default HomePage;
