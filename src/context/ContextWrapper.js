import { useState, useEffect } from 'react';
import GlobalContext from './GlobalContext';
import dayjs from 'dayjs';

const ContextWrapper = ({ children }) => {
	// initialize to current month
	const [monthIndex, setMonthIndex] = useState(dayjs().month());
	const [smallCalMonthIndex, setSmallCalMonthIndex] = useState(null);
	const [daySelected, setDaySelected] = useState(dayjs());
	const [showEventModal, setShowEventModal] = useState(false);

	useEffect(() => {
		smallCalMonthIndex !== null && setMonthIndex(smallCalMonthIndex);
	}, [smallCalMonthIndex]);

	return (
		<GlobalContext.Provider
			value={{
				monthIndex,
				setMonthIndex,
				smallCalMonthIndex,
				setSmallCalMonthIndex,
				daySelected,
				setDaySelected,
				showEventModal,
				setShowEventModal,
			}}
		>
			{children}
		</GlobalContext.Provider>
	);
};

export default ContextWrapper;
