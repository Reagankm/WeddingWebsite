import PageWrapper from '@/components/PageWrapper/PageWrapper';
import { protest } from '@/theme';
import { Center, Container, Grid, Space, Title } from '@mantine/core';
import React from 'react';

const HomePage = () => {
    return (
        <PageWrapper>
            <Grid>
                <Grid.Col>
                    <Container size={'md'} p={'xl'} visibleFrom='md'>
                        <Title>Kevin Ward</Title>
                        <Center>
                        <Title style={{fontFamily: protest.style.fontFamily, fontSize:'4rem'}}>&</Title>
                        </Center>
                        <Title>Reagan Middlebrook</Title>
                    </Container>

                    <Container size={'xs'} p={'xl'} hiddenFrom='md'>
                        <Title order={3} >Kevin Ward</Title>
                        <Center>
                            <Title  order={3} style={{fontFamily: protest.style.fontFamily, fontSize:'4rem'}}>&</Title>
                        </Center>
                        <Title  order={3}>Reagan Middlebrook</Title>
                    </Container>

                    <Space h="xl" />

                    <Container>
                        <Title order={3}>Save the Date</Title>
                        <Title style={{fontFamily: protest.style.fontFamily}} order={3}>Seattle, WA</Title>
                        <Title order={3}>February 1, 2025</Title>
                    </Container>

                </Grid.Col>
            </Grid>
        </PageWrapper>
    )
}

export default HomePage;
