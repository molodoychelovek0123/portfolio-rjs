import React from "react";
const ModalContext = React.createContext();
export const Consumer = ModalContext.Consumer;

export default class Provider extends React.Component {
    showModal = (content, props = {}) => {
        this.setState({
            content,
            props
        });
    };

    hideModal = () =>
        this.setState({
            content: null,
            props: {}
        });

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
// export const CloseButton = () => (
//     <Consumer>
//         {({hideModal}) => <button onClick={hideModal}>Close It</button>}
//     </Consumer>
// );

// const TextModalContent = () => (
//     <div>
//         <h1>Text modal</h1>
//         <p>Some next here !</p>
//         <CloseButton />
//     </div>
// );
//
// const ImageModalContent = () => (
//     <div>
//         <img src="http://storage.js-craft.io/examples/react-context-usecases/cool-cat.jpg" />
//         <CloseButton />
//     </div>
// );