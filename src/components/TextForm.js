import React , {useState} from 'react'

export default function TextForm(props) {
    const [text , setText] = useState('');

    const handleUpClick = () => {
        let newText = text.toUpperCase();
        setText(newText);
    }

    const handleLoClick = () => {
        let newText = text.toLowerCase();
        setText(newText);
    }

    const handleClearTextClick = () => {
        let newText = '';
        setText(newText);
    }

    const handleCopyTextClick = () => {
        let text = document.getElementById("mybox");
        text.select();
        navigator.clipboard.writeText(text.value);
    }

    const handleRemoveExSpacesClick = () => {
        let newText = text.split(/[ ]+/);
        setText(newText.join(" "));
    }
    const handleOnChange = (event) => {
        setText(event.target.value)
    }

  return (
    <div className='flex w-full justify-center'>
        <div className='flex flex-col w-10/12 gap-4'>
        <div className='pt-20 text-5xl font-medium'>{props.heading}</div>
        <textarea className="border border-slate-700 text-3xl placeholder:text-slate-500 p-5" id="mybox" rows="8" value={text} onChange={handleOnChange} placeholder='Enter text here'></textarea>
        <div className="flex gap-2">
        <button className="w-fit h-10 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" onClick={handleUpClick}>Convert to UperCase</button>
        <button className="w-fit h-10 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" onClick={handleLoClick}>Convert to LowerCase</button>
        <button className="w-fit h-10 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" onClick={handleClearTextClick}>Clear Text</button>
        <button className="w-fit h-10 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" onClick={handleCopyTextClick}>Copy Text</button>
        <button className="w-fit h-10 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" onClick={handleRemoveExSpacesClick}>Remove Extra Spaces</button>
        </div>
        <div className="flex flex-col">
            <div className='text-3xl font-medium'>Your text summary</div>
            <div className='text-xl'>{text.split(" ").length} words and {text.length} characters</div>
            <div className='text-xl'>{0.008 * text.split(" ").length} Minutes read</div>
            <div className='text-3xl font-medium'>Preview</div>
            <div className='text-xl'>{text.length>0?text:"enter text to preview ..."}</div>
        </div>
        </div>
    </div>
  )
}
