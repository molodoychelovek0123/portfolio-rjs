// ссылки меню
import React from "react";
import PropTypes from 'prop-types';


export default class HeaderItem extends React.Component {
    static propTypes = {
        id: PropTypes.string.isRequired,
        text: PropTypes.string.isRequired
    }


    handleClick = (e) => {
        e.preventDefault();
        const element = document.querySelector(e.target.getAttribute('href'));
        const elementPosition = element.getBoundingClientRect().top;
        const offsetPosition = elementPosition - 60;

        window.scrollBy({
            top: offsetPosition,
            behavior: "smooth"
        });
        // document.querySelector(e.target.getAttribute('href')).scrollIntoView({ behavior: 'smooth', block: 'start' });
    }

    render() {
        return (
            <li className="header-menu__item" key={this.props.id}>
                <a href={"#" + this.props.id} onClick={(e)=>this.handleClick(e)}> {this.props.text} </a>
            </li>
        );
    }
}