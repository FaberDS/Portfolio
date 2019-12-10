import React from 'react';
import './Footer.scss';
const Footer = (props) => {
    const {contactMailAddress,contactMailSubject, linkedInLink} = props;
    return (
        <div className="footer">
                <div className="copyRight"><span>2019 </span><span>&copy;</span><span> Denis Schüle</span></div>
                <div className="contactBar">
                    <div className="contactIcon">
                        <a href={linkedInLink} target="_blank"><i className="fab fa-linkedin-in"></i></a>
                    </div>
                    <div className="contactIcon">
                        <a href={"mailto:"+contactMailAddress+'?subject=' +contactMailSubject}><i className="far fa-paper-plane"></i></a>
                    </div>
                </div>
        </div>
    )
}

export default Footer;
