import React, { useEffect, useState } from 'react';
import Activites from '../Activites/Activites';
import SingleCard from '../SingleCard/SingleCard';

const Interface = () => {


    const [exercises, setExercises] = useState([]);
    const [time, setTime] = useState([])

    useEffect(() => {
        fetch('excersise.json')
            .then(res => res.json())
            .then(data => setExercises(data))
    }, [])

    const handelCart = (time) => {
        // console.log(time)
        setTime(time)
    }

    return (
        <div class="grid grid-cols-4 gap-4">
            <div className="card-container col-span-3 mt-14 ml-20">
                <h1 className='text-4xl font-bold text-indigo-700'>Daily-Exercises</h1>
                <p className='py-6 text-2xl font-bold'>Select Your Items</p>
                <div className='grid grid-cols-2 gap-4 mb-10'>
                    {
                        exercises.map(exercise => <SingleCard
                            key={exercise._id}
                            exercise={exercise}
                            handelCart={handelCart}
                        ></SingleCard>)
                    }
                </div>


            </div>
            <div className="activities-container bg-slate-200">
                <Activites
                    time={time}
                ></Activites>
            </div>
        </div>
    );
};

export default Interface;