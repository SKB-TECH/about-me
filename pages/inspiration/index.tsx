import React, {useEffect, useState} from 'react';
import Image from "next/image";
import colabo from '../../public/img.png'
import axios from "axios";
import * as process from "process";
import Citation, {citations} from "@/components/Citation";
import {Skeleton} from "antd";
import Sklt from "@/components/Sklt";


const Index = () => {
    const [data,setData]=useState<[]>()
    // @ts-ignore
    useEffect(()=>{
        async function fetching() {
            try{
                const res=await axios.get(`${process.env.NEXT_PUBLIC_URL}`,{
                })
                return setData(res.data)
            }
            catch (e) {
                // @ts-ignore
                console.log(e)
            }
        }
        fetching()
        console.log(data)
    },[data])
    // @ts-ignore
    return (
        <section className={'min-w-full min-h-full  mt-32 flex flex-col   items-center'}>
            <h2 className={'text-black font-secondaireb text-2xl p-5 lg:p-0'}>List of the 5 citations out of 6574 possible in the api</h2>
            <div  className={'lg:min-w-full flex flex-col justify-center items-center lg:flex-row gap-5 p-5 flex-wrap'}>

                        {
                            data? data.slice(0,5).map((items:citations,index)=>(
                                <Citation text={items.text} author={items.author} key={index}/>
                            )):(
                                [1,2,2,4,5].map((item,index)=>(
                                    <Sklt key={index}/>
                                ))
                            )
                        }
            </div>
        </section>
    );
};


export default Index;
