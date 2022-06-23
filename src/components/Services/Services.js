// Блок услуг

import React from "react";
import PropTypes from 'prop-types';
import config from "../../AppConfig";
import {withTranslation} from "react-i18next";
import  {Consumer} from "../Modal/ModalProvider";
import handleViewport from "react-in-viewport";

class ServicesBlock extends React.Component {
    static propTypes = {
        elems: PropTypes.arrayOf(PropTypes.object).isRequired
    }
    baseClasses = ['services-row']
    getClasses() {
        const {inViewport} = this.props;
        if (inViewport) {
            return this.baseClasses.concat(['active']);
        } else {
            return this.baseClasses;
        }
    }

    render() {
        let rows = []
        for (let i = 0; i < this.props.elems.length; i += 2) {
            rows.push(
                    <div className={this.getClasses().join(' ')} key={i}>
                        <Consumer>
                            {({showModal}) => {
                                const modalContent = () => (
                                    <div>
                                        <div dangerouslySetInnerHTML={{__html: this.props.elems[i].modalContent}}/>
                                    </div>
                                );
                                return (
                                    <div className="services-item" key={i} onClick={() => showModal(modalContent)}>
                                        <div className="services-item__image">
                                            <img src={this.props.elems[i].image} alt={this.props.elems[i].text}
                                                 className="responsive-img"/>
                                        </div>
                                        <div className="services-item__text">
                                            {this.props.elems[i].text}
                                        </div>
                                    </div>
                                );
                            }}
                        </Consumer>
                        <Consumer>
                                {({showModal}) => {
                                    const modalContent = () => (
                                        <div>
                                            <div
                                                dangerouslySetInnerHTML={{__html: this.props.elems[i + 1].modalContent}}/>
                                        </div>
                                    );
                                    return (
                                        <div className="services-item" key={i + 1} onClick={() => showModal(modalContent)}>
                                            <div className="services-item__image">
                                                <img src={this.props.elems[i + 1].image}
                                                     alt={this.props.elems[i + 1].text}
                                                     className="responsive-img"/>
                                            </div>
                                            <div className="services-item__text">
                                                {this.props.elems[i + 1].text}
                                            </div>
                                        </div>
                                    );
                                }}
                            </Consumer>
                    </div>
        )
        }
        return (
            <section className="services">
                <div className="container">
                    <h3>{config.name} / services</h3>
                    <p className="services-text" dangerouslySetInnerHTML={{__html: this.props.t('Services.text')}}/>
                    {rows}

                </div>
            </section>
        )
        }
        }
        const Services = handleViewport(ServicesBlock);
        export default withTranslation()(Services);