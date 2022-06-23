// Кнопка резюме

import React from "react";
import config from "../../AppConfig";
import { withTranslation } from 'react-i18next';

 class Resume extends React.Component {
    render() {
        return (
            <a href={config.resumeLink} className="resume-btn">
                <span>{this.props.t('Hero.resume')}</span>
                <svg width="31" height="31" viewBox="0 0 31 31" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M20 15.1504L12.5 19.4805L12.5 10.8203L20 15.1504Z" fill="white"/>
                    <circle cx="15.5" cy="15.5" r="15" stroke="white"/>
                </svg>
            </a>
        )
    }
}
export default withTranslation()(Resume);