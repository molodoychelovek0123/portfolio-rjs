// контейнер для кнопок
import React from "react";

import PropTypes from 'prop-types';
import Button from "./Button";

export default class Buttons extends React.Component {
    static propTypes = {
        buttons: PropTypes.arrayOf(PropTypes.object).isRequired
    }
    render(){
        return(
            <div className="btn-container">
                {this.props.buttons.map((item,index)=>{
                    return <Button text={item.text} url={item.url} type={item.type} key={index}/>
                })}
            </div>
        )
    }
}