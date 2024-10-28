import { useState } from "react";
import "./date.css";
import DateDisplay from "./DateDisplay";
import moment from "moment";

const DatePicker = () => {
	const [date, setDate] = useState(Date.now());
	
	const handleDateChange = (e) => {
		setDate(moment(e.target.value).format('LL'));
	}

	return ( 
		<>
			<input 
				type="date" className='date-input'
				onChange={handleDateChange}
			/>
			<DateDisplay date={date}/>
		</>
	);
}
 
export default DatePicker;