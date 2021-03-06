import React from 'react';
import './Footer.scss';
import IconCard from '../IconCard/IconCard';
import base from '../../basicFunctionality/Actions';
const Footer = (props) => {
    const {Contact} = props;
    const contactCards = Contact.content.map((contact, i)=>{
        if(contact.mailDetails !== null){
            contact.link = base.setUpMailUrl(contact.link,contact.mailDetails.subject);
        }            

        return(
            <IconCard link={contact.link} icon={contact.icon}/>
        );
    })
    return (
        <div className="footer">
                <div className="copyRight"><span>2019 </span><span>&copy;</span><span> Denis Schüle</span></div>
                <div className="contactBar">
                    {contactCards}
                </div>
        </div>
    )
}

export default Footer;
