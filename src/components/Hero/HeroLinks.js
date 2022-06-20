import React from "react";

import PropTypes from 'prop-types';
import HeroLink from "./HeroLink";
import Provider, {Consumer} from "../Modal/Provider";

export default class HeroLinks extends React.Component {
    static propTypes = {
        elems: PropTypes.arrayOf(PropTypes.object).isRequired
    }

    render() {
        return (

                    <div className="hero-links">
                        {this.props.elems.map((item, index) => {
                            return <HeroLink text={item.text} modalId={item.modalId} key={index}/>
                        })}
                    </div>
        )
    }
}