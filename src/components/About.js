import React, {Fragment} from 'react'

function About() {
    return (
        <Fragment>
            <h1>Why Trust Shumba Money?</h1>
            <div className="details">
                <div className="bolt">
                    <i className="fa fa-bolt" aria-hidden="true"></i>
                </div>
                <div className="text-wrapper">
                    <h3>Fast</h3>
                    <p>Our service is insanely fast. Send any amount and it <br /> will arrive in less than 5 minutes.</p>
                </div>
            </div>
        </Fragment>
    )
}

export default About
