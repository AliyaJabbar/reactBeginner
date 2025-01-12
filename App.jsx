import { useState } from "react";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const [formData,setFormData]=useState({
  text:"ABC",
  checkbox:false,
  radio:"",
  select:""
});

const handleChange=(e)=>{ 
  const {name,value,type,checked}=e .target;
  setFormData({
    ...formData,
    [name]:type==='checkbox'?checked:value
  });
};
  return(
    <div className="form-container">
      <h1>Form Example</h1>
    <form>
      <div className='form-field'>
        <label>Text:</label>
        <input type='text' name="text" value={formData.text} onChange={handleChange}>
        </input>
        
        </div> 
        {/* checkbox
         */}
         <div className='form-field'>
        <label>
        <input type='checkbox' name="checkbox" checked={formData.checkbox} onChange={handleChange}>
        </input>
        checkbox
        </label>
        </div> 
        <div>
        {/* radio button
         */}
          <label>Radio
          </label>
          <label>
        <input type='radio'
         name="radio" 
         value="option1" checked={formData.radio} onChange={handleChange}>
        </input>
        option 1
        </label>
        <label>
        <input type='radio'
         name="radio" 
         value="option2" checked={formData.radio} onChange={handleChange}>
        </input>
        option 2
        </label>
        </div> 

        {/* dropdown */}
        <div className='form-field'>
          <label>select:</label>
          <select name="select" value={formData.select} onChange={handleChange}>
            <option value="">--choose an option---</option>
            <option value="option 1">--option1---</option>
            <option value="option 2">--option2---</option>
            <option value="option 3">-- option3---</option>
           </select> 
        </div>
        <div className='form-data'>
          <h3>form data</h3>
          <p><strong>Text:</strong>{formData.text|| 'N/A'} </p>
          <p><strong>Radio:</strong>{formData.radio|| 'N/A'} </p>
          <p><strong>CheckBox:</strong>{formData.checkbox?'checked':'unchecked'} </p>
          <p><strong>select:</strong>{formData.text|| 'N/A'} </p>
        
        </div>
           </form>
    </div>
  );
}

export default App;
