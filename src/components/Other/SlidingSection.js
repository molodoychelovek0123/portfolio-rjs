import React from 'react'
import config from "../../AppConfig";
import PropTypes from 'prop-types';
import ScrollEvent from 'react-onscroll';
export default class SlidingSection extends React.Component {
    static propTypes = {
        text: PropTypes.string
    }
    constructor() {
        super();
        let offset = window.scrollY / 4.95 - 30;
        if(offset > 500) {offset = 500}
        offset*=-1
        this.state ={
            transform: 'translateX('+offset+'%)'
        };
    }
    handleScrollCallback() {
        let offset = window.scrollY / 4.95  - 30;
        if(offset > 500) {offset = 500}
        offset*=-1
        if(offset){
            this.setState({ transform: 'translateX('+offset+'%)' });
        }
    }
    render(){
        return(
            <section className="sliding">
                <ScrollEvent handleScrollCallback={this.handleScrollCallback.bind(this)} />
                <div className="container">
                    <h3>{config.name} / implemented projects</h3>
                </div>
                <h2 style={{transform: this.state.transform}}>{this.props.text}&nbsp;&nbsp;&nbsp;{this.props.text}&nbsp;&nbsp;&nbsp;{this.props.text}</h2>
            </section>
        )
    }
}