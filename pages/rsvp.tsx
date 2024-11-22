import PageWrapper from '@/components/PageWrapper/PageWrapper';
import { Center } from '@mantine/core';
import React, { useEffect, useState } from 'react';
import ScrollToTop from 'react-scroll-to-top';


export default function RSVP() {
    const [isTablet, setIsTablet] = useState(false);//window.innerWidth <= 767 && window.innerWidth > 575);
    const [isMobile, setIsMobile] = useState(false);//window.innerWidth <= 575);

    useEffect(() => {
        const handleResize = () => {
            setIsTablet(window.innerWidth < 768  && window.innerWidth > 575);
            setIsMobile(window.innerWidth <= 575);
        };
        if (typeof window !== 'undefined') {
            window.addEventListener('resize', handleResize);
            // Call to set initial size
            handleResize();
        }
        return () => {
            if (typeof window !== 'undefined') {
                window.removeEventListener('resize', handleResize);
            }
        }
    }, []);

    return (
        <PageWrapper>
            <Center>
                <iframe className="rsvp-form"
                        src="https://docs.google.com/forms/d/e/1FAIpQLSeVRI5u-uYc_lhSwCOnQkZCCSGs2UUp9bRrYA_z4FIefeDkRQ/viewform?embedded=true"
                        width={isTablet ? "320" : isMobile ? "280" : "640"}
                        height="1020"
                >Loading…</iframe>
            </Center>
            <ScrollToTop className="scrollToTop" />
        </PageWrapper>

    );
}
