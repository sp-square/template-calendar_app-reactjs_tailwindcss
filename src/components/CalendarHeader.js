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
		<header className="px-4 py-2 flex items-center">
			<img src={logo} alt="calendar" className="mr-2 w-12 h-12" />
			<h1 className="mr-10 text-xl text-gray-500 font-bold">Calendar</h1>
			<button className="border rounded py-2 px-4 mr-5" onClick={handleReset}>
				Today
			</button>
			<button onClick={() => setMonthIndex(monthIndex - 1)}>
				<span className="material-icons-outlined cursor-pointer text-gray-600 mx-2">
					chevron_left
				</span>
			</button>
			<button onClick={() => setMonthIndex(monthIndex + 1)}>
				<span className="material-icons-outlined cursor-pointer text-gray-600 mx-2">
					chevron_right
				</span>
			</button>
			<h2 className="ml-4 text-xl text-gray-500 font-bold">
				{dayjs(new Date(dayjs().year(), monthIndex)).format('MMMM YYYY')}
			</h2>
		</header>
	);
};

export default CalendarHeader;
