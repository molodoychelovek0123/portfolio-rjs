// Контейнер Херо кнопок на открытие модалки

import React from "react";

import PropTypes from 'prop-types';
import HeroLink from "./HeroLink";

export default class HeroLinks extends React.Component {
    static propTypes = {
        elems: PropTypes.arrayOf(PropTypes.object).isRequired
    }

    render() {
        return (

            <div className="hero-links">
                {this.props.elems.map((item, index) => {
                    return <HeroLink text={item.text} modalId={item.modalId} modalContent={item.modalContent} key={index}/>
                })}
            </div>
        )
    }
}