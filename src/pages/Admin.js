import React from 'react';

import Transactions from '../components/Transactions'
import Contacts from '../components/Contacts';
import '../App.css';

function Admin() {
    return (
        <div className="admin-bg">
           <div className="container">
                <div className="row">
                    <div className="col-md-6">
                        <Transactions />
                    </div>
                    <div className="col-md-6">
                        <Contacts />
                    </div>
                </div>
           </div>
        </div>
    )
}

export default Admin
