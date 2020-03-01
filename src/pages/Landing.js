import React from 'react';

import Logo from '../img/0.png';
import Nav from '../components/AuthButtons';
import CustomForm from '../components/CustomForm';
import About from '../components/About';
import '../App.css';

function Landing() {

    return (
       
        <section>
           <div className="section">
                <div className="red">
                    <img src={Logo} alt="Shumba Money Logo"/>
                    <h1>The standard way <br /> to make remittances</h1>
                    <button>Learn why millions trust Shumba Money <i className="fa fa-long-arrow-right" aria-hidden="true"></i></button>
                </div>
                <div className="blue">
                   <Nav />
                </div>
           </div>
           <div className="section-container">
                <div className="left-col">
                    <About />
                </div>
                <div className="right-col">
                   <CustomForm />
                </div>
           </div>
        </section>
    )
}

export default Landing;
