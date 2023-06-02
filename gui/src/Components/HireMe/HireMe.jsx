import './HireMeStyle.css'
import { useState } from 'react';



function HireMe() {
    const [info, setinfo] = useState({})

    console.debug(info)
    const handleChange = (e) => {
        e.preventDefault()
        let name = e.target.name;
        let value = e.target.value;
        setinfo({ ...info, [name]: value })
    }
    return (
        <div className='HireMe' >
            <a name="HireMe"></a>
            <form action="mailto: rydgesoftware@gmail.com">
                <label>Name:</label>
                <input required type="text" placeholder='First and Last Name' name="name" value={info.name || ""} onChange={handleChange}></input>
                <h4>I am Limited in the number of sessions I can work. This means that I am picky with the jobs I take. Because you want to work with me tell me why I should work with you!</h4>
                <label>Why should I work with you?</label>
                <textarea name="whyYou" value={info.whyYou || ""} onChange={handleChange} required></textarea>
                <button type="submit">Book Now!</button>
                {/* <img src = {BookNow} alt="30 Minute Session Book Now" onClick={handle30Min}></img>
                <img src = {NewBornBookNow } alt = "New Born Phot shoot" onClick={handle30Min}></img> */}
            </form>
        </div>
    )
}
export default HireMe;