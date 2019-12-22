import React from 'react';
import './ContactSection.scss';
import IconCardBig from '../IconCardBig/IconCardBig';
import base from '../../basicFunctionality/Actions';
function ContactSection(props) {
    const {sectionTitle, content} = props;
    
const contactCards = content.map((contact, i)=> {
    if(contact.mailDetails !== null){
        contact.link = base.setUpMailUrl(contact.link,contact.mailDetails.subject);
    }    
return (<IconCardBig {...contact} key={i}/>)})
    return (
        <div className="ContactSection" id={sectionTitle}>
            <h2>{sectionTitle}</h2>
            <div className="contactCardsContainer">
                {contactCards}
            </div>
        </div>
    )
}

export default ContactSection;
