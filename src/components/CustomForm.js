import React from 'react';
import { Card, Form, InputGroup, DropdownButton, Dropdown, FormControl } from 'react-bootstrap';

import '../App.css';

function CustomForm() {
    const countryList = [   
        "Zimbabwe",
        "Afghanistan",
        "Albania",
        "Algeria",
        "American Samoa",
        "Andorra",
        "Angola",
        "Anguilla",
        "Antarctica",
        "Antigua and Barbuda",
        "Argentina",
        "Armenia",
        "Aruba",
        "Australia",
        "Austria",
        "Azerbaijan",
        "Bahamas (the)",
        "Bahrain",
        "Bangladesh",
        "Barbados",
        "Belarus",
        "Belgium",
        "Belize",
        "Benin",
        "Bermuda",
        "Bhutan",
        "Bolivia (Plurinational State of)",
        "Bonaire, Sint Eustatius and Saba",
        "Bosnia and Herzegovina",
        "Botswana",
        "Bouvet Island",
        "Brazil",
        "British Indian Ocean Territory (the)",
        "Brunei Darussalam",
        "Bulgaria",
        "Burkina Faso",
        "Burundi",
        "Cabo Verde",
        "Cambodia",
        "Cameroon",
        "Canada",
        "Cayman Islands (the)",
        "Central African Republic (the)",
        "Chad",
        "Chile",
        "China",
        "Christmas Island",
        "Cocos (Keeling) Islands (the)",
        "Colombia",
        "Comoros (the)",
        "Congo (the Democratic Republic of the)",
        "Congo (the)",
        "Cook Islands (the)",
        "Costa Rica",
        "Croatia",
        "Cuba",
        "Curaçao",
        "Cyprus",
        "Czechia",
        "Côte d'Ivoire",
        "Denmark",
        "Djibouti",
        "Dominica",
        "Dominican Republic (the)",
        "Ecuador",
        "Egypt",
        "El Salvador",
        "Equatorial Guinea",
        "Eritrea",
        "Estonia",
        "Eswatini",
        "Ethiopia",
        "Falkland Islands (the) [Malvinas]",
        "Faroe Islands (the)",
        "Fiji",
        "Finland",
        "France",
        "French Guiana",
        "French Polynesia",
        "French Southern Territories (the)",
        "Gabon",
        "Gambia (the)",
        "Georgia",
        "Germany",
        "Ghana",
        "Gibraltar",
        "Greece",
        "Greenland",
        "Grenada",
        "Guadeloupe",
        "Guam",
        "Guatemala",
        "Guernsey",
        "Guinea",
        "Guinea-Bissau",
        "Guyana",
        "Haiti",
        "Heard Island and McDonald Islands",
        "Holy See (the)",
        "Honduras",
        "Hong Kong",
        "Hungary",
        "Iceland",
        "India",
        "Indonesia",
        "Iran (Islamic Republic of)",
        "Iraq",
        "Ireland",
        "Isle of Man",
        "Israel",
        "Italy",
        "Jamaica",
        "Japan",
        "Jersey",
        "Jordan",
        "Kazakhstan",
        "Kenya",
        "Kiribati",
        "Korea (the Democratic People's Republic of)",
        "Korea (the Republic of)",
        "Kuwait",
        "Kyrgyzstan",
        "Lao People's Democratic Republic (the)",
        "Latvia",
        "Lebanon",
        "Lesotho",
        "Liberia",
        "Libya",
        "Liechtenstein",
        "Lithuania",
        "Luxembourg",
        "Macao",
        "Madagascar",
        "Malawi",
        "Malaysia",
        "Maldives",
        "Mali",
        "Malta",
        "Marshall Islands (the)",
        "Martinique",
        "Mauritania",
        "Mauritius",
        "Mayotte",
        "Mexico",
        "Micronesia (Federated States of)",
        "Moldova (the Republic of)",
        "Monaco",
        "Mongolia",
        "Montenegro",
        "Montserrat",
        "Morocco",
        "Mozambique",
        "Myanmar",
        "Namibia",
        "Nauru",
        "Nepal",
        "Netherlands (the)",
        "New Caledonia",
        "New Zealand",
        "Nicaragua",
        "Niger (the)",
        "Nigeria",
        "Niue",
        "Norfolk Island",
        "Northern Mariana Islands (the)",
        "Norway",
        "Oman",
        "Pakistan",
        "Palau",
        "Palestine, State of",
        "Panama",
        "Papua New Guinea",
        "Paraguay",
        "Peru",
        "Philippines (the)",
        "Pitcairn",
        "Poland",
        "Portugal",
        "Puerto Rico",
        "Qatar",
        "Republic of North Macedonia",
        "Romania",
        "Russian Federation (the)",
        "Rwanda",
        "Réunion",
        "Saint Barthélemy",
        "Saint Helena, Ascension and Tristan da Cunha",
        "Saint Kitts and Nevis",
        "Saint Lucia",
        "Saint Martin (French part)",
        "Saint Pierre and Miquelon",
        "Saint Vincent and the Grenadines",
        "Samoa",
        "San Marino",
        "Sao Tome and Principe",
        "Saudi Arabia",
        "Senegal",
        "Serbia",
        "Seychelles",
        "Sierra Leone",
        "Singapore",
        "Sint Maarten (Dutch part)",
        "Slovakia",
        "Slovenia",
        "Solomon Islands",
        "Somalia",
        "South Africa",
        "South Georgia and the South Sandwich Islands",
        "South Sudan",
        "Spain",
        "Sri Lanka",
        "Sudan (the)",
        "Suriname",
        "Svalbard and Jan Mayen",
        "Sweden",
        "Switzerland",
        "Syrian Arab Republic",
        "Taiwan (Province of China)",
        "Tajikistan",
        "Tanzania, United Republic of",
        "Thailand",
        "Timor-Leste",
        "Togo",
        "Tokelau",
        "Tonga",
        "Trinidad and Tobago",
        "Tunisia",
        "Turkey",
        "Turkmenistan",
        "Turks and Caicos Islands (the)",
        "Tuvalu",
        "Uganda",
        "Ukraine",
        "United Arab Emirates (the)",
        "United Kingdom of Great Britain and Northern Ireland (the)",
        "United States Minor Outlying Islands (the)",
        "United States of America (the)",
        "Uruguay",
        "Uzbekistan",
        "Vanuatu",
        "Venezuela (Bolivarian Republic of)",
        "Viet Nam",
        "Virgin Islands (British)",
        "Virgin Islands (U.S.)",
        "Wallis and Futuna",
        "Western Sahara",
        "Yemen",
        "Zambia",
        "Åland Islands"
    ];
   
    return (
        <Card className="card-container">
            <Card.Header className="card-header">
                <div className="call-to-action">
                    <div className="btn-money-wrapper">
                        <button className="btn-send-money"><i className="fa fa-check-circle" aria-hidden="true"></i> &nbsp;&nbsp;&nbsp;Send Money</button>
                    </div>
                    <div className="btn-airtime-wrapper">
                        <button className="btn-buy-airtime">Buy Airtime</button>
                    </div>
                </div>
            </Card.Header>
            <Card.Body>
                <Form className="form">
                        <Form.Group controlId="exampleForm.ControlSelect1" className="form-controller">
                            <Form.Label>Choose Destination Country</Form.Label>
                            <Form.Control size="lg" as="select">
                            {countryList.map((country, index) => {
                                return <option key={index}>{country}</option>
                            })}
                            </Form.Control>
                        </Form.Group>
                        <label>You Send</label>
                        <InputGroup className="form-controller">
                            <FormControl
                            size="lg"
                            placeholder="100"
                            aria-label="Sender's amount"
                            aria-describedby="basic-addon2"
                            />

                            <DropdownButton
                            as={InputGroup.Append}
                            className="dropdown-btn"
                            variant="primary"
                            title="USD"
                            id="input-group-dropdown-1"
                            >
                            <Dropdown.Item href="#">USD</Dropdown.Item>
                            <Dropdown.Item href="#">Pound</Dropdown.Item>
                            <Dropdown.Item href="#">Rand</Dropdown.Item>
                            <Dropdown.Item href="#">Pula</Dropdown.Item>
                            <Dropdown.Divider />
                            <Dropdown.Item href="#">ZWL</Dropdown.Item>
                            </DropdownButton>
                        </InputGroup>
                        <h3 className="form-controller"><i class="fa fa-minus-circle" aria-hidden="true"></i> Transfer Fee <span>USD $2.50</span></h3>
                        <h3 className="form-controller"><i class="fa fa-usd" aria-hidden="true"></i> Converted at a low rate of <span>17.81</span></h3>
                        <label>Receipient gets</label>
                        <InputGroup>
                            <FormControl
                            size="lg"
                            placeholder="3000"
                            aria-label="Recipient's amount"
                            aria-describedby="basic-addon2"
                            />

                            <DropdownButton
                            as={InputGroup.Append}
                            className="dropdown-btn"
                            title="ZWL"
                            id="input-group-dropdown-2"
                            >
                            <Dropdown.Item href="#">USD</Dropdown.Item>
                            <Dropdown.Item href="#">Pound</Dropdown.Item>
                            <Dropdown.Item href="#">Rand</Dropdown.Item>
                            <Dropdown.Item href="#">Pula</Dropdown.Item>
                            <Dropdown.Divider />
                            <Dropdown.Item href="#">ZWL</Dropdown.Item>
                            </DropdownButton>
                        </InputGroup>
                        <button className="btn btn-block btn-lg btn-send">Send</button>
                </Form>
            </Card.Body>
        </Card>   
    )
}

export default CustomForm;
