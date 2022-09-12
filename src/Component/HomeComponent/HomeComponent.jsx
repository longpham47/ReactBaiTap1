import React, { Component } from 'react'
import Footer from '../Footer/Footer'
import HeaderComponent from '../Header/HeaderComponent'
import NavComponent from '../Navba/NavComponent'
import Header from '../Navba/NavComponent'
import PageComponent from '../Pageicon/PageComponent'

export default class HomeComponent extends Component {
    render() {
        return (
            <div>
                <div><NavComponent/></div>
               
               <div>
                <HeaderComponent/>
                <PageComponent/>
               </div>
               <div>
               <Footer/>

               </div>
            </div>
        )
    }
}
