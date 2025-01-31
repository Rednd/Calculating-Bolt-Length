import React, { useState, useEffect } from 'react';
import logo from './logo.svg';
import './App.css';
import ReactDOM from "react-dom";
import { ComboBoxComponent } from '@syncfusion/ej2-react-dropdowns';
//import { Combobox } from "./components/combobox";
import InputForm from "./components/InputForm/InputForm";
import { v4 as uuidv4 } from 'uuid';
import 'materialize-css/dist/css/materialize.min.css';
import { getData, storeData } from './helpers/localStorage';
import Info from './components/Info/Info';
import Bar from './components/Bar/Bar';






export default function App() {

  const initialState = () => getData('data') || [];
  const [state, setState] = useState(initialState);
  const [data, setData] = useState({});



  const handleMenuOne = () => {
    console.log('clicked one');
  };

  const handleMenuTwo = () => {
    console.log('clicked two');
  };



  useEffect(() => {
    storeData('data', state);
    const date = state.map((obj: { date: any; }) => obj.date);
    const length = state.map((obj: { length: any; }) => obj.length);
    let newData = { date, length };
    setData(newData);
  }, [state]);

  function roundNum(value: number, increment: number) {
    // value will be the number we'll round
    // increment will be the 'round to' - in your case, .25
    var remain;
    //var roundvalue;
    var result;
    remain = value % increment; // this will be somewhere between 0 and .25
   // roundvalue = increment / 2;
    
   
    result = value - remain;
    result += increment;
     return result;
    }

  const handleChange = (val: { thickness1: number; quantity1: number; thickness2: number; quantity2: number; flatWasher: number; quantity3: number; 
          bevelWasher: number; quantity4: number;
          length: number; id: string; diameter: string}) => {

            const diam = [
              {text: '1/2', value: 0.6875 },
              {text: '5/8', value: 0.875 },
              {text: '3/4', value: 1 },
              {text: '7/8', value: 1.125 },
              {text: '1', value: 1.25 }
            ]
          let d1 = diam.find( i => i.text === val.diameter)?.value;
           console.log(d1);
      
    //let heightInM = val.thickness1 / 100;
    let numb = Number(val.thickness1)*Number(val.quantity1) + Number(val.thickness2)*Number(val.quantity2) 
        + Number(val.flatWasher)*Number(val.quantity3)
        + Number(val.bevelWasher)*Number(val.quantity4)
        + Number(d1)
       
    //let diam = val.diameter
   
    val.length = roundNum(numb,.25);
    //val.length =  (Math.round(numb*4/4,.25)).toFixed(2);
    val.id = uuidv4();
    let newVal = [...state, val];
    let len = newVal.length;
    if (len > 7) newVal = newVal.slice(1, len);
    setState(newVal);
  };

  const handleDelete = (id: any) => {
    storeData('lastState', state);
    let newState = state.filter((i: { id: any; }) => {
      return i.id !== id;
    });
    setState(newState);
  };

  const handleUndo = () => {
    setState(getData('lastState'));
  };




  return (
    <div className='container'>
      <div className='row center'>
        <h1 className='white-text'> Bolts Length Calculator </h1>
      </div>
      <div className='row'>
        <div className='col m12 s12'>
        <InputForm change={handleChange}  />

        <div>
            <div className='row center'>
              <h4 className='white-text'>7 Day Data</h4>
            </div>
            <div className='data-container row'>
              {state.length > 0 ? (
                <>
                  {state.map((info: { id: React.Key | null | undefined; diameter:any;  thickness1: any; quantity1: any; 
                      thickness2: any; quantity2: any; flatWasher: any; quantity3: any; bevelWasher: any; quantity4: any; date: any; length: any; }) => (
                    <Info
                      key={info.id}
                      id={info.id}
                      diameter={info.diameter}
                      thickness1={info.thickness1}
                      quantity1 ={info.quantity1}
                      thickness2={info.thickness2}
                      quantity2 = {info.quantity2}
                      flatWasher = {info.flatWasher}
                      quantity3 = {info.quantity3}
                      bevelWasher = {info.bevelWasher}
                      quantity4 = {info.quantity4}                      
                      date={info.date}
                      length={info.length}
                      deleteCard={handleDelete}
                    />
                  ))}
                </>
              ) : (
                  <div className='center white-text'>No log found</div>
                )}
            </div>
          </div>
          {getData('lastState') !== null ? (
            <div className='center'>
              <button className='calculate-btn' onClick={handleUndo}>
                Undo
              </button>
            </div>
          ) : (
              ''
            )}
        </div>     
        </div>     
     </div>
  
  );
}
