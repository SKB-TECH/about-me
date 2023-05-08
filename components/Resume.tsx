import React ,{useState}from 'react';
import {Button, Progress} from "antd";
import Link from "next/link";
import Skill from "@/components/Skill";
import Stack from "@/components/Stack";
import Experience from "@/components/Experience";

const Resume = () => {
    const [isactive,setIsactive]=useState<boolean>(true)
    const handlClick=()=>{
        setIsactive(!isactive)
    }
    // @ts-ignore
    return (
        <section className={'flex flex-col justify-around items-center min-w-full min-h-full lg:mt-20 gap-5'} id={'resume'}>
            <p className={'text-blues font-primaryr '}> +4 YEARS OF EXPERIENCE</p>
            <h2 className={'text-blues font-secondaireb lg:text-4xl text-2xl '}>My Resume</h2>
            <div className={'flex flex-row w-[90%] h-20'}>
                <div className={'w-[50%] h-10'} id={'neum'}>
                    <Button className={'w-[100%] h-[100%] lg:text-2xl  text-white font-bold transform bg-rose hover:bg-blues'} onClick={handlClick}>
                        Experience
                    </Button>
                </div>
                <div className={'w-[50%] h-10'} id={'neumd'}>
                    <Button className={'w-[100%] h-[100%] lg:text-2xl  text-white font-bold transform bg-rose hover:bg-blues'} onClick={handlClick}>
                        Skills</Button>
                </div>
            </div>
            {
                !isactive ? <Experience/>:<Stack/>
            }
        </section>
    );
};

export default Resume;
