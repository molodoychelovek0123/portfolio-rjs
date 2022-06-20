import React from "react";

import PropTypes from 'prop-types';

import Provider, {Consumer} from "../Modal/Provider";


const TextModalContent = () => (
    <div>
        <div> MODAAAAAAAAAAAAAAAAL </div>
    </div>
);
const WordpressModalContent = () => (
    <div>
        <div> Wordpress </div>
    </div>
);
const ShopifyModalContent = () => (
    <div>
        <div> MODAAAAAAAAAAAAAAAAL </div>
    </div>
);
export default class HeroLink extends React.Component {
    classes = ['hero-links__item'];
    onClickFunc = null
    static propTypes = {
        text: PropTypes.string.isRequired,
        modalId: PropTypes.string
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
            <Provider>
                <Consumer>
                    {({showModal})=>{
                      return ( <div className={this.classes.join(' ')} onClick={() => showModal(TextModalContent)}>
                            {this.props.text}
                        </div>)
                    }}

                </Consumer>
            </Provider>

        );
    }
}