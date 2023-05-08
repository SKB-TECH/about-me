import React from 'react';
import Skill from "@/components/Skill";

const Stack = () => {
    return (
        <div className={'flex flex-col justify-around items-center  min-w-full bg-white'} >
            <h2 className={'lg:ml-10 text-left text-2xl text-blues'}>Skills</h2>
            <div className={'w-[95%] flex flex-col lg:flex-row gap-2'}>
                <div className={'lg:w-[50%] min-h-full p-5'}>
                    <Skill title={'Node js'} pourcent={85}/>
                    <Skill title={'Express js'} pourcent={85}/>
                    <Skill title={'Nest Js'} pourcent={85}/>
                    <Skill title={'Php'} pourcent={65}/>
                    <Skill title={'SQL'} pourcent={95}/>
                    <Skill title={'Docker'} pourcent={60}/>
                    <Skill title={'Apach Kafka'} pourcent={65}/>
                    <Skill title={'Postgresql'} pourcent={85}/>
                    <Skill title={'Mysql'} pourcent={95}/>
                    <Skill title={'MongoDB'} pourcent={65}/>
                </div>
                <div className={'lg:w-[50%] min-h-full p-5'}>
                    <Skill title={'Javascript'} pourcent={85}/>
                    <Skill title={'React js'} pourcent={80}/>
                    <Skill title={'Next js'} pourcent={75}/>
                    <Skill title={'React-native'} pourcent={75}/>
                    <Skill title={'Typescript'} pourcent={70}/>
                    <Skill title={'Tailwindcss'} pourcent={75}/>
                    <Skill title={'Html & Css'} pourcent={95}/>
                    <Skill title={'UI/UX DESIGNER'} pourcent={80}/>
                    <Skill title={'Git'} pourcent={85}/>
                    <Skill title={'GitHub'} pourcent={90}/>
                </div>
            </div>
        </div>
    );
};



export default Stack;
