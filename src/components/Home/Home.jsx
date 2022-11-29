import React from 'react';
import Chart from './Chart/Chart';
import proc from '../../assets/img/Customers.svg'
import './Home.css'
const Home = () => {
    return (
        <div className='Home'>
            <div className="home">
            <Chart />
            <img src={proc}   alt="proc images" />
            </div>
        </div>
    );
};

export default Home;