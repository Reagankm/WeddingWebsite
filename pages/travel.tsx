import PageWrapper from '@/components/PageWrapper/PageWrapper';
import { Space, Text, Title } from '@mantine/core';
import Link from 'next/link';
import React from 'react';

export default function Travel() {
    return (
        <PageWrapper>

            <Title order={3}>Discounts on Flights</Title>
            <Text>Seattle-Tacoma International Airport (SEA) is the closest
                airport. It's a hub for Alaska Airlines.</Text>
            <Text>We have a <b>discount code that gets 7% off</b> Alaska flights that
                occur anytime between January 24 and February 6, 2025. Go to <Link href={'https://alaskaair.com'}>alaskaair.com</Link>
                {' '}and input Discount Code <b>ECMK733</b> when searching for flights.</Text>
            <Text>You need to book through the website, not in the app, in order
                for the code to work. It's only valid for flights within the contiguous United States (not Alaska or Hawaii).</Text>

            <Space h='sm' />
            <Title order={3}>Discounts on Hotels</Title>
            <Text>The Sorrento Hotel is a cool, old hotel on First Hill in Seattle.
                It's located near transit (street cars, buses, light rail) and
                I-5, as well as near some great nightlife, coffee, and restaurants.</Text>
            <Text>We have a <b>discount code for 15% off</b> if you book through <Link href={'https://reservations.travelclick.com/108384?RatePlanId=5504524&discount=events15#/guestsandrooms'}>this link</Link>.</Text>

            <Space h='sm' />
            <Title order={3}>Things To Do</Title>
                made <Link href={'https://www.google.com/maps/d/u/0/edit?mid=1ZHISOQfDBqCc14bhewJ3GMv_cdKbCAE&usp=sharing'}>this Google map</Link>
                {' '}where you can view them all and easily see
                if there's something cool near you.</Text>

            <Text>We also want to call out <Link href={'https://www.walk-seattle.com/'}>Seattle Free Walking Tours</Link>, which does funny and informative walking tours of Pike Place Market and downtown/Pioneer Square.</Text>
            <Text>And also <Link href={'https://www.walk-seattle.com/'}>Tours by Carter</Link> which has a really cool walking tour of 6 women who helped shape Seattle, including a madame, a snake oil salesman, and a mayor.</Text>


        </PageWrapper>
    )
}
