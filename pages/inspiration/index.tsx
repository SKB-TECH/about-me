import React from 'react';
import Image from "next/image";
import colabo from '../../public/img.png'

const Index = () => {
    return (
        <section className={'min-w-full h-screen flex flex-col  mt-44 items-center gap-5'}>
            <div>
                <Image src={colabo} alt={'colabo'} width={150} height={150}/>
            </div>
            <div  className={'lg:w-[38rem] h-10 w-[95%] hover:shadow-lg border border-blues rounded-full'}>

            </div>
        </section>
    );
};


export default Index;
