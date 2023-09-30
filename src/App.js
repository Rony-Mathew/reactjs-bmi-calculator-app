import React, { useState } from 'react'

const App = () => {

  const [height, setHeight] = useState(0)
  const [weight, setWeight] = useState(0)
  const [bmi, setBmi] = useState(0)
  const [body, setBody] = useState(null)
  let status = ""
  let value = 0
  let color = ""

  const bmiCalculator = () => {
    
    value = (weight / ( height * height )).toFixed(2);

    if(value < 18.5){status = "Under Weight"; color = "blue"}
    else if(value < 25){status = "Normal"; color = "green"}
    else if(value < 30){status = "Over Weight"; color = "orange"}
    else {status = "Obese"; color="red"}

    const box = document.getElementById("box");
    box.style.borderColor = color;
    box.style.backgroundColor = color;


    setBody(status)
    setBmi(value);
  }



  return (
    <div className='bmi-main' id="box">
      <p className='bmi-status'>{body}</p>
      <div className='bmi-sec'>
        <p className='bmi-value'>BMI value is : {bmi}</p>
        <div className='input-val'>
        <label className='height-sec'>Height in M :<input className='height-input' type='number' value={height} onChange={(e) => setHeight(e.target.value)}  /></label>
        <label className='weight-sec'>Weight in KG :<input className='weight-input' type='number' value={weight} onChange={(e) => setWeight(e.target.value)} /></label> 
        </div>
        <button className='button' onClick={bmiCalculator}>Submit</button>
      </div>
    </div>
  )
}

export default App