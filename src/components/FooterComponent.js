import React from 'react';
import { Link } from 'react-router-dom';

function Footer(props) {
    return (
        <footer className="site-footer" style={{ backgroundImage: `url('/assets/images/reading.png')`}}>
                <div className="row">                
                    <div className="col-4 text-center footer-links">
                        <h4>Links</h4>
                        <ul className="list-unstyled">
                            <li><Link to='/home' id="home-link">Home</Link></li>
                            <li><Link to='/library' id="library-link">Library</Link></li>
                            <li><Link to='/aboutus' id="about-link">About</Link></li>
                            <li><Link to='/contactus' id="contact-link">Contact</Link></li>
                        </ul>
                    </div>
                    <div className="col-4 text-center footer-social">
                        <h4>Connect With Us</h4>
                        <a className="btn btn-social-icon btn-instagram" href="http://instagram.com/"><i className="fa fa-instagram" /></a>{' '}
                        <a className="btn btn-social-icon btn-facebook" href="http://www.facebook.com/"><i className="fa fa-facebook" /></a>{' '}
                        <a className="btn btn-social-icon btn-twitter" href="http://twitter.com/"><i className="fa fa-twitter" /></a>{' '}
                        <a className="btn btn-social-icon btn-google" href="http://youtube.com/"><i className="fa fa-youtube" /></a> 
                    </div>
                    <div className="col-4 text-center footer-contact">
                        <a role="button" className="btn btn-link" href="tel:+12065551234"><i className="fa fa-phone" /> 1-206-555-1234</a><br />
                        <a role="button" className="btn btn-link" href="mailto:notreal@notreal.co"><i className="fa fa-envelope-o" /> books@overbooked.co</a>
                    </div>
                </div>
        </footer>
    );
}

export default Footer;