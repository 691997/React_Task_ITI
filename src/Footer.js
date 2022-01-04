import React from "react";
import './Header.css';
import Contact_btn from "./contact_btn";

class Footer extends React.Component {
    render(){
        return (
            <footer>
                <div className="d-flex justify-content-around foo">
                    <div>
                        <div >
                            <i className="bi bi-envelope-check"></i>
                            <span>magdy691997@gmail.com</span>
                        </div>
                        <div>
                            <i className="bi bi-telephone"></i>
                            <span>01114238872</span>
                        </div>
                    </div>
                    <Contact_btn colorName="btn btn-dark"/>
                    <div>
                        <i className="bi bi-github"></i>
                        <i className="bi bi-facebook"></i>
                        <i className="bi bi-linkedin"></i>
                        <p className="text-center">Copy_Right ITI 2022</p>
                    </div>
                </div>
            </footer>
        );
    }
}


export default Footer;