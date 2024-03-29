import React from "react";
import "./Footer.css";

const Footer = () => {
    return (
        <div className='box'>
            <h1
                style={{
                    color: "red",
                    textAlign: "center",
                    marginTop: "10px",
                }}
            >
                some content over here
            </h1>
            <div className="footer-container">
                <div className="row">
                    <div className="column">
                        <p className="heading">About Us</p>
                        <a className="footer-link" href="aboutus.js">
                            Aim
                        </a>
                        <a className="footer-link" href="aboutus.js">
                            Vision
                        </a>
                        <a className="footer-link" href="aboutus.js">
                            Testimonials
                        </a>
                    </div>
                    <div className="column">
                        <p className="heading">Services</p>
                        <a className="footer-link" href="Opt2.js">
                            Writing
                        </a>
                        <a className="footer-link" href="Opt2.js">
                            Internships
                        </a>
                        <a className="footer-link" href="Opt2.js">
                            Coding
                        </a>
                        <a className="footer-link" href="Opt2.js">
                            Teaching
                        </a>
                    </div>
                    <div className="column">
                        <p className="heading">Contact Us</p>
                        <a className="footer-link" href="#">
                            Uttar Pradesh
                        </a>
                        <a className="footer-link" href="#">
                            Ahemdabad
                        </a>
                        <a className="footer-link" href="#">
                            Indore
                        </a>
                        <a className="footer-link" href="#">
                            Mumbai
                        </a>
                    </div>
                    <div className="column">
                        <p className="heading">Social Media</p>
                        <a className="footer-link" href="#">
                            <i className="fab fa-facebook-f">
                                <span
                                    style={{
                                        marginLeft: "10px",
                                    }}
                                >
                                    Facebook
                                </span>
                            </i>
                        </a>
                        <a className="footer-link" href="#">
                            <i className="fab fa-instagram">
                                <span
                                    style={{
                                        marginLeft: "10px",
                                    }}
                                >
                                    Instagram
                                </span>
                            </i>
                        </a>
                        <a className="footer-link" href="#">
                            <i className="fab fa-twitter">
                                <span
                                    style={{
                                        marginLeft: "10px",
                                    }}
                                >
                                    Twitter
                                </span>
                            </i>
                        </a>
                        <a className="footer-link" href="#">
                            <i className="fab fa-youtube">
                                <span
                                    style={{
                                        marginLeft: "10px",
                                    }}
                                >
                                    Youtube
                                </span>
                            </i>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
};
export default Footer;
