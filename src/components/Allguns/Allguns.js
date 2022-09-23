import React, { useEffect, useState } from 'react';
import SingleGun from '../SingleGuns/SingleGun';

const Allguns = (props) => {
    const [guns, setGuns]=useState([])
    useEffect(()=>{
        fetch(`https://raw.githubusercontent.com/mir-hussain/guns/main/data.json`)
        .then(res=>res.json())
        .then(data => setGuns(data))
    },[])
    return (
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 w-[90%] mx-auto my-10'>
            {
                guns.map((gun)=> <SingleGun gun={gun} key={gun.id} click={props.trigger}></SingleGun>)
            }
        </div>
    );
};

export default Allguns;