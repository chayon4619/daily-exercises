import React, { useState } from 'react';
import { addToLS } from '../../utilites/localstorage';
import Swal from 'sweetalert2';

const Activites = (props) => {

    const { time } = props;

    const [offTime, setOffTime] = useState([0]);

    const handelBreak = (time) => {
        setOffTime(time)
        addToLS(time)
    }

    const sweetalert = () => {
        Swal.fire(
            'Good job!',
            'You Finished Daily Task!',
            'success'
        )
    }

    return (
        <div>
            <div className='p-10'>
                <h1 className='text-2xl font-bold '>Monjur Rahman</h1>
                <p>Khulna, Bangladesh</p>
            </div>
            <div className='flex justify-center  mx-3 bg-white p-2 text-center rounded-lg'>
                <div className='mx-8'>
                    <h2><span className='font-bold text-2xl'>75</span>kg</h2>
                    <p>Weight</p>
                </div>
                <div className='mx-8'>
                    <h2 className='font-bold text-2xl'>6.5</h2>
                    <p>Height</p>
                </div>
                <div className='mx-8'>
                    <h2><span className='font-bold text-2xl'>24</span>yr.</h2>
                    <p>Age</p>
                </div>

            </div>
            <p className='font-semibold mt-8 ml-4 text-2xl '>Add A Break :</p>
            <div className='text-center mt-8 mx-3 bg-white rounded-lg p-2'>
                <div className="gap-2 lg:btn-group-horizontal">
                    <button onClick={() => handelBreak(30)} className="btn mr-3 btn-outline btn-primary btn-circle">30s</button>
                    <button onClick={() => handelBreak(40)} className="btn mr-3 btn-outline btn-primary btn-circle">40s</button>
                    <button onClick={() => handelBreak(50)} className="btn mr-3 btn-outline btn-primary btn-circle">50s</button>
                    <button onClick={() => handelBreak(60)} className="btn mr-3 btn-outline btn-primary btn-circle">60s</button>
                </div>
            </div>
            <p className='font-semibold mt-8 ml-4 text-2xl '>Exercise Details :</p>
            <div className=' mt-4 mx-3 bg-white p-2  rounded-lg'>
                <p className='font-semibold ml-2 text-xl'>Exercise time : {time + 's'}</p>
            </div>
            <div className=' mt-4 mx-3 bg-white p-2  rounded-lg'>
                <p className='font-semibold ml-2 text-xl'>Break time : {offTime + 's'}</p>
            </div>
            <div className="card-actions mt-8 mx-2 justify-center">
                <button onClick={() => sweetalert()} className="btn btn-block btn-primary">Activity Completed</button>
            </div>
        </div>
    );
};

export default Activites;