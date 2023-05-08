import React from 'react';
import DetailSkill from "@/components/DetailSkill";
import {expoA} from "@/public/data/experiens";

const Experience =()=> {
    // @ts-ignore
    return (
        <div className={'flex flex-col justify-between items-center  min-w-full'} >
            <h2 className={'lg:ml-10 text-left text-2xl text-blues mb-10 font-secondaireb'}>
                Job Experience
            </h2>
            <div className={'w-[95%] flex flex-col lg:flex-row gap-2'}>

                <div className={'flex flex-col lg:flex-row justify-around items-center lg:gap-20 gap-5'}>
                    <div className="relative">
                        <div className="border-r-4 border-blues absolute h-full top-0" style={{ 'left': '9px' }}></div>
                        <ul className="list-none m-0 p-0">
                            {
                                expoA?.slice(0,2).map((items,index)=>(
                                    <DetailSkill title={items.title} sub={items.sub} description={items.description} skill={items.skill} key={index}/>
                                ))
                            }
                        </ul>
                    </div>

                        <div className="relative">
                            <div className="border-r-4 border-blues absolute h-full top-0" style={{ 'left': '9px' }}></div>
                            <ul className="list-none m-0 p-0">
                                {
                                    expoA?.slice(2,4).map((items,index)=>(
                                        <DetailSkill title={items.title} sub={items.sub} description={items.description} skill={items.skill} key={index}/>
                                    ))
                                }
                            </ul>
                        </div>

                </div>
                </div>
        </div>
    );
};

export default Experience;
