import React from 'react';


export interface Interface {
    title:String;
    sub: String;
    description: String;
    skill: String;
    key:number;
}

const DetailSkill =(data: Interface)=> {
    return (
        <li className="mb-5">
            <div className="flex group items-center min-w-full min-h-full">
                <div className="bg-white group-hover:bg-blues z-10 rounded-full border-4 border-blues h-5 w-5">
                    <div className="bg-blues h-1 w-6 items-center  ml-4 mt-1"></div>
                </div>
                <div className="flex-1 ml-4 z-10 font-medium rounded-lg shadow-lg bg-white lg:w-[35rem]" id={'neum'}>
                    <div className="order-1 transition-ease  px-6 py-4">
                        <h3 className="mb-3 font-primaryb text-black  text-2xl">{data.title}</h3>
                        <p className="pb-4 text-sm text-blues font-primaryr">{data.sub}</p>
                        <hr />
                        <p className="text-left text-sm font-primaryr ">
                            {data.description}
                        </p>
                        <p className={'text-blues font-primaryb text-left'}>
                            {data.skill}
                        </p>
                    </div>
                </div>
            </div>
        </li>
    );
};


export default DetailSkill;
