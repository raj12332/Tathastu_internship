import React from 'react';
import web from "../src/images/imga.jpg";
import  { NavLink } from "react-router-dom";
import Common from "./Common";
const Home = ()=>{
    return (
        <>
             <Common name="Grow your buisness now" imgsrc={web} visit="/service" btname="Get Started"/>
        </>
    );
};
export default Home;
