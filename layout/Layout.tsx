import React, {PropsWithChildren} from 'react';
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
const Layout = ({children}: PropsWithChildren) => {
    return (
        <>
            <header>
                <Navbar/>
            </header>
            <main className={'max-w-screen mt-16 mb-12'}>
                {
                    children
                }
            </main>
            <Footer/>
        </>
    );
};

export default Layout;
