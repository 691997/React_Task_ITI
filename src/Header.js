import React from "react";
import './Header.css'
import Contact_btn from "./contact_btn";

class Header extends React.Component {

    render (){
        return (
            <section className="header">
                <div className="head_contant">
                    <h1>Ahmed Magdy</h1>
                    <p> Web Developer</p>
                    <Contact_btn colorName="btn btn-primary"/>
                </div>
            </section>
        );
    }
}

export default Header;