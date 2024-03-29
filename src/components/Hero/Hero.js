// блок херо
import React from "react";
import HeroLinks from "./HeroLinks";
import Resume from "../Other/Resume";
import PropTypes from 'prop-types';
import Buttons from "../Buttons/Buttons";
import config from "../../AppConfig";


export default class Hero extends React.Component {
    static propTypes = {
        title: PropTypes.string.isRequired,
        image: PropTypes.string,
        buttons: PropTypes.arrayOf(PropTypes.object), // Кнопки
        elems: PropTypes.arrayOf(PropTypes.object) // Ссылки
    }

    render() {
        return (
            <section className="hero" id="hero" style={config.heroBg && {
                backgroundImage: "url(" + config.heroBg + ")",
                backgroundSize: 'cover',
                backgroundPosition: 'center bottom'
            }}>
                <div className="container">
                    <div className="hero-row">
                        <h1 className="title" dangerouslySetInnerHTML={{__html: this.props.title}}/>
                        <HeroLinks elems={this.props.elems}/>
                    </div>
                    <div className="hero-row" style={{paddingBottom: '70px'}}>
                        <Resume/>
                        {this.props.buttons? (
                                <Buttons buttons={this.props.buttons} onClick={()=>{window.open("https://docs.google.com/spreadsheets/d/1GJdaFRZZwJPZ2dcZq6TgpTZm8JHnirCiHgmb_mRG1KM/edit?usp=sharing" , '_blank');}}/>
                            ) :
                            (
                                <React.Fragment/>
                            )
                        }

                    </div>
                </div>
            </section>
        )
    }
}