import './Meter.css';

const Meter = ({ label, id, max, value, title }) => {
	return (
		<>
			{label && <label htmlFor={id}>{label}</label>}
			<meter
				id={id}
				min={0}
				max={max}
				value={value}
				title={title}
			></meter>
		</>
	);
};

export default Meter;
