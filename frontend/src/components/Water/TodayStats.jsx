import Meter from '../ui/Meter/Meter';
import './Water.css';

const TODAY_STATS = {
	target: 2450,
	unit: 'ml',
	entries: 1430,
};

const TodayStats = () => {
	return (
		<div className="today-stats">
			<Meter
				label={`Total water consumed today: ${TODAY_STATS.entries} ${TODAY_STATS.unit} out of ${TODAY_STATS.target} ${TODAY_STATS.unit}`}
				id="today-water"
				max={TODAY_STATS.target}
				value={TODAY_STATS.entries}
				title={`Total water consumed today: ${TODAY_STATS.entries} ${TODAY_STATS.unit} out of ${TODAY_STATS.target} ${TODAY_STATS.unit}`}
			/>
		</div>
	);
};

export default TodayStats;
