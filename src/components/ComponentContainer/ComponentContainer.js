import React, { Component } from 'react'
import './ComponentContainer.scss';
import ComponentDetails from '../CompanyDetails/CompanyDetails';
class ComponentContainer extends Component {
    static propTypes = {

    }

    render() {
        const {history} = this.props;
        const details = history && history.it && history.it.map((company,i) => {
            return <ComponentDetails key={i}{...company} historyDetails={history.historyDetails}/>
        })
        return (
            <div className="componentContainer" id={history.sectionTitle}>
                <h2 className="sectionTitle">{history.sectionTitle}</h2>
                {details}
            </div>
        )
    }
}

export default ComponentContainer
