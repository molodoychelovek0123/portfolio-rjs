// Блок с текстом и кнопками

import React from "react";
import PropTypes from "prop-types";
import Buttons from "../Buttons/Buttons";
import {withTranslation} from "react-i18next";
import handleViewport from 'react-in-viewport';

 class _CallToActionBlock extends React.Component {
    static propTypes = {
        buttons: PropTypes.arrayOf(PropTypes.object)
    }


     getStyles() {
         const {inViewport} = this.props;
         if (inViewport) {
             return {opacity: 1, WebkitTransition: 'opacity 1.5s'};
         } else {

             return {opacity: 0, WebkitTransition: 'opacity 1.5s'};
         }
     }
    render() {
        return (
            <section className="call-to-action-block">
                <div className="">
                    <h2 dangerouslySetInnerHTML={{__html:this.props.t('CallToAction.text')}}/>
                    <div style={this.getStyles()}>
                        <Buttons buttons={this.props.buttons}/>
                    </div>
                </div>
            </section>
        );
    }
}

const CallToActionBlock = handleViewport(_CallToActionBlock)
export default withTranslation()(CallToActionBlock);