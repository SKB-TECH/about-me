import React from 'react';
import Bannier from "@/components/Bannier";
import Resume from "@/components/Resume";

const Index = () => {
    return (
        <section className={'flex flex-col justify-around items-center gap-5'}>
          <Bannier/>
          <Resume/>
            <hr className={'W-90% h-1 bg-blue'}/>
        </section>
    );
};


export default Index;
