import React from "react";
import PropTypes from 'prop-types';
import config from "../../AppConfig";
import {withTranslation} from "react-i18next";

class Services extends React.Component {
    static propTypes = {
        elems: PropTypes.arrayOf(PropTypes.object).isRequired
    }
    modalOpen = e =>{
        console.log(e);
    }
    render(){
        let rows = []
        for (let i = 0; i<this.props.elems.length; i+=2){
            rows.push(
                <div className="services-row" key={i}>
                    <div className="services-item" key={i} onClick={(e)=>this.modalOpen(e)}>
                        <div className="services-item__image">
                            <img src={this.props.elems[i].image}  alt={this.props.elems[i].text}  className="responsive-img"/>
                        </div>
                        <div className="services-item__text">
                            {this.props.elems[i].text}
                        </div>
                    </div>
                    <div className="services-item" key={i+1} onClick={(e)=>this.modalOpen(e)}>
                        <div className="services-item__image">
                            <img src={this.props.elems[i+1].image}  alt={this.props.elems[i+1].text} className="responsive-img"/>
                        </div>
                        <div className="services-item__text">
                            {this.props.elems[i+1].text}
                        </div>
                    </div>
                </div>
            )
        }
        return(
            <section className="services">
                <div className="container">
                    <h3>{config.name} / services</h3>
                    <p dangerouslySetInnerHTML={{__html:this.props.t('Services.text')}}/>
                     {rows}

                </div>
            </section>
        )
    }
}
export default withTranslation()(Services);