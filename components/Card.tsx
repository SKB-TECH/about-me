import React from 'react';
import Image from 'next/image'
const Card = (country:any) => {

    //console.log(country.continents)
    return (
        <li className="card">
            <Image src={country.flags.svg} alt={"drapeu"+ country.translations.fra.common} />
            <div className='infos'>
                <h2>{country.translations.fra.common} </h2>
                <p>Pop.{country.population.toLocaleString()}</p>
            </div>

        </li>
    );
};

export default Card;
