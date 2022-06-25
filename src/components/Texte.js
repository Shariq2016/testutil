import React,{useState} from 'react'

export default function Texte(props) {
    const handleonChange=(event)=>
    {
        console.log("on change");
       setText(event.target.value)       
    }
    const srconchange=(event)=>
    {
        console.log("on change");
       setsrcText(event.target.value)       
    }
    const handleOnClick=()=>
    {
        console.log("on click"); 
        let newtext=text.toUpperCase();
        setText(newtext)
        props.showalert("success","converted to upper cases")
    }
    const handleOnClickl=()=>
    {
        
        let lowtext=text.toLowerCase();
        setText(lowtext)
        props.showalert("success","converted to lower cases")
    }
    const handlespaces=()=>
    {
     
       
        let removespc=text.split(/[ ]+/);
        console.log(removespc)
        setText(removespc.join(' '))
    }
    const clertext=()=>
    {
        
        let clrtext="";
        setText(clrtext);
        props.showalert("success","text cleared")
    }
    const srch=()=>
    {
       let tofind=text.search(srctext);
       console.log(tofind,srctext,text)
       if(tofind===-1)
       {
        props.showalert("success","Nothing Found")
       }
       else{
        
         props.showalert("success",`present at ${tofind}`)
         {{tofind.style.color='red'}}
       }
       
    }
    const [text,setText]=useState('')
    const [srctext,setsrcText]=useState('')
  return (
      <>
      
    <div className="mb-3">
   <h3 style={{color: props.mode==='light'?'black':'white'}}>{props.heading}</h3>
    <label htmlFor="exampleFormControlTextarea1" className="form-label"></label>
    <textarea className="form-control" value={text}  style={{border: props.mode==='light'?'2px solid black':'2px solid blue',color: props.mode==='light'?'black':'white',backgroundColor: props.mode==='light'?'white':'#181c45'}} onChange={handleonChange} placeholder="enter text" id="exampleFormControlTextarea1" rows="6"></textarea>
  </div>
  <p>
    <button type="button" className="btn btn-primary my-2 mx-3" onClick={handleOnClick}>To UpperCase</button>
  <button type="button" className="btn btn-primary my-2 mx-3" onClick={handleOnClickl}>To lowerCase</button>
  <button type="button" className="btn btn-primary my-2 mx-3" onClick={clertext}>Clear Text</button>
  <button type="button" className="btn btn-primary my-2 mx-3" onClick={handlespaces}>Remove xtra spaces</button>
 
  
  </p>
  <div className='src my-3 mx-3'>
 
      <input className="form-control mr-sm-2" value={srctext} onChange={srconchange} type="search" placeholder="Search" aria-label="Search" />
      <button style={{marginBottom:'444px'}}className="btn btn-outline-success my-4 my-sm-0" onClick={srch} type="submit">Search</button>
    </div>
    <div style={{color: props.mode==='light'?'black':'white',backgroundColor: props.mode==='light'?'white':'#181c45'}} >
  <h1>Your text Summary</h1>
  <p>{text.split(" ").length-1} words {text.length} Chrachters</p>
 <p>Reading will take <strong> {parseInt((text.split(" ").length)/250)}</strong> Minutes  or {parseInt((text.split(" ").length)*0.25)} seconds to complete </p>
  <h2 className="prv my-3">Preveiw</h2>
  <p style={{border: props.mode==='light'?'2px solid black':'1px solid blue'}}>{text.length===0?"TO veiw start writing in TExt Area":text}</p></div>
  </>
  )
}
