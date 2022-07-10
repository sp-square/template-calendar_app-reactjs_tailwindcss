import { useContext, useState } from 'react';
import GlobalContext from '../context/GlobalContext';

const labelsClasses = ['indigo', 'gray', 'green', 'blue', 'red', 'purple'];

export default function EventModal() {
	const { setShowEventModal, daySelected, dispatchCalEvent, selectedEvent } =
		useContext(GlobalContext);

	const [title, setTitle] = useState(selectedEvent ? selectedEvent.title : '');
	const [description, setDescription] = useState(
		selectedEvent ? selectedEvent.description : ''
	);
	const [selectedLabel, setSelectedLabel] = useState(
		selectedEvent
			? labelsClasses.find((lbl) => lbl === selectedEvent.label)
			: labelsClasses[0]
	);

	function handleSubmit(e) {
		e.preventDefault();
		const calendarEvent = {
			title,
			description,
			label: selectedLabel,
			day: daySelected.valueOf(), // we store it as a number to be able to stringify for local storage
			id: selectedEvent ? selectedEvent.id : Date.now(),
		};
		if (selectedEvent) {
			dispatchCalEvent({ type: 'update', payload: calendarEvent });
		} else {
			dispatchCalEvent({ type: 'push', payload: calendarEvent });
		}

		setShowEventModal(false);
	}
	return (
		<div className="fixed top-0 left-0 flex items-center justify-center w-full h-screen">
			<form className="w-1/4 bg-white rounded-lg shadow-2xl">
				<header className="flex items-center justify-between px-4 py-2 bg-gray-100">
					<span className="text-gray-400 material-icons-outlined">
						drag_handle
					</span>
					<div>
						{selectedEvent && (
							<span
								onClick={() => {
									dispatchCalEvent({
										type: 'delete',
										payload: selectedEvent,
									});
									setShowEventModal(false);
								}}
								className="text-gray-400 cursor-pointer material-icons-outlined"
							>
								delete
							</span>
						)}
						<button onClick={() => setShowEventModal(false)}>
							<span className="text-gray-400 material-icons-outlined">
								close
							</span>
						</button>
					</div>
				</header>
				<div className="p-3">
					<div className="grid items-end grid-cols-1/5 gap-y-7">
						<div></div>
						<input
							type="text"
							name="title"
							placeholder="Add title"
							value={title}
							required
							className="w-full pt-3 pb-2 text-xl font-semibold text-gray-600 border-0 border-b-2 border-gray-200 focus:outline-none focus:ring-0 focus:border-darkBlue"
							onChange={(e) => setTitle(e.target.value)}
						/>
						<span className="text-gray-400 material-icons-outlined">
							schedule
						</span>
						<p>{daySelected.format('dddd, MMMM DD')}</p>
						<span className="text-gray-400 material-icons-outlined">
							segment
						</span>
						<input
							type="text"
							name="description"
							placeholder="Add a description"
							value={description}
							required
							className="w-full pt-3 pb-2 text-gray-600 border-0 border-b-2 border-gray-200 focus:outline-none focus:ring-0 focus:border-blue-500"
							onChange={(e) => setDescription(e.target.value)}
						/>
						<span className="text-gray-400 material-icons-outlined">
							bookmark_border
						</span>
						<div className="flex gap-x-2">
							{labelsClasses.map((lblClass, i) => (
								<span
									key={i}
									onClick={() => setSelectedLabel(lblClass)}
									className={`bg-${lblClass}-500 w-6 h-6 rounded-full flex items-center justify-center cursor-pointer`}
								>
									{selectedLabel === lblClass && (
										<span className="text-sm text-white material-icons-outlined">
											check
										</span>
									)}
								</span>
							))}
						</div>
					</div>
				</div>
				<footer className="flex justify-end p-3 mt-5 border-t">
					<button
						type="submit"
						onClick={handleSubmit}
						className="px-6 py-2 text-white rounded bg-darkBlue hover:bg-lightBlue"
					>
						Save
					</button>
				</footer>
			</form>
		</div>
	);
}
