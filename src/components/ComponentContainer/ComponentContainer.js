import React, { Component } from 'react'
import './ComponentContainer.scss';
import ComponentDetails from '../CompanyDetails/CompanyDetails';
class ComponentContainer extends Component {
    static propTypes = {

    }

    render() {
        console.log(this.props)
        const {history, ID} = this.props;
        console.log("history")
        console.log(history)
        const details = history && history.it && history.it.map((company,i) => {
            return <ComponentDetails key={i++}{...company} {...history}/>
        })
        return (
            <div className="componentContainer" id={ID}>
                <h2>{history.title}</h2>
                {details}
            </div>
        )
    }
}

export default ComponentContainer
