import React from 'react';
import {Divider, Steps, Timeline} from 'antd';

const Experience =()=> {
    // @ts-ignore
    return (
        <div className={'flex flex-col justify-around items-center  min-w-full bg-white'} >
            <h2 className={'lg:ml-10 text-left text-2xl text-blues'}>Experience</h2>
            <div className={'w-[95%] flex flex-col lg:flex-row gap-2'}>
                <div className={'flex flex-row justify-center items-center'}>
                    <Timeline
                        mode="alternate"
                        items={[
                            {
                                children: 'Create a services site 2015-09-01',
                            },
                            {
                                children: 'Solve initial network problems 2015-09-01',
                                color: 'green',
                            },
                            {
                                color: 'red',
                                children: 'Network problems being solved 2015-09-01',
                            },
                            {
                                children: 'Create a services site 2015-09-01',
                            },
                        ]}
                    />
                </div>
                <div>B</div>
            </div>
        </div>
    );
};

export default Experience;
