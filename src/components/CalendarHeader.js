import { useContext } from 'react';
import dayjs from 'dayjs';
import GlobalContext from '../context/GlobalContext';
import logo from '../assets/calendar-icon.png';

const CalendarHeader = () => {
	const { monthIndex, setMonthIndex } = useContext(GlobalContext);

	//
	const handleReset = () => {
		// little gymnastic to force a re-render if monthIndex matches actual current month in main calendar (this is when we want to reset the small calendar)
		setMonthIndex(
			monthIndex === dayjs().month()
				? monthIndex + Math.random()
				: dayjs().month()
		);
	};

	return (
		<header className="flex items-center px-4 py-2">
			<img src={logo} alt="calendar" className="w-12 h-12 mr-2" />
			<h1 className="mr-10 text-xl font-bold text-gray-500">Calendar</h1>
			<button className="px-4 py-2 mr-5 border rounded" onClick={handleReset}>
				Today
			</button>
			<button onClick={() => setMonthIndex(monthIndex - 1)}>
				<span className="mx-2 text-gray-600 cursor-pointer material-icons-outlined">
					chevron_left
				</span>
			</button>
			<button onClick={() => setMonthIndex(monthIndex + 1)}>
				<span className="mx-2 text-gray-600 cursor-pointer material-icons-outlined">
					chevron_right
				</span>
			</button>
			<h2 className="ml-4 text-xl font-bold text-gray-500">
				{dayjs(new Date(dayjs().year(), monthIndex)).format('MMMM YYYY')}
			</h2>
		</header>
	);
};

export default CalendarHeader;
