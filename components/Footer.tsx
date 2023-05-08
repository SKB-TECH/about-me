import React from 'react';
import Link from "next/link";
import {RiLinkedinFill, RiTwitterLine, RiGithubFill} from 'react-icons/ri'
const Footer =()=> {
    return (
        <section className={'min-w-full h-44 lg:h-40 flex flex-col '}>
            <hr className={'text-blues'}></hr>
            <div className={'flex flex-row lg:ml-10 ml-4 gap-5 mt-10 mb-10'}>
               <div className={'w-10 h-10 flex flex-col justify-center items-center'} id={'addresse'}>
                   <Link href={'https://www.linkedin.com/in/benjamin-kinyamba-964766236/'} target={'_blank'}>
                        <RiLinkedinFill size={30} className={'text-blues'}/>
                   </Link>
               </div>
                <div className={'w-10 h-10 flex flex-col justify-center items-center'} id={'addresse'}>
                    <Link href={'https://twitter.com/s_kinyamba'} target={'_blank'} >
                        <RiTwitterLine size={30} className={'text-blues'}/>
                    </Link>
                </div>
                <div className={'w-10 h-10 flex flex-col justify-center items-center'} id={'addresse'}>
                    <Link href={'https://github.com/SKB-TECH'} target={'_blank'}>
                        <RiGithubFill size={30} className={'text-blues'}/>
                    </Link>
                </div>
            </div>
            <hr className={'text-blues'}></hr>
            <div className={'flex flex-col items-center justify-center lg:mt-5 mb-20'}>
                <p className={'font-primaryr text-blues text-sm ml-2 lg:ml-0'}>All rights reserved by Shako Kinyamba Benjamin SKB-TECH</p>
            </div>
        </section>
    );
};

export default Footer;
