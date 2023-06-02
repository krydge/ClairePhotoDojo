import './AboutMeStyle.css'
import { ClaireHeadshot } from '../../Assets/Photos'

function AboutMe() {
    return (
        <div className='AboutMe'>
           <a className="tag" name="AboutMe"></a>
            <div className='ImageParagraph'>
                <img src={ClaireHeadshot} alt="Claire Stubbs"></img>
                <p>Hi  I'm Claire. I like to say I am the worlds youngest Professional Photographer. I love taking pictures of animals, flowers and people. I figured I could share my beautiful pictures with others and give others a chance to work with me. Take a look at some of my past work or contact me for a session bellow.</p>
            </div>
            <a href="#HireMe">Hire Me</a>
        </div>
    )
}

export default AboutMe;