import React, {useState} from 'react'
import PropTypes from 'prop-types'

export default function TextForm(props) {
  const [textValue, setTextValue]=useState('');
  const [textValueBeforeTrim, setTextValueBeforeTrim]=useState('');
  const [textValueCharLength, setTextValueCharLength]=useState(0);
  const [textExtractEmail, setTextExtractEmail]=useState(0);

  const handleUpClick=()=>
  {
    console.log("you have clicked upper case handler");
    let newText=textValue.toLocaleUpperCase();
    setTextValue(newText);
    // applying trim method on input string
   
  }
  const onChangeHalder=(event)=>
  {
    setTextValue(event.target.value);
    let tml=event.target.value;
    let tempString=tml.trim();
    setTextValueBeforeTrim(tempString); 
    // for default character length
    let respl= (tml.length>0) ? tml.split(' ').length : 0;
    setTextValueCharLength(respl);
 }
  // convert to lower case
  const handleLowerClick=()=>
  {
    let newLowerText=textValue.toLowerCase();
    setTextValue(newLowerText);
    props.showAlert("Text Converted into lowercase!","success");
  }
  // email extracter
  const handleEmailExtractText=()=>
  {
    let emails=textValue.match(/([a-zA-Z0-9._+-]+@[a-zA-Z0-9._-]+\.[a-zA-Z0-9._-]+)/g);
    setTextExtractEmail(emails);
   
  }

  const GetEmailsFromString=()=> 
  {
    var ret = [];
    textValue.match(/([a-zA-Z0-9._+-]+@[a-zA-Z0-9._-]+\.[a-zA-Z0-9._-]+)/g).forEach(function(email) {
    let tempEmail="Email : "+email+"\n";
    ret= [...ret,tempEmail]
    // ret.push({'Email':email})
    console.log(email);
    });
    console.log(ret);
    setTextExtractEmail(ret);
    props.showAlert("Email extracted successfully!","success");
  }

  // reverse text handle
  const handleReverseText=()=>
  {
    let reverseValue=textValue.split('').reverse().join('');
    setTextValue(reverseValue);
    props.showAlert("Contant reversed successfully!","success");
  }
  // Remove Extra Spaces
  const handleExtraSpaces=()=>
  {
    let newText=textValue.split(/[ ]+/);
    setTextValue(newText.join(' '));
    props.showAlert("Removed extra spaces successfully!","success");
  } 
  // copy text
  const handleCopyText=()=>
  {
    var text=document.getElementById('myBox');
    text.select();
    navigator.clipboard.writeText(text.value); 
    props.showAlert("Contant copied successfully!","success");
   }
  // clear Text
  const handleClearText=()=>
  {
    setTextValue('');
    setTextValueBeforeTrim('');
    setTextValueCharLength('');
    props.showAlert("Text box clear successfully!","success");
  }

  return (
    <>
    <div className='container' style={{color:props.mode==='dark'?'white':'#230f59'}}>
        <div className="mb-3">
        <label htmlFor="myBox" className="form-label">{props.formTitle}</label>
        <textarea className="form-control" id="myBox" value={textValue} onChange={onChangeHalder} rows="8" style={{backgroundColor:props.mode==='dark'?'grey':'white',color:props.mode==='dark'?'white':'black'}} placeholder="Enter Your Text Here"></textarea>
        </div>
        <button className="btn btn-primary" style={{backgroundColor:props.toggleGreenMode==='white'?'#0d6efd':props.toggleGreenMode}} onClick={handleUpClick}>Convert to Upper Case</button>
        <button className="btn btn-primary mx-1" style={{backgroundColor:props.toggleGreenMode==='white'?'#0d6efd':props.toggleGreenMode}} onClick={handleLowerClick}>Convert to Lower Case</button>
        <button className="btn btn-primary mx-1" style={{backgroundColor:props.toggleGreenMode==='white'?'#0d6efd':props.toggleGreenMode}} onClick={handleEmailExtractText}>Email Extract</button>
        <button className="btn btn-primary mx-1" style={{backgroundColor:props.toggleGreenMode==='white'?'#0d6efd':props.toggleGreenMode}}  onClick={GetEmailsFromString}>Email Extract By Function</button>
        <button className="btn btn-primary mx-1" style={{backgroundColor:props.toggleGreenMode==='white'?'#0d6efd':props.toggleGreenMode}} onClick={handleReverseText}>Reverse Text</button>
        <button className="btn btn-primary mx-1" style={{backgroundColor:props.toggleGreenMode==='white'?'#0d6efd':props.toggleGreenMode}} onClick={handleExtraSpaces}>Remove Spaces</button>
        <button className="btn btn-primary mx-1" style={{backgroundColor:props.toggleGreenMode==='white'?'#0d6efd':props.toggleGreenMode}} onClick={handleCopyText}>Copy Text</button>
        <button className="btn btn-primary mx-1" style={{backgroundColor:props.toggleGreenMode==='white'?'#0d6efd':props.toggleGreenMode}} onClick={handleClearText}>Clear Text</button>
    </div>
    <div className="container my-3" style={{color:props.mode==='dark'?'white':'#230f59'}}>
      <h2>Your Text Summary</h2>
      <p> {textValueCharLength} words {textValue.length} character</p>
      <p> Before Trim String Lenght {textValue.length} After Trim String {textValueBeforeTrim.length} character</p>
      <p> {0.008*textValue.split(' ').length} Minutes to read this text</p>
      <h3 className='my-3'>{props.preview}</h3>
      <p>{textValue.length>0?textValue:'Enter your text above to preview here'}</p>
      <h3 className='my-3'>Email from Input Text</h3>
      <p>{textExtractEmail}</p>

    </div>
    </>
  )
}

TextForm.propTypes=
{
  formTitle:PropTypes.string.isRequired
}

TextForm.defaultProps={
  formTitle:'Enter Text'
}