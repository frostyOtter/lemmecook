import React from 'react'
import Headers from '@/components/Headers';
import Hero from '@/components/Hero';

type Props = {
    children: React.ReactNode;
};

const Layout = ({children}: Props) => {
    return (
        <div className='flex flex-col min-h-screen'>
            <Headers></Headers>
            <Hero></Hero>
            <div className='container mx-auto'>{children}</div>
        </div>
    )
};

export default Layout;


