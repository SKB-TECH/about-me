import React from 'react';
import {Skeleton} from "antd";


const Sklt =() => {
    return (
        <div className={'flex flex-col gap-3 w-96 h-56 justify-center items-center shadow-md rounded-lg p-2'}>
            <Skeleton active={true}/>
        </div>
    );
};


export default Sklt;
