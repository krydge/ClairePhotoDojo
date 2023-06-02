import { useState } from 'react'
import './FooterStyle.css'

function Footer(){
    const [viewPrivacy, setViewPrivacy]= useState(false)
    const handlePrivacy=()=>{
        setViewPrivacy(true)
    }

    return(
        <div className="Footer">
            <h2><a href="mailto: ClairePhotoStudio@gmail.com">Email: ClairePhotoStudio@gmail.com</a></h2>
            <h2 className="Privacy" onClick={handlePrivacy} >Privacy Policy</h2>
            {viewPrivacy&&
            <h3>I will not share any information provided to me.</h3>}
            <div className="ExternalLinks"></div>
        </div>
    )
}

export default Footer;