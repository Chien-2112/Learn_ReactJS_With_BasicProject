import "./date.css";

const DateDisplay = (props) => {
	const { date } = props;
	return ( 
		<section className='date-display'>
			My date is: { date }
		</section>
	);
}
 
export default DateDisplay;