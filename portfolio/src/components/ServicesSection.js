// Import icons
import clock from '../img/clock.svg';
import diaphragm from '../img/diaphragm.svg';
import money from '../img/money.svg';
import teamwork from '../img/teamwork.svg';

import home2 from '../img/home2.png';

const ServicesSection = () => {
    return(
        <div className="services">
            <div className="desccription">
                <h2>High <span>guality</span> services</h2>
                <div className="cards">
                    <div className="card">
                        <div className="icon">
                            <img src={clock} alt="Clock icon"/>
                            <h3>Efficient</h3>
                        </div>
                        <p>Lorem ipsum dolor sit amet.</p>
                    </div>
                </div>
                <div className="cards">
                    <div className="card">
                        <div className="icon">
                            <img src={teamwork} alt="Teamwork icon"/>
                            <h3>Efficient</h3>
                        </div>
                        <p>Lorem ipsum dolor sit amet.</p>
                    </div>
                </div>
                <div className="cards">
                    <div className="card">
                        <div className="icon">
                            <img src={diaphragm} alt="Diaphragm icon"/>
                            <h3>Efficient</h3>
                        </div>
                        <p>Lorem ipsum dolor sit amet.</p>
                    </div>
                </div>
                <div className="cards">
                    <div className="card">
                        <div className="icon">
                            <img src={money} alt="Money icon"/>
                            <h3>Affordable</h3>
                        </div>
                        <p>Lorem ipsum dolor sit amet.</p>
                    </div>
                </div>
            </div>
            <div className="image">
                <img src={home2} alt="Camera"/>
            </div>
        </div>
    );
};

export default ServicesSection;