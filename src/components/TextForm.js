import React,{useState} from 'react'

export default function TextForm(props) {
    const[text, setText]=useState("")
    const handleUpClick=()=>{
          //  console.log("Uppercase button was clicked")
            let newText=text.toUpperCase();
            setText(newText);
            if(text.length>0){
              props.showAlert("!!!Converted to upper case","success");
            }
            else{
              props.showAlert("!!!Please enter text in text box to convert it to upper case","warning");
            }
           
    }
    const handleClearClick=()=>{
     //   console.log("Uppercase button was clicked")
        let newText='';
        setText(newText);
        if(text.length>0){
          props.showAlert("!!!Text cleared","success");
        }
        else{
          props.showAlert("!!!Text box is empty please enter text","warning");
        }

}
    const handleCopy=()=>{
      var text=document.getElementById("myBox");
      text.select();
      navigator.clipboard.writeText(text.value);
      
      if(text.length>0){
        props.showAlert("!!!!!!Text copied","success");
      }
      else{
        props.showAlert("!!!Text box is empty please enter text","warning");
      }
    }
      
    const handleLoClick=()=>{
        //  console.log("Uppercase button was clicked")
          let newText=text.toLowerCase();
          setText(newText);
          if(text.length>0){
            props.showAlert("!!!Converted to lower case","success");
          }
          else{
            props.showAlert("!!!Text box is empty please enter text","warning");
          }
  }
    const handleOnChange=(event)=>{
      //  console.log("onChange");
        setText(event.target.value);
    }
    const speak = () => {
      let msg = new SpeechSynthesisUtterance();
      msg.text = text;
      window.speechSynthesis.speak(msg);
    
      if(text.length>0){
        props.showAlert("!!!You can listen text typed","success");
      }
      else{
        props.showAlert("!!!Text box is empty please enter text","warning");
      }
    }
    const replaceString=()=>{
      let repval=prompt("Enter the word to be replaced:")
      let tobereplaced= new RegExp(repval,'g');

      let toreplace=prompt("Enter the text that you want to replace with:");
      
      let newText= text.replace(tobereplaced,toreplace);
      setText(newText);
     
      if(text.length>0){
        props.showAlert("!!!Your text is replaced","success");
      }
      else{
        props.showAlert("!!!Text box is empty please enter text","warning");
      }
    }
    const handleDownload=()=>{
      var text = document.getElementById("myBox").value;
     // console.log(text);
      var filename = "TextareaInput.txt";
      
      
      if(text.length>0){
        download(filename, text);
        props.showAlert("!!!File downloaded","success");
      }
      else{
        props.showAlert("!!!Text box is empty please enter text","warning");
      }
    }
    function download(file, text) {
      var element = document.createElement('a');
      element.setAttribute('href', 'data:text/plain;charset=utf-8, ' + encodeURIComponent(text));
      element.setAttribute('download', file);
      document.body.appendChild(element);
      //onClick property
      element.click();
      document.body.removeChild(element);
    }

  return (
<>
    
    <div className='container' style={{backgroundColor:props.mode==='dark'?'white':'#033b52' }} >
        <h2>{props.heading}</h2>
        <div className="mb-3 my-2">
            <textarea className="form-control"  style={{backgroundColor:props.mode==='dark'?'white':'black',color:props.mode==='dark'?'black':'white'}} value={text} onChange={handleOnChange} id="myBox" rows="8"></textarea>
        </div>
        <button className="btn btn-primary mx-1 " onClick={handleUpClick}>Change to Uppercase</button>
        
        <button className="btn btn-primary mx-1" onClick={handleLoClick}>Change to Lowercase</button>    
        <button className="btn btn-primary mx-1" onClick={handleClearClick}>Clear text</button>    
        <button className="btn btn-primary mx-1" onClick={speak}>Speak</button>
        <button className="btn btn-primary mx-1" onClick={replaceString}>Find and Replace</button>
        <button className="btn btn-primary mx-1" onClick={handleCopy}>Copy text</button>
        <button className="btn btn-primary mx-1" onClick={handleDownload}>Download</button>
        
        
        
        </div>
        <div className="container my-3" style={{backgroundColor:props.mode==='dark'?'white':'#033b52',color:props.mode==='dark'?'black':'white'}}>
        <h2>Your text summary</h2>
        <p>You typed <b>{text.length>0?text.split(" ").length:0}</b> words and  <b>{text.length}</b> characters</p>
        <p>Estimated time to read <b>{0.008*text.split("").length}</b> minutes </p>
        <h2>Preview</h2>
        <p>{text.length>0?text:"Enter some text in the text box above to preview it:"}</p>


    </div>
    
    </>
  )
}
