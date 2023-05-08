import React from 'react';

export interface  citations {
    text: String;
    author: String;
    key:number;
}
const Citation =(data:citations) => {
    return (
        <div className={'flex flex-col gap-3 w-96 h-56 justify-center items-center shadow-md rounded-lg p-2'}>
            <p className={'font-primaryr text-justify'}>
                {
                    data.text
                }
            </p>
            <hr className={'text-blues'}></hr>
            <span className={'text-blues font-bold text-lg'}>Author: {data.author}</span>
        </div>
    );
};


export default Citation;
