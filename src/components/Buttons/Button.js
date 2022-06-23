// кнопка
import React from "react";

import PropTypes from 'prop-types';
import {Consumer} from '../Modal/ModalProvider'

export default class Button extends React.Component {
    classes = ['btn']
    modalTrigger = false;
    buttonContent = () => (<a href={this.props.url} className={this.classes.join(' ')}> {this.props.text} </a>)
    static propTypes = {
        text: PropTypes.string,
        url: PropTypes.string.isRequired,
        type: PropTypes.arrayOf(PropTypes.string),
    }

    constructor(props) {
        super(props);
        if (this.props.type)
            this.classes.push('-' + this.props.type.join(' -'))
        if (this.props.url.indexOf('modal(') > -1) {
            this.modalTrigger = true;
            let modalContent = () => (
                <div>
                    <div
                        dangerouslySetInnerHTML={{__html: this.props.url.substr(0, this.props.url.length - 1).replace('modal(', '')}}/>
                </div>
            );
            this.buttonContent = () => (<Consumer>{({showModal}) => { return(<a href="/" className={this.classes.join(' ')} onClick={(e) => {e.preventDefault();showModal(modalContent)}}> {this.props.text} </a>)}}</Consumer>)
        }
    }

    render() {
        return this.buttonContent()
    }
}