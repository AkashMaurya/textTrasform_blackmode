// useState is a hooks
import React, { useState } from 'react'

export default function TextForm(props) {


    const handleUpClick = () => {
        // console.log('UpperCase was clicked');
        let newText = text.toUpperCase();
        setText(newText);
    }

    const handleLoClick = () => {

        let newText = text.toLowerCase();
        setText(newText);
    }
    const handleClrText = () => {

        let newText = "";
        setText(newText);

    }

    const onChangehandler = (event) => {

        setText(event.target.value);
    }


    const [text, setText] = useState("");
    return (
        <>
            <div className="mb-3 my-3">
                <label htmlFor="exampleFormControlTextarea1" className="form-label">{props.exampleLable}</label>
                <textarea className="form-control" id="exampleFormControlTextarea1" rows="8" value={text} placeholder="Type your text" onChange={onChangehandler}></textarea>


                <button className="btn btn-primary my-3" onClick={handleUpClick}>Conver To UpperCase</button>

                <button className="btn btn-warning mx-3" onClick={handleLoClick}>Conver To LowerCase</button>

                <button className="btn btn-warning mx-3" onClick={handleClrText}>Clear Text</button>
            </div>
            <div className="container">
                <h1>Your TextSummery</h1>
                <p>Your Words : {text.split(" ").length} and Characters: {text.length}</p>
                <p>{0.008 * text.split(" ").length} Minutes Read</p>
                <p>Preview : <br />
                    {text}
                </p>
                <p>Email: <b>{text.match(/([a-zA-Z0-9._-]+@[a-zA-Z0-9._-]+\.[a-zA-Z0-9_-]+)/gi)}</b></p>
                <p limit="8">Student Id: {text.match(/(0-9)/)}, &nbsp;</p>
            </div>
        </>
    )
}
