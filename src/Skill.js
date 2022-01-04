import { calculateNewValue } from "@testing-library/user-event/dist/utils";
import React from "react";
import './Header.css';


class Skill extends React.Component {
    render(){
        return (
            <section className="all_skill">
                <h2> Skills </h2>
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                    Doloremque ipsa facere aut eos officia ab vel! Vero veritatis laborum animi consectetur aperiam,
                    accusamus ipsum ipsam. Veniam rem deserunt tempore nam.
                </p>
                <div className="row m-0 justify-content-evenly align-items-center">
                    <ul className="col-md-3"> 
                        <li>My Focus</li>
                        <li>UI/UX Design</li>
                        <li>Responsive Design</li>
                        <li>Web Design</li>
                        <li>Mobile App Design</li>
                    </ul>
                    <div className="col-md-4">
                        <div className="progress rate"><span className="lang">HTML</span> <span className="progress-bar" style={{width:"calc(93% - 4rem)"}}>93%</span> </div>
                        <div className="progress rate"><span className="lang">CSS</span> <span className="progress-bar" style={{width:"calc(90% - 4rem)"}}>90%</span> </div>
                        <div className="progress rate"><span className="lang">Java Script</span> <span className="progress-bar" style={{width:"calc(70% - 4rem)"}}>70%</span> </div>
                        <div className="progress rate"><span className="lang">Bootstrap</span> <span className="progress-bar" style={{width:"calc(90% - 4rem)"}}>90%</span> </div>
                        <div className="progress rate"><span className="lang">jQuery</span> <span className="progress-bar" style={{width:"calc(80% - 4rem)"}}>80%</span> </div>
                        <div className="progress rate"><span className="lang">React</span> <span className="progress-bar" style={{width:"calc(85% - 4rem)"}}>85%</span> </div>
                        <div className="progress rate"><span className="lang">Shell Script</span> <span className="progress-bar" style={{width:"calc(60% - 4rem)"}}>60%</span> </div>
                    </div>

                </div>
            </section>
        );
    }
}

export default Skill;
