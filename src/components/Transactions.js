import React from 'react';
import { Card, Accordion, Button } from 'react-bootstrap';

import Face1 from '../img/12.jpeg';
import Face2 from '../img/100.jpeg';
import Face3 from '../img/115.jpeg';

function Transactions() {
    {/**ON A REAL APPLICATION I WOULD HAVE THE DATA OF THE USER ACCOUNTS AS A JSON OBJECT HERE AND MAP THROUGH IT IN THE JSX TEMPLATE */}
    return (
        <div>
            <Accordion className="accordion">
                <Card>
                    <Card.Header className="card-header">
                        <div className="row">
                            <div className="col val transact-txt">Transactions</div>
                            <div className="col val latest"><span>Latest first <i class="fa fa-angle-down" aria-hidden="true"></i>  </span></div>
                            <div className="col">
                                <input type="text" placeholder="Search Transactions" className="search-input"/>
                            </div>
                        </div>
                    </Card.Header>
                </Card>
                <Card>
                    <Card.Header className="accounts-header">
                        <div className="face-wrapper">
                            <img src={Face1} alt="Face1" />
                        </div>
                        <div className="account-details">
                            <h4>Mary Marshall</h4>
                            <p className="amnt">USD $200.00</p>
                            <p className="date"><span>SENT</span> 23 February 2020 at 12:20 am</p>
                        </div>
                    <Accordion.Toggle as={Button} variant="link" eventKey="0" className="btn-toggler">
                        Open <i class="fa fa-angle-down" aria-hidden="true"></i>
                    </Accordion.Toggle>
                    </Card.Header>
                    <Accordion.Collapse eventKey="0">
                    <Card.Body class="card-body-accordion">
                        <h5>Notes</h5>
                        <p>Hey Mary. Happy birthday. Too bad I can not come to Zimbabwe to celebrate with you. So I sent you this money to buy whatever you want. Have a god day.</p>
                        <button>Report an issue with this transaction <i class="fa fa-long-arrow-right" aria-hidden="true"></i></button>
                    </Card.Body>
                    </Accordion.Collapse>
                </Card>
                <Card>
                <Card.Header className="accounts-header">
                        <div className="face-wrapper">
                            <img src={Face2} alt="Face1" />
                        </div>
                        <div className="account-details">
                            <h4>Frank Jones</h4>
                            <p className="amnt">USD $139.00</p>
                            <p className="date"><span>SENT</span> 26 February 2020 at 09:20 am</p>
                        </div>
                    <Accordion.Toggle as={Button} variant="link" eventKey="2" className="btn-toggler">
                        Open <i class="fa fa-angle-down" aria-hidden="true"></i>
                    </Accordion.Toggle>
                    </Card.Header>
                    <Accordion.Collapse eventKey="2">
                    <Card.Body class="card-body-accordion">
                        <h5>Notes</h5>
                        <p>“First they ignore you… Then they laugh and fight against you… Then you win. I knew you could do it. I say with this USD 500.00 Congratulations for your brilliant victory.”</p>
                        <button>Report an issue with this transaction <i class="fa fa-long-arrow-right" aria-hidden="true"></i></button>
                    </Card.Body>
                    </Accordion.Collapse>
                </Card>
                <Card>
                <Card.Header className="accounts-header">
                        <div className="face-wrapper">
                            <img src={Face3} alt="Face1" />
                        </div>
                        <div className="account-details">
                            <h4>John Murray</h4>
                            <p className="amnt">USD $1339.00</p>
                            <p className="date"><span>SENT</span> 29 February 2020 at 17:20 am</p>
                        </div>
                    <Accordion.Toggle as={Button} variant="link" eventKey="3" className="btn-toggler">
                        Open <i class="fa fa-angle-down" aria-hidden="true"></i>
                    </Accordion.Toggle>
                    </Card.Header>
                    <Accordion.Collapse eventKey="3">
                    <Card.Body class="card-body-accordion">
                        <h5>Notes</h5>
                        <p>“ I don’t want our lives to be quoted as an example of the perfect marriage, but as the coolest adventure ride that two people ever took. Happy anniversary love, spent this money on your dream car. See you soon.”</p>
                        <button>Report an issue with this transaction <i class="fa fa-long-arrow-right" aria-hidden="true"></i></button>
                    </Card.Body>
                    </Accordion.Collapse>
                </Card>
                </Accordion>
        </div>
    )
}

export default Transactions
