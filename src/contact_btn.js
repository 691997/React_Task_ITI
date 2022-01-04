import React from "react";
import './Header.css';


class Contact_btn extends React.Component {

    render(){
        return (
            <button className={this.props.colorName}>Contact My</button>
        );
    }
}


export default Contact_btn;