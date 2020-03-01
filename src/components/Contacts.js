import React from 'react';
import Face1 from '../img/12.jpeg';
import Face2 from '../img/100.jpeg';
import Face3 from '../img/115.jpeg';
import Card from '../img/card.png';

function Contacts() {
    return (
        <div className="contacts-wrapper">
           <h2 className="fav-contacts">Favourite Contacts &nbsp;&nbsp;&nbsp;&nbsp;<span>View Contacts <i class="fa fa-long-arrow-right" aria-hidden="true"></i></span></h2> 
           <img className="user-account-profiles" src={Face1} alt="user1" />
           <img className="user-account-profiles" src={Face2} alt="user2" />
           <img className="user-account-profiles" src={Face3} alt="user3" />

           <h2 className="fav-contacts active-card">Active Bank Card &nbsp;&nbsp;&nbsp;&nbsp;<span>View Contacts <i class="fa fa-long-arrow-right" aria-hidden="true"></i></span></h2>
           <img className="card" src={Card} alt="active card" />
        </div>
    )
}

export default Contacts;
