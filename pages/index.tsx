import { Box, Center, Title, Container, Grid } from '@mantine/core';
import { Julius_Sans_One } from 'next/font/google';
import PageWrapper from '../components/PageWrapper/PageWrapper';

export default function HomePage() {
    return (
        <PageWrapper>
            {/*<Center>*/}
            <Grid>
                <Grid.Col>
                    <Center>
                    <Container>
                        <Title>Kevin Ward</Title>
                        <Title>&</Title>
                        <Title>Reagan Middlebrook</Title>
                    </Container>
                    </Center>
                    <Center>
                    <Container>
                        <Title>February 1, 2025</Title>
                        <Title>Save the Date</Title>
                    </Container>
                    </Center>
                </Grid.Col>
            </Grid>
            {/*</Center>*/}
        </PageWrapper>
    )
}
