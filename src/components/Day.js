import { useContext } from 'react';
import GlobalContext from '../context/GlobalContext';
import dayjs from 'dayjs';

const Day = ({ day, rowIdx }) => {
	const { setDaySelected, setShowEventModal } = useContext(GlobalContext);
	const getCurrentDayClass = () =>
		day.format('DD-MM-YY') === dayjs().format('DD-MM-YY') &&
		'bg-darkBlue text-white rounded-full w-7';

	return (
		<div className="border border-gray-200 flex flex-col">
			<header className="flex flex-col items-center">
				{rowIdx === 0 && (
					<p className="text-sm mt-1">{day.format('ddd').toUpperCase()}</p>
				)}
				<p className={`text-sm p-1 my-1 text-center ${getCurrentDayClass()}`}>
					{day.format('DD')}
				</p>
			</header>
			<div
				className="flex-1 cursor-pointer"
				onClick={() => {
					setDaySelected(day);
					setShowEventModal(true);
				}}
			>
				{'e'}
			</div>
		</div>
	);
};

export default Day;
