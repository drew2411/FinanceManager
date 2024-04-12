import { useState } from 'react'
import ToDoList from './ToDoList.jsx';

function App() {
  const [calc, setCalc] = useState("");
  const [result, setResult]= useState("")
  // const [mode, setMode] = useState('default');

  const ops=['/','*','+','.'];

  // const toggleMode = (newMode) => {
  //   setMode(newMode);
  // };

  const updateCalc= value =>{
    if(
      ops.includes(value) && calc==='' ||
      ops.includes(value)&& ops.includes(calc.slice(-1))
    ) {
      return;
    }
    setCalc(calc+value);
    
      if(!ops.includes(value)) {
        setResult(eval(calc+value).toString());
      }
    
    
    
  }

  const creatDigits=()=>{
    const digits=[];
    for(let i=1;i<10;i++){
      digits.push(
        <button 
          onClick={()=> updateCalc(i.toString())} 
            key={i}>
              {i}
        </button>
      )
    }
    return digits;
  }
  const calculate = () => {
    setCalc(eval(calc).toString());
  }
  const deleteLast=()=>{
    if(calc =='') {
      return;
    }
    
    const value= calc.slice(0,-1);
    setCalc(value);
    
  }
  return (
    
    <div className="App">
      {/* <div className="theme-switcher">
      <button onClick={() => toggleMode('default')}>Default</button>
      <button onClick={() => toggleMode('light')}>Light</button>
      <button onClick={() => toggleMode('dark')}>Dark</button>
      
      </div> */}
      <h1 className='company'>Andre<sub>w</sub> <br /> </h1>
      <h3>Finance Management</h3>
      <div className="calculator">
        <div className="display">
          {result ?<span>({result})</span> : ''} &nbsp; {calc||"0"} 
        </div>
        <div className="operators">
          <button onClick={()=> updateCalc('/')}>/</button>
          <button onClick={()=> updateCalc('*')}>*</button>
          <button onClick={()=> updateCalc('+')}>+</button>
          <button onClick={()=> updateCalc('-')}>-</button>
          <button onClick={deleteLast}>DEL</button>
        </div>
        <div className="digits">
          {creatDigits()}
          <button onClick={()=> updateCalc('0')}>0</button>
          <button onClick={()=> updateCalc('.')}>.</button>
          <button onClick={calculate}>=</button>
        </div>
      </div>
      <ToDoList></ToDoList>
    </div>
  )
}

export default App
