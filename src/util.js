import dayjs from 'dayjs';

export function getMonth(month = dayjs().month()) {
	// get integer for month (month is an index here)
	month = Math.floor(month);
	// default month is current month
	// get current year
	const year = dayjs().year();
	// find out what is the first day of the month from 0=Sunday to 6=Saturday
	const firstDayOfTheMonth = dayjs(new Date(year, month, 1)).day();
	// initialize to the Sunday of the first week that includes the first day of the month we want to display
	let currentMonthCount = 0 - firstDayOfTheMonth;
	// create 2-D array for the month with 5 rows and 7 columns
	const daysMatrix = new Array(5).fill([]).map(() => {
		// return each week
		return new Array(7).fill(null).map(() => {
			currentMonthCount++;
			// return each day of that week
			return dayjs(new Date(year, month, currentMonthCount));
		});
	});
	return daysMatrix;
}
