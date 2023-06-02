import { useState } from 'react';
import './CarasolStyle.css'
import { images } from './carasol';

function ImageCarasal() {
    const [imageList, setImages] = useState(images)
    const [current, setcurrent] = useState(images[0])
    const [prev, setprev] = useState(images[images.length - 1])
    const [next, setnext] = useState(images[1])
    const handleClick = (e) => {
        e.preventDefault();
        let id = e.target.name;

        setAllImages(id)
    }
    function setAllImages(id) {
        const last = imageList.length - 1
        
        if (id == 0) {
            setcurrent(imageList[id])
            setprev(imageList[last])
            setnext(imageList[1])
        }
        else if (id == last) {
            setcurrent(imageList[id])
            setprev(imageList[id - 1])
            setnext(imageList[0])
        }
        else {
            setcurrent(imageList[id])
            setprev(imageList[id - 1])
            setnext(imageList[Number(id) + 1])
        }
    }
    return (
        <div className='Carasal'>
            <a id="MyWork"></a>
            {imageList.length > 0 && 
            <div className='carasolImg'>
                <button onClick={handleClick} name={prev.id}>{"<<<"}</button>
                <img src={prev.source} alt={prev.alternate} className="Prev"></img>
                <img src={current.source} alt={current.alternate} className="Current"></img>
                <img src={next.source} alt={next.alternate} className="Next"></img>
                <button onClick={handleClick} name={next.id}>{">>>"}</button>
            </div>
            }
            <div className="CarasolSelector">
            {imageList.map((image) =>
                <div key={image.id}>
                    <img src={image.source} onClick={handleClick} name={image.id}></img>
                </div>
            )}
            </div>
        </div>
    )
}
export default ImageCarasal;

