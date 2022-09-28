import React from 'react';
import './Blog.css'

const Blog = () => {
    return (
        <div>
            <h2 className=" text-center font-bold text-5xl mb-8 text-blue-800">Blog</h2>
            <div className='grid grid-cols-1 lg:grid-cols-3 ml-4 lg:ml-10 gap-4 mb-10'>
                <div className="card w-96 bg-primary text-primary-content">
                    <div className="card-body">
                        <h2 className="card-title">How does React work ?</h2>
                        <p>ReactJS divides the UI into isolated reusable pieces of code known as components. React components work similarly to JavaScript functions as they accept arbitrary inputs called properties or props. It's possible to have as many components as necessary without cluttering your code.</p>
                    </div>
                </div>
                <div className="card w-96 bg-primary text-primary-content">
                    <div className="card-body">
                        <h2 className="card-title">What are the differences between props and state ?</h2>
                        <p>Props are used to pass data from one component to another. The state is a local data storage that is local to the component only and cannot be passed to other components. The this. setState property is used to update the state values in the component.</p>
                    </div>
                </div>
                <div className="card w-96 bg-primary text-primary-content">
                    <div className="card-body">
                        <h2 className="card-title">Why we use useEffect ?</h2>
                        <p>The useEffect Hook allows you to perform side effects in your components. Some examples of side effects are: fetching data, directly updating the DOM, and timers. useEffect accepts two arguments. The second argument is optional.</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Blog;