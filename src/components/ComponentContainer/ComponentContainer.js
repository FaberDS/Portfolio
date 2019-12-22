import React, { Component } from 'react'
import './ComponentContainer.scss';
import ComponentDetails from '../CompanyDetails/CompanyDetails';
import ComponentDetailsGastro from '../ComponentDetailsGastro/ComponentDetailsGastro';
class ComponentContainer extends Component {
    static propTypes = {

    }

    render() {
        const {history} = this.props;
        const details = history && history.it && history.it.map((company,i) => {
            return <ComponentDetails key={i}{...company} historyDetails={history.historyDetails}/>
        });
        const gastroDetails = history && history.gastro && history.gastro.companies && history.gastro.companies.map((company,i) => {
            return <ComponentDetailsGastro key={i}{...company} historyDetails={history.historyDetails}/>
        })
        return (
            <div className="componentContainer" id={history.sectionTitle}>
                <h2 className="sectionTitle">{history.sectionTitle}</h2>
                <h3 className="sectionSubTitle">{history.sectionSubTitle}</h3>
                {details}
                <h3 className="sectionSubTitle">{history.gastro.sectionSubTitle}</h3>
                <p className="subText">{history.gastro.story}</p>
                {gastroDetails}
            </div>
        )
    }
}

export default ComponentContainer
