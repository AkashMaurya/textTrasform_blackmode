// useState is a hooks
import React, { useState } from 'react'

export default function TextForm(props) {


    const handleUpClick = () => {
        // console.log('UpperCase was clicked');
        let newText = text.toUpperCase();
        setText(newText);
    }

    const handleLoClick = () => {
        // console.log('UpperCase was clicked');
        let newText = text.toLowerCase();
        setText(newText);
    }

    const handleOnChange = (event) => {
        // console.log('onchange function called');
        // for getting the value of the textarea
        setText(event.target.value);
    }


    const [text, setText] = useState("Default Text");
    return (

        <div className="mb-3 my-3">
            <label htmlFor="exampleFormControlTextarea1" className="form-label">{props.exampleLable}</label>
            <textarea className="form-control" id="exampleFormControlTextarea1" rows="8" value={text} onChange={handleOnChange}></textarea>

            <div className="mx-2">
                <button className="btn btn-primary my-3" onClick={handleUpClick}>Conver To UpperCase</button>
                &nbsp;
                <button className="btn btn-warning my-3" onClick={handleLoClick}>Conver To LowerCase</button>
            </div>
        </div>

    )
}
