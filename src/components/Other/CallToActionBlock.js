import React from "react";
import PropTypes from "prop-types";
import Buttons from "../Buttons/Buttons";
import {withTranslation} from "react-i18next";

 class CallToActionBlock extends React.Component {
    static propTypes = {
        buttons: PropTypes.arrayOf(PropTypes.object)
    }
    render() {
        return (
            <section className="call-to-action-block">
                <div className="">
                    <h2 dangerouslySetInnerHTML={{__html:this.props.t('CallToAction.text')}}/>
                    <Buttons buttons={this.props.buttons}/>
                </div>
            </section>
        );
    }
}
export default withTranslation()(CallToActionBlock);