import React from 'react';
import Image from "next/image";
import bens from '../public/v.jpg';
import {BiUser} from 'react-icons/bi'
import {SlGraduation} from 'react-icons/sl'
import {MdOutlineMailOutline} from 'react-icons/md'
import {FiPhone} from "react-icons/fi";
import {Button, Progress} from 'antd';
import Link from "next/link";
import Typewriter from 'typewriter-effect'

const Bannier =() => {
    return (
        <section className={'flex flex-col lg:h-[60rem] lg:flex-row justify-between items-center gap-10 lg:p-10 p-5 lg:mt-20 mt-20'} id={'home'}>
            <div className={'lg:hidden flex flex-col lg:min-h-full h-96 p-2  items-center  gap-5 lg:w-[55%] w-[100%] lg:p-2'} id={'neumd'}>
                <Image src={bens} alt={'ben'}  className={'rounded-lg lg:w-[98%] h-[98%]'}/>
            </div>
            <div className={'flex flex-col plg:p-0 gap-10 min-h-full w-[95%] lg:w-[45%] '}>
                <div className={'flex flex-col gap-5 lg:h-[95%] w-[100%] lg:p-10  p-2 text-justify  '} id={'neum'}>
                    <h2 className={'lg:text-left  font-secondaireb text-black text-2xl'}>{"Hi I'm"}<span className={'text-blues'}>Benjamin</span> Shako Kinyamba</h2>
                    <h2 className={'text-blues font-secondaireb text-2xl'}>
                        <Typewriter
                            options={{
                                strings:[
                                    'Junior Full Stack Developper',
                                    'Web And Mobile',
                                    'UI/UX Designer'
                                ],
                                autoStart:true,
                                loop:true
                            }}

                        />
                    </h2>
                    <p className={'lg:text-left text-lg text-justify font-primaryr'}>
                        I am a Junior Full Stack Developer
                        and Mobile Developer with +4 years of experience in IT
                        development, able and capable to work on any IT development project (personal or team). Backend or frontend,
                        with a capacity to learn so fast I am able to work on any solution or innovation.
                    </p>
                    <div className={'flex flex-col justify-start gap-5'}>
                        <div className={'flex flex-row gap-3'}>
                            <span>
                                <SlGraduation size={30} className={'text-blues font-bold'}/>
                            </span>
                            <span className={'font-primaryr'}>Junior Full Stack Developer</span>
                        </div>
                        <div className={'flex flex-row gap-3'}>
                            <span>
                                <MdOutlineMailOutline size={30} className={'text-blues font-bold'}/>
                            </span>
                            <span className={'font-primaryr'}>shakokinyamba201@gmail.com</span>
                        </div>
                        <div className={'flex flex-row gap-3'}>
                            <span>
                                <FiPhone size={30} className={'text-blues font-bold'}/>
                            </span>
                            <span className={'font-primaryr'}>+243 813 678 926 </span>
                        </div>
                    </div>

                    <div className={'flex flex-col gap-1'}  id={'progress-char'}>
                        <h2 className={'text-xl font-secondairer'}>Languages</h2>
                        <div className={'flex flex-row justify-between'}>
                            <span className={'font-primaryr text-blues '}>French</span>
                            <span className={'font-primaryr text-blues lg:mr-10'}>95%</span>
                        </div>
                        <Progress percent={95} status="active" showInfo={false} strokeColor={'#5a63ea'}/>
                        <div className={'flex flex-row justify-between'}>
                            <span className={'font-primaryr text-blues '}>English</span>
                            <span className={'font-primaryr text-blues lg:mr-10'}>65%</span>
                        </div>
                        <Progress percent={65} status="active" showInfo={false} strokeColor={'#5a63ea'}/>
                    </div>
                </div>
                <div className={'cv flex flex-col w-[100%] h-44 gap-5 justify-center items-center '} id={'cv'}>
                    <h4 className={'font-primaryr text-left text-blues'}>Download my curriculum vitae</h4>
                    <div className={'w-44 h-10 flex flex-col justify-center items-center' +
                        ' text-white font-primaryb hover:animate-bounce'} id={'button'}>
                        <Link target={'_blank'} href={'https://www.canva.com/design/DAFQ9mqFhIM/KHM38C1V-zuqHDOT5IzXLg/edit?utm_content=DAFQ9mqFhIM&utm_campaign=designshare&utm_medium=link2&utm_source=sharebutton'}>DOWNLOAD CV</Link>
                    </div>
                </div>
            </div>
            <div className={'hidden lg:flex flex-col lg:min-h-full h-96 p-2  items-center  gap-5 lg:w-[55%] w-[100%] lg:p-2'} id={'neumd'}>
                <Image src={bens} alt={'ben'}  className={'rounded-lg lg:w-[98%] h-[98%]'}/>
            </div>
        </section>
    );
};


export default Bannier;
