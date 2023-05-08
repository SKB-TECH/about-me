import React from 'react';
import PropTypes from 'prop-types';
import {Progress} from "antd";

export interface skills {
    title:String;
    pourcent:number;

}
const Skill = (data:skills) => {
    return (
        <>
            <div className={'flex flex-row justify-between'}>
                <span className={'font-primaryr text-blues '}>{data.title}</span>
                <span className={'font-primaryr text-blues lg:mr-10'}>{`${data.pourcent}%`}</span>
            </div>
            <Progress percent={data.pourcent} status="active" showInfo={false} strokeColor={'#5a63ea'}/>
        </>
    );
};

export default Skill;
