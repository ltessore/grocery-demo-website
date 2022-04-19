import React, { Component } from 'react'
import Bannerslider from '../banner-carousel';
import Bestofferbanner from './best-offers-banner';
import Topstample from './top-stample';


export default class Home extends Component {
    
    
    constructor(props){
        super(props)
        const querystring = window.location.search
        const params = new URLSearchParams(querystring);
        console.log("El nùmero de mesa es : "+params.get('mesaId'));
    }
    
    render() {
        return (
            <div className="wrapper">
                <Bannerslider />
                <Bestofferbanner />
            </div>
        )
    }
}
