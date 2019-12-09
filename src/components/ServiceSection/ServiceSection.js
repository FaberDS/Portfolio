import React, { Component } from 'react'
import './ServiceSection.css'
import ServiceCard from '../ServiceCard/ServiceCard';
class ServiceSection extends Component {

    render() {
        const {ServiceSectionContent, navigationSections} = this.props;
        const services = ServiceSectionContent.services.map( (s, i=0) => <ServiceCard {...s} key={i++}/>)
        return (
            <div className='services' id={navigationSections[1]}>
                <h3>{ServiceSectionContent.serviceHeader}</h3>
                <h2>{ServiceSectionContent.serviceSubHeader}</h2>
                <div className="row">
                    {services}
                </div>
            </div>
        )
    }
}

export default ServiceSection
