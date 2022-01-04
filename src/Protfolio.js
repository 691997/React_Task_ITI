import React from "react";
import './Header.css';

class Protfolio extends React.Component {
    constructor () {
        super()
        this.state={
            card: [ {text:"web design" , color:"color_1"},
                    {text:"mobile design" , color:"color_2" } ,
                    {text:"logo design" , color:"color_1"} ,
                    {text:"web application development" , color:"color_2"} ,
                    {text:"mobile application developmen" , color:"color_1"} ,
                    {text:"pwa design" , color:"color_2"}
            ]
            
        }
    }
    render () {
        return (
            <section className="container portfolio_container ">
                <h2>Protfolio</h2>
                <div className="row justify-content-center">

                    {this.state.card.map( (item , index)=> {
                        return (
                            <div className={`card text-center col-md-3 col-sm-5 col-11 ${item.color}`} key={index} >
                                <div className="card-body">     
                                    <p className="card-text" > {item.text} </p>
                                </div>
                            </div>
                        )
                    })}

                </div>
            </section>
        );
    }
}

export default Protfolio;