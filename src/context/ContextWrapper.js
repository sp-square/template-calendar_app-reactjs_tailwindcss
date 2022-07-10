import { useState, useEffect, useReducer, useMemo } from 'react';
import GlobalContext from './GlobalContext';
import dayjs from 'dayjs';

function savedEventsReducer(state, { type, payload }) {
	switch (type) {
		// push a new event
		case 'push':
			return [...state, payload];
		// update an event
		case 'update':
			return state.map((evt) => (evt.id === payload.id ? payload : evt));
		// delete an event
		case 'delete':
			return state.filter((evt) => evt.id !== payload.id);
		default:
			throw new Error();
	}
}

function initEvents() {
	// retrieve stored events from local storage
	const storageEvents = localStorage.getItem('savedEvents');
	const parsedEvents = storageEvents ? JSON.parse(storageEvents) : [];
	return parsedEvents;
}

const ContextWrapper = ({ children }) => {
	// initialize to current month
	const [monthIndex, setMonthIndex] = useState(dayjs().month());
	const [smallCalMonthIndex, setSmallCalMonthIndex] = useState(null);
	const [daySelected, setDaySelected] = useState(dayjs());
	const [showEventModal, setShowEventModal] = useState(false);
	const [selectedEvent, setSelectedEvent] = useState(null);
	const [labels, setLabels] = useState([]);
	// useReducer takes three parameters: the reducer function, the initial value, an initializer function
	const [savedEvents, dispatchCalEvent] = useReducer(
		savedEventsReducer,
		[],
		initEvents
	);
	// useMemo to be more efficient (it uses memorized computed values)
	const filteredEvents = useMemo(() => {
		return savedEvents.filter((evt) =>
			labels
				.filter((lbl) => lbl.checked)
				.map((lbl) => lbl.label)
				.includes(evt.label)
		);
	}, [savedEvents, labels]);

	useEffect(() => {
		smallCalMonthIndex !== null && setMonthIndex(smallCalMonthIndex);
	}, [smallCalMonthIndex]);

	useEffect(() => {
		setLabels((prevLabels) => {
			return [...new Set(savedEvents.map((evt) => evt.label))].map((label) => {
				const currentLabel = prevLabels.find((lbl) => lbl.label === label);
				return { label, checked: currentLabel ? currentLabel.checked : true };
			});
		});
	}, [savedEvents]);

	useEffect(() => {
		// save to local storage every time 'savedEvents' changes
		localStorage.setItem('savedEvents', JSON.stringify(savedEvents));
	}, [savedEvents]);

	useEffect(() => {
		// when event modal is closed, set selected event to null to reset the create event form
		if (!showEventModal) {
			setSelectedEvent(null);
		}
	}, [showEventModal]);

	function updateLabel(label) {
		setLabels(labels.map((lbl) => (lbl.label === label.label ? label : lbl)));
	}

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
				selectedEvent,
				setSelectedEvent,
				labels,
				setLabels,
				savedEvents,
				dispatchCalEvent,
				updateLabel,
				filteredEvents,
			}}
		>
			{children}
		</GlobalContext.Provider>
	);
};

export default ContextWrapper;
