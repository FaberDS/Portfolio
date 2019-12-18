import React, { Component } from 'react'
import './ComponentContainer.scss';
import ComponentDetails from '../CompanyDetails/CompanyDetails';
class ComponentContainer extends Component {
    static propTypes = {

    }

    render() {
        console.log(this.props)
        const {history} = this.props;
        console.log("history")
        console.log(history)
        const details = history && history.it && history.it.map((company,i) => {
            return <ComponentDetails key={i++}{...company} {...history}/>
        })
        return (
            <div className="componentContainer">
                {details}
            </div>
        )
    }
}

export default ComponentContainer
