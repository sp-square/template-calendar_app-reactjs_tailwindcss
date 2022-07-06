import React, { Fragment } from 'react';
import Day from './Day';

const Month = ({ month }) => {
	return (
		<div className="flex-1 grid grid-cols-7 grid-rows-5">
			{month.map((row, rowIdx) => (
				<Fragment key={rowIdx}>
					{row.map((day, dayIdx) => {
						return <Day key={dayIdx} day={day} rowIdx={rowIdx} />;
					})}
				</Fragment>
			))}
		</div>
	);
};

export default Month;
