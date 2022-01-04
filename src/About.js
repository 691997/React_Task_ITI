import React from "react";
import "./Header.css";

class About extends React.Component {
    render(){
        return (
            <section className="all_about row container m-auto mt-5 mb-5">
                <h1 className="about_left col-md-4 align-self-center mb-5">About Me</h1>
                <div className="about_right col-md-8 "> 
                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                                            Doloremque ipsa facere aut eos officia ab vel! Vero veritatis laborum animi consectetur aperiam,
                                            accusamus ipsum ipsam. Veniam rem deserunt tempore nam.
                                            Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                                            Doloremque ipsa facere aut eos officia ab vel! Vero veritatis laborum animi consectetur aperiam,
                                            accusamus ipsum ipsam. Veniam rem deserunt tempore nam.
                                            Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                                            Doloremque ipsa facere aut eos officia ab vel! Vero veritatis laborum animi consectetur aperiam,
                                            accusamus ipsum ipsam. Veniam rem deserunt tempore nam.
                    </p>
                    <button className="btn btn-primary">Download Resume</button>
                </div>

            </section>

        );
    }
}

export default About;