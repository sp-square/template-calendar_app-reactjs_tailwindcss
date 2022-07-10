import { createContext } from 'react';

const GlobalContext = createContext({
	monthIndex: 0,
	setMonthIndex: (index) => {},
	smallCalMonthIndex: 0,
	setSmallCalMonthIndex: (index) => {},
	daySelected: null,
	setDaySelected: (day) => {},
	showEventModal: false,
	setShowEventModal: () => {},
	selectedEvent: null,
	setSelectedEvent: () => {},
	savedEvents: [],
	dispatchCalEvent: ({ type, payload }) => {},
	updateLabel: (label) => {},
	filteredEvents: [],
});

export default GlobalContext;
