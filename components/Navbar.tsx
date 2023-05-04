import React, {useEffect, useState} from 'react';
import {AiOutlineClose, AiOutlineMenu} from "react-icons/ai";
import logo from "../public/ben.png";
import Image from "next/image";
import Link from "next/link";
import {MdOutlineDarkMode} from "react-icons/md";
const Navbar = () => {

    const [active, setActive] = useState(false);
    const [isScroll, setIsScroll] = useState(false);

    const listenScrollEvent = () => {
        window.scrollY > 10 ? setIsScroll(true) : setIsScroll(false);
    };

    const handlClic = () => {
        setActive(!active);
    };

    useEffect(() => {
        window.addEventListener("scroll", listenScrollEvent);
        return () => {
            window.removeEventListener("scroll", listenScrollEvent);
        };
    }, []);
    return (
        <section className={`fixed font-p_medium  w-full h-16  top-0 left-0 right-0 ${
        isScroll && "z-[100]  shadow-lg  bg-white text-blue_principe"
    }`}>

            <section className={`flex items-center justify-around  w-full h-full`}>
                <div className='md:flex lg:ml-10 cursor-pointer'>
                    <Image
                        src={logo}
                        alt='Picture of the author'
                        width={80}
                        height={80}
                    />
                </div>
                <div className={'md:flex text-1xl ml-44 lg:mr-20'}>
                    <ul className={`items-center justify-around hidden cursor-pointer ${isScroll && 'text-blue_principe'} md:flex gap-10`}>
                        <Link href='/' className='flex flex-col '>
                            <li className='text-lg  font-poppins hover:text-blue_ciel'>
                                Home
                            </li>
                        </Link>
                        <Link href='/' className='flex flex-col '>
                            <li className='text-lg  font-poppins hover:text-blue_ciel'>
                                About
                            </li>
                        </Link>
                        <div className={`drop1 ${isScroll ? "linkItem-light" : "linkItem"}`}>
                            Projects
                            <div className={`dropdown1 w-60 h-28`}>
                                <div className={'container'}>
                                    <div className={`row-auto`}>
                                        <div className={`dropdown1-items`}>
                                            <Link href='/' className={`linkItem-light2 text-lg`}>
                                                <li className='hover:text-blue_ciel'>
                                                    Web projects
                                                </li>
                                            </Link>
                                        </div>
                                        <div className={`dropdown1-items`}>
                                            <Link href='/' className={`linkItem-light2 text-lg`}>
                                                <li className='hover:text-blue_ciel'>
                                                    Mobile projects
                                                </li>
                                            </Link>
                                        </div>
                                        <div className={`dropdown1-items`}>
                                            <Link href='/' className={`linkItem-light2 text-lg`}>
                                                <li className='hover:text-blue_ciel'>
                                                    UIX Projects
                                                </li>
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <Link href='/' className='text-lg'>
                            <li className='hover:text-blue_ciel'>Experiences</li>
                        </Link>
                        <Link href='/' className='text-lg'>
                            <li className='hover:text-blue_ciel'>Contact</li>
                        </Link>
                    </ul>
                </div>
                <div className={'hidden lg:flex flex-row lg:mr-10'}>
                    <ul className='flex justify-center items-center font-p_medium gap-5'>
                        <Link href='/' className={'flex text-lg flex-row gap-1 items-center'}>
                            <MdOutlineDarkMode size={25} />
                        </Link>
                    </ul>
                </div>
                <div className='cursor-pointer z-1000 md:hidden' onClick={handlClic}>
                    <AiOutlineMenu size={30} />
                </div>
                <div
                    className={
                        active ? "md:fixed top-0 left-0 w-full h-screen  z-10" : ""
                    }>
                    <div
                        className={
                            active
                                ? "fixed top-0 left-0 w-[75%] md:w-[45%] h-screen bg-white p-4 ease-in duration-500"
                                : "fixed left-[-100%] top-0 p-10 ease-in duration-500 z-10"
                        }>
                        <div className='flex items-center justify-between z-[1000]'>
                            <div className=''>
                                <Image
                                    src={logo}
                                    alt='Picture of the author'
                                    width={150}
                                    height={150}
                                />
                            </div>
                            <div
                                onClick={handlClic}
                                className='p-2 mr-2 rounded-full shadow-lg cursor-pointer shadow-gray-400'>
                                <AiOutlineClose />
                            </div>
                        </div>
                        <div className='my-4 border-b border-gray-300'>
                            <p className='w-[85%] md:w-[90%] py-4 mx-auto '>
                                Que voulez-vous faire ?
                            </p>
                        </div>
                        <div className={`flex font-p_medium flex-col py-4 gap-10 cursor-pointer  ${isScroll && 'text-blue_principe'}`}>
                            <ul className='uppercase flex flex-col'>
                                <Link href='/' className='text-lg'>
                                    <li className='hover:text-blue_ciel '>Home</li>
                                </Link>
                                <Link href='/' className='text-lg'>
                                    <li className='hover:text-blue_ciel '>About</li>
                                </Link>
                                <Link href='/' className='text-lg'>
                                    <li className='hover:text-blue_ciel '>School</li>
                                </Link>
                                <Link href='/' className='text-lg'>
                                    <li className='hover:text-blue_ciel '>Contact</li>
                                </Link>
                            </ul>
                            <div className='pt-10 flex flex-col font-p_medium'>
                                <Link href='/' className={'flex text-lg flex-row gap-1 items-center'}>
                                    <MdOutlineDarkMode size={25} />
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </section>
    );
};


export default Navbar;