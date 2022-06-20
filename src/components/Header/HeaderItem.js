import React from "react";
import PropTypes from 'prop-types';


export default class HeaderItem extends React.Component {
    static propTypes = {
        id: PropTypes.string.isRequired,
        text: PropTypes.string.isRequired
    }
    handleClick = (e) => {
        e.preventDefault();
        console.log(e.target.getAttribute('href'));
    }

    render() {
        return (
            <li className="header-menu__item" key={this.props.id}>
                <a href={"#" + this.props.id} onClick={(e) => this.handleClick(e)}> {this.props.text} </a>
            </li>
        );
    }
}