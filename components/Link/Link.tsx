import NextJSLink from 'next/link';
import { ReactNode } from 'react';

export default function Link({ href, className, children }:
{ href: string; className: string; children: ReactNode }) {

    return <NextJSLink target='_blank' className={className} href={href}>
        {children}
    </NextJSLink>
}
