import React, { Component } from 'react'
import Bannerslider from '../banner-carousel';
import Bestofferbanner from './best-offers-banner';
import { Redirect } from 'react-router-dom';
import Topstample from './top-stample';
import NotFound from '../../../../NotFound';


export default class Home extends Component {
    
    
    constructor(props){
        super(props)       
        const querystring = window.location.search
        const params = new URLSearchParams(querystring);
        let mesaIdparam = params.get('mesaId');
        console.log("El nùmero de mesa es : "+mesaIdparam);
        let mesaLogueada = true
        if (mesaIdparam < 1 | mesaIdparam > 5){
            console.log("error de numero de mesa");
            mesaLogueada = false
        }       
        this.state = {
            mesaId:mesaIdparam,
            mesaLogueada:mesaLogueada
        }
    }
    
    render() {
        if (!this.state.mesaLogueada){
           return <Redirect to="/notfound" />
        }
        return (
            <div className="wrapper">
                <Bannerslider />
                <Bestofferbanner />
            </div>
        )
    }
}
