// Хедер
import React from "react";
import config from "../../AppConfig";
import HeaderItem from "./HeaderItem";
// import { i18nInstance } from 'react-i18next'
import {changeLanguage} from "i18next";

export default class Header extends React.Component {
    // setLanguage = (lng) =>{
    //     changeLanguage(lng).then(r => console.log(r))
    // }
    render(){
        let headerLogoUrl =  config.logo;
        let headerAnchors = config.anchors
        return (
            <header>
                <div className="container">
                    <div className="header-row">
                        <div className="logo"><a href="/"> {headerLogoUrl? <img src={headerLogoUrl} className='responsive-img' alt={config.name}/> : config.name} </a></div>
                        <ul className="header-menu">
                            {headerAnchors.map(link=>{
                                return <HeaderItem id={link.id} text={link.text} key={link.id}/>
                            })}
                            <li className="header-menu__item">
                                <a href="/" onClick={(e)=>{e.preventDefault(); changeLanguage("en").then()}}>EN </a>
                            </li>
                            <li className="header-menu__item">
                                <a href="/" onClick={(e)=>{e.preventDefault(); changeLanguage("ru").then()}}>RU </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </header>
        );
    }

}