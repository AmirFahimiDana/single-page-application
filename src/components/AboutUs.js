import React from 'react';
import { Link, useNavigate,Outlet } from 'react-router-dom';
import Skeleton from './Skeleton';
import styled from "styled-components";

const AboutUs = () => {
    const navigate = useNavigate();
    const Div = styled.div`
    align-items: center;
    display: flex;
    justify-content: space-evenly;`;
    const clickHandler = () => {
        navigate('/');
        // navigate('/',{replace : true});
        // navigate(-1);
        // navigate(1);
    }

    return (
        <Div>
           <h1>About Us</h1> 
           <button onClick={clickHandler}>Go To</button>
           <ul>
            <li><Link to="programmers">Programmers</Link></li>
            <li><Link to="drivers">Drivers</Link></li>
           </ul>
           <br />
           <br />
           <Outlet />
           <Skeleton />
        </Div>
    );
};

export default AboutUs;