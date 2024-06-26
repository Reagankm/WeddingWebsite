import PageWrapper from '@/components/PageWrapper/PageWrapper';
import { Center, Container, Grid, Space, Title } from '@mantine/core';
import { Protest_Revolution } from 'next/font/google';
import React from 'react';

//const Julius = Julius_Sans_One({ weight: '400', subsets: ['latin'] });
//const Tenor = Tenor_Sans({weight: '400', subsets: ['latin']});
const Protest = Protest_Revolution({weight: '400', subsets: ['latin']});
//const Expletus = Expletus_Sans({weight: '400', subsets: ['latin']});
//const Bungee = Bungee_Shade({weight: '400', subsets: ['latin']});
//const Overlock = Overlock_SC({weight: '400', subsets: ['latin']});
//const Josefin = Josefin_Sans({ weight: '400', subsets: ['latin'] });
//const victorian = localFont({src: '../assets/fonts/Victorian Supremacy Demo.otf'});

const HomePage = () => {
    return (
        <PageWrapper>
            <Grid>
                <Grid.Col>
                    <Container size={'md'} p={'xl'} visibleFrom='md'>
                        <Title>Kevin Ward</Title>
                        <Center>
                        <Title style={{fontFamily: Protest.style.fontFamily, fontSize:'4rem'}}>&</Title>
                        </Center>
                        <Title>Reagan Middlebrook</Title>
                    </Container>

                    <Container size={'xs'} p={'xl'} hiddenFrom='md'>
                        <Title order={3} >Kevin Ward</Title>
                        <Center>
                            <Title  order={3} style={{fontFamily: Protest.style.fontFamily, fontSize:'4rem'}}>&</Title>
                        </Center>
                        <Title  order={3}>Reagan Middlebrook</Title>
                    </Container>

                    <Space h="xl" />

                    <Container>
                        <Title order={3} >Save the Date</Title>
                        <Title style={{fontFamily: Protest.style.fontFamily}} order={3}>Seattle, WA</Title>
                        {/*<Title style={{fontFamily: Protest.style.fontFamily}} order={3}>Seattle, WA</Title>*/}
                        <Title order={3}>February 1, 2025</Title>
                        {/*<Title order={3} >Save the Date</Title>*/}

                    </Container>

                </Grid.Col>
            </Grid>
        </PageWrapper>
    )
}

export default HomePage;
