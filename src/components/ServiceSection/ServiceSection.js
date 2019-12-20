import React, { Component } from 'react'
import './ServiceSection.scss'
import ServiceCard from '../ServiceCard/ServiceCard';
class ServiceSection extends Component {

    render() {
        const {ServiceSectionContent, ID} = this.props;
        const services = ServiceSectionContent.services.map( (s, i=0) => <ServiceCard {...s} key={i++}/>)
        return (
            <div className='services' id={ServiceSectionContent.sectionTitle}>
                <h2 className="sectionTitle">{ServiceSectionContent.sectionTitle}</h2>
                <h3 className="sectionSubTitle">{ServiceSectionContent.sectionSubTitle}</h3>
                <div className="servicesInnerbox">
                    
                    <div className="row">
                        {services}
                    </div>
                </div>
            </div>
        )
    }
}

export default ServiceSection
