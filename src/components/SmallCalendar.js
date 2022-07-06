import { Fragment, useEffect, useState, useContext } from 'react';
import dayjs from 'dayjs';
import GlobalContext from '../context/GlobalContext';
import { getMonth } from '../util';

const SmallCalendar = () => {
	const [smallCalCurrentMonthIdx, setSmallCalCurrentMonthIdx] = useState(
		dayjs().month()
	);
	const [smallCalCurrentMonth, setSmallCalCurrentMonth] = useState(getMonth());

	useEffect(() => {
		setSmallCalCurrentMonth(getMonth(smallCalCurrentMonthIdx));
	}, [smallCalCurrentMonthIdx]);

	const { monthIndex, setSmallCalMonthIndex, daySelected, setDaySelected } =
		useContext(GlobalContext);

	useEffect(() => {
		setSmallCalCurrentMonthIdx(monthIndex);
	}, [monthIndex]);

	const getDayClass = (day) => {
		const selectedDay = daySelected && daySelected.format('DD-MM-YY');
		if (day.format('DD-MM-YY') === dayjs().format('DD-MM-YY')) {
			return 'bg-darkBlue text-white rounded-full w-7';
		} else if (day.format('DD-MM-YY') === selectedDay) {
			return 'bg-lightBlue text-darkBlue rounded-full w-7 font-bold';
		} else {
			return '';
		}
	};

	return (
		<div className="mt-9">
			<header className="flex justify-between">
				<p className="text-gray-500 font-bold">
					{dayjs(new Date(dayjs().year(), smallCalCurrentMonthIdx)).format(
						'MMMM YYYY'
					)}
				</p>
				<div>
					<button
						onClick={() =>
							setSmallCalCurrentMonthIdx(smallCalCurrentMonthIdx - 1)
						}
					>
						<span className="material-icons-outlined cursor-pointer text-gray-600 mx-2">
							chevron_left
						</span>
					</button>
					<button
						onClick={() =>
							setSmallCalCurrentMonthIdx(smallCalCurrentMonthIdx + 1)
						}
					>
						<span className="material-icons-outlined cursor-pointer text-gray-600 mx-2">
							chevron_right
						</span>
					</button>
				</div>
			</header>
			<div className="grid grid-cols-7 grid-rows-6">
				{smallCalCurrentMonth[0].map((day, i) => (
					<span key={i} className="text-sm py-1 text-center">
						{day.format('dd').charAt(0)}
					</span>
				))}
				{smallCalCurrentMonth.map((row, rowI) => (
					<Fragment key={rowI}>
						{row.map((day, i) => (
							<button
								key={i}
								className={`py-1 w-full ${getDayClass(day)}`}
								onClick={() => {
									setSmallCalMonthIndex(smallCalCurrentMonthIdx);
									setDaySelected(day);
								}}
							>
								<span className="text-sm">{day.format('D')}</span>
							</button>
						))}
					</Fragment>
				))}
			</div>
		</div>
	);
};

export default SmallCalendar;
