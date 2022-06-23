// Блок обо мне
import React from "react";
import config from "../../AppConfig";
import { withTranslation } from 'react-i18next';

class About extends React.Component {
    render() {
        return (
            <section className="about" id="about">
                <div className="container">
                    <h3>{config.name} / about me</h3>
                    <div className="row">
                        <div className="about-photo">
                            <div className="about-photo__img-container">
                                <img src={config.myPhoto} alt="Kirill Tatarinov" className="responsive-img" />
                            </div>
                            <div className="about-photo__award-container">
                                <img src={config.myAward} alt="Kirill Tatarinov - certified specialist Velo" className="responsive-img" />
                            </div>
                        </div>
                        <div className="about-text" dangerouslySetInnerHTML={{__html:this.props.t('About')}}>

                            {/*<p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Hi there! :) Am I A Freelancer? A Web developer? A student?</p>*/}
                            {/*<p>In short, my name is Kirill Tatarinov, I am a student of <a href="https://mtuci.ru">mtuci</a>. I study and live in the beautiful capital of Russia, Moscow. A few years ago I became interested in web development and even tried to develop my studio <a href="https://studiobox.dev">box.dev</a>. Now I work at <a href="https://newmedia.agency">newmedia.agency</a> as a front-end developer and in their affiliated company <a href="https://wixlab.com">wixlab</a> as a Velo developer.</p>*/}
                            {/*<p>Last year I passed the certification Velo by Wix and now I am a certified Velo specialist</p>*/}
                            {/*<p>About my professional skills <br/> I understand well:<br/>HTML5, CSS3, JavaScript, jQuery, Velo, PHP, SCSS, Adaptive and block layout, graphics program Figma.</p>*/}
                            {/*<p>My email: <a href="mailto:boxdeveloper@studiobox.dev">boxdeveloper@studiobox.dev</a><br/>WhatsApp: <a href="https://wa.me/+79226840212">+79226840212</a><br/>Telegram: <a href="https://t.me/boxdeveloper">@boxdeveloper</a></p>*/}
                        </div>
                    </div>
                </div>
            </section>
        )
    }
}
export default withTranslation()(About);