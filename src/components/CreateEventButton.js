import { useContext } from 'react';
import GlobalContext from '../context/GlobalContext';
import plusSvg from '../assets/plus.svg';

const CreateEventButton = () => {
	const { setShowEventModal } = useContext(GlobalContext);

	return (
		<button
			className="border p-2 rounded-full flex items-center shadow-md hover:shadow-2xl"
			onClick={() => setShowEventModal(true)}
		>
			<img src={plusSvg} alt="create event" className="w-7 h-7" />
			<span className="pl-3 pr-7"> Create</span>
		</button>
	);
};

export default CreateEventButton;
