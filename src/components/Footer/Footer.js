import React from "react";
import config from "../../AppConfig";
import PropTypes from "prop-types";

export default class Footer extends React.Component {
    static propTypes = {
        elems: PropTypes.arrayOf(PropTypes.object).isRequired
    }
    modalOpen = e =>{
        console.log(e);
    }
    render() {
        let rows = []
        for (let i = 0; i<this.props.elems.length; i++) {
            rows.push(
                <div className="menu__item" onClick={(e)=>this.modalOpen(e)}>
                    {this.props.elems[i].text}
                </div>
            )
        }

        return (
            <footer>
                <div className="footer-info">
                    <div className="container">
                        <div className="row">
                            <div className="footer-social">
                                <div className="footer-social__text">
                                    Subscribe to my social networks to keep up to date with the latest news and open
                                    opportunities for cooperation.
                                </div>
                                <div className="footer-social__links">
                                    <a href="https://vk.com/4elovek007">vk</a> <a href="https://t.me/boxdeveloper">tg</a>
                                    <a href="https://instagram.com/kirya.shkolnik"> inst</a>
                                </div>
                            </div>
                            <div className="footer-services">
                                <div className="heading">services</div>
                                <div className="menu">
                                    {rows}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="footer-copy">
                    <div className="container">
                        <div className="row">
                            <p>
                                {new Date().getFullYear()} Copyright &copy; {config.name}
                            </p>
                        </div>
                    </div>
                </div>
            </footer>
        );
    }

}