import React from "react";

import PropTypes from 'prop-types';

export default class Button extends React.Component {
    classes = ['btn']
    static propTypes = {
        text: PropTypes.string,
        url: PropTypes.string.isRequired,
        type: PropTypes.arrayOf(PropTypes.string),
    }

    constructor(props) {
        super(props);
        if(this.props.type)
            this.classes.push('-' + this.props.type.join(' -'))
    }
    render(){
        return(
            <a href={this.props.url} className={this.classes.join(' ')}> {this.props.text} </a>
        )
    }
}