import React, { useState } from 'react';
//import { ComboBox } from 'react-widgets'
import PropTypes from 'prop-types';
//import { ComboBoxComponent } from '@syncfusion/ej2-react-dropdowns';
import {Combobox} from '../Combobox'



//import Dropdown from '../DropDown/Dropdown';
//import Select from "react-dropdown-select";

const initialValues = {
	thickness1: '',
	quantity1: '',
	thickness2: '',
	quantity2: '',
	flatWasher: '0.16',
	quantity3: '',
	bevelWasher: '0.32',
	quantity4: '',
	date: '',
    diameter : ''
}




const InputForm = ({ change }) => {
	const [state, setState] = useState(initialValues);

	const handleChange = e => {
		let { value, name } = e.target;
		if (value > 999.75) {
			value = 999.75;
		}
		const date = new Date().toLocaleString().split(',')[0];

		setState({
			...state,
			[name]: value,
			date
		});

	};

    //const [input, setInput] = useState('');

	


    //const [Combobox, setSelectedOption] = useState (0);

    const [showUl, setShowUl] = useState(false);

    //TURN INTO PROPS
  
  /*      const dataDiam = [
            { id: 1, name: '1/2 inches' },
            { id: 2, name: '5/8 inches' },
            { id: 3, name: '3/4 inches' },
        ] = useState('');*/
    //end of props



 	
	const handleSubmit = () => {
		change(state);
		setState(initialValues);
	};


	
	return (
		<>
            {/*<div className="App"><br></br>
                <label htmlFor="Diameter">Diameter  (in inches)</label><br></br>
                <Combobox   placeholder="Choose a diameter:" data={diameter} onChange={(e)=>{setSelectedOption(e.value)}}></Combobox>
                </div><div>
                <br></br><br></br><br></br><br></br>
                </div>  */}
			<div className="App"><br></br><br></br></div>
			<div className="row">
				<div className="col m6 s12">
					<label htmlFor="thickness1">Thickness of part 1  (in inches)</label>
					<input
						id="thickness1"
						name="thickness1"
						type="number"
						min="0.00"
						max="999.75"
						placeholder="0.00"
						value={state.thickness1}
						onChange={handleChange}
					/>
				</div>
				<div className="col m6 s12">
					<label htmlFor="quantity1">quantity</label>
					<input
						id="quantity1"
						name="quantity1"
						type="number"
						min="1"
						max="10"
						placeholder="1"
						value={state.quantity1}
						onChange={handleChange}
					/>
				</div>
				</div>
				<div className="App"><br></br><br></br></div>
				<div className="row">
				<div className="col m6 s12">
					<label htmlFor="thickness2">Thickness of part 2  (in inches)</label>
					<input
						id="thickness2"
						name="thickness2"
						type="number"
						min="0.00"
						max="999.75"
						placeholder="0.00"
						value={state.thickness2}
						onChange={handleChange}
					/>
				</div>
				<div className="col m6 s12">
					<label htmlFor="quantity2">quantity</label>
					<input
						id="quantity2"
						name="quantity2"
						type="number"
						min="1"
						max="10"
						placeholder="1"
						value={state.quantity2}
						onChange={handleChange}
					/>
				</div>				
			</div>
			<div className="row"><br></br><br></br></div>
			<div className="row">
				<div className="col m6 s12">
					<label htmlFor="flatWasher" value={state.flatWasher}>Flat washers 0.16  (in inches) </label>
				</div>
				<div className="col m6 s12">
					<label htmlFor="quantity3">quantity</label>
					<input
						id="quantity3"
						name="quantity3"
						type="number"
						min="1"
						max="10"
						placeholder="1"
						value={state.quantity3}
						onChange={handleChange}
					/>
				</div>
				</div>

			<div className="App"><br></br><br></br></div>
			<div className="row">
				<div className="col m6 s12">
					<label htmlFor="bevelWasher" value={state.bevelWasher}>Bevel washers 0.32  (in inches) </label>
				</div>
				<div className="col m6 s12">
					<label htmlFor="quantity4">quantity</label>
					<input
						id="quantity4"
						name="quantity4"
						type="number"
						min="1"
						max="10"
						placeholder="1"
						value={state.quantity4}
						onChange={handleChange}
					/>
				</div>
				</div>
			<div className="App"><br></br><br></br></div>

			<div className="center">
				<div className="col m6 s12">
					<label htmlFor="diameter">Diameter  (in inches)</label>
					<input
						id="diameter"
						name="diameter"
						type="string"
						min="1/2"
						max="1"
						placeholder="1/2"
						value={state.diameter}
						onChange={handleChange}
					/>
				</div>
				</div>

			<div className="App"><br></br><br></br></div>
				<div className="row"><br></br><br></br></div>
			<div className="center">
                <br></br>
				<button
					id="bmi-btn"
					className="calculate-btn"
					type="button"
					disabled={state.thickness1 === '' || state.thickness2 === '' || state.quantity1 === '' || state.quantity2 === '' || state.diameter === ''}
					onClick={handleSubmit}
				>
					Calculate Bolt length
				</button>
			</div>
		</>
	);
};

InputForm.propTypes = {
	change: PropTypes.func.isRequired
};

export default InputForm;
