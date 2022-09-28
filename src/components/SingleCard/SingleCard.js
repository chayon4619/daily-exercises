import React from 'react';
import './SingleCard.css'
const SingleCard = (props) => {


    const { name, picture, age, time } = props.exercise;
    const { handelCart } = props
    return (
        <div>
            <div className="card card-compact w-96 bg-base-100 shadow-xl one-card">
                <figure><img src={picture} alt="Shoes" /></figure>
                <div className="card-body">
                    <h2 className="card-title text-blue-800">{name}</h2>
                    <p>Exercise is very important for our health.We should exercise everyday.</p>
                    <h2 className="card-title">Age Limit : <span className='text-rose-700'>{age}yr.</span> </h2>
                    <h2 className="card-title">Duration : <span className='text-teal-500'>{time}s.</span></h2>

                    <div className="card-actions justify-center">
                        <button onClick={() => handelCart(time)} className="btn btn-block btn-primary">Add Exercise</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SingleCard;