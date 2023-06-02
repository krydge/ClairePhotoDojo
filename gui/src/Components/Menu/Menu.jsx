import './MenuStyle.css'
import {MenuBackground} from '../../Assets/Photos'

function Menu() {
    return (
        <div className="Menu" style={{backgroundImage: `url(${MenuBackground})`}}>
            <h1>Claire's Studio</h1>
            <div className="MenuButtons">
                <a href="#AboutMe">About Me</a>
                <a href="#MyWork">My Work</a>
                <a href="#HireMe">Hire Me</a>
            </div>
        </div>
    )

}

export default Menu