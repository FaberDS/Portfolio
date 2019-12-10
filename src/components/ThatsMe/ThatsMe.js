import React, { Component } from 'react'
import './ThatsMe.scss'
class ThatsMe extends Component {
    constructor(props) {
        super(props)

        this.state = {
                 
        }
    }

    render() {
        const {ID} = this.props;
        return (
            <div className="thatsMe" id={ID}>
                That is me
            </div>
        )
    }
}

export default ThatsMe
