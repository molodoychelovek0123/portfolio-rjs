// Херо кнопка на открытие модалки

import React from "react";
import PropTypes from 'prop-types';
import {Consumer} from "../Modal/ModalProvider";

export default class HeroLink extends React.Component {
    classes = ['hero-links__item'];
    onClickFunc = null
    static propTypes = {
        text: PropTypes.string.isRequired,
        modalId: PropTypes.string,
        modalContent: PropTypes.string
    }

    constructor(props) {
        super(props);
        let modalId = this.props.modalId;

        if (modalId) {
            this.classes.push('clickable');
            this.onClickFunc = this.modalOpen;
        }
    }

    modalOpen = e => {
        console.log(e);
    }

    render() {
        return (
                <Consumer>
                    {({showModal})=>{
                        const modalContent = () => (
                          <div>
                              <div dangerouslySetInnerHTML={{__html: this.props.modalContent}}/>
                          </div>
                        );
                        return ( <div className={this.classes.join(' ')} onClick={() => showModal(modalContent)}>
                            {this.props.text}
                        </div>)
                    }}

                </Consumer>

        );
    }
}