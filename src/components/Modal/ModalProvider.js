// Класс для модалок

import React from "react";
const ModalContext = React.createContext();
export const Consumer = ModalContext.Consumer;

export default class ModalProvider extends React.Component {
    showModal = (content, props = {}) => {
        document.querySelector('body').style.overflowY = 'hidden';
        this.setState({
            content,
            props
        });
    };

    hideModal = () =>
    {
        document.querySelector('body').style.overflowY = 'auto';
        this.setState({
            content: null,
            props: {}
        });
    }


    state = {
        content: null,
        props: {},
        showModal: this.showModal,
        hideModal: this.hideModal
    };

    render() {
        const ModalContent = this.state.content;
        return (
            <ModalContext.Provider value={this.state}>
                {this.props.children}
                {ModalContent ? <Modal content={ModalContent} /> : ""}
            </ModalContext.Provider>
        );
    }


}

const Modal = props => {
    const Content = props.content;
    return (
        <React.Fragment>
            <Consumer>
                {({ hideModal }) =>
                    <div className="modal" onClick={hideModal}>
                        <div className="modal-content" onClick={(e)=>(e.stopPropagation())}>
                            <Content />
                        </div>
                    </div>
                }
            </Consumer>
        </React.Fragment>
    );
};
