import React, { useContext } from 'react';
import GlobalContext from '../context/GlobalContext';

const Labels = () => {
	const { labels, updateLabel } = useContext(GlobalContext);
	return (
		<React.Fragment>
			<p className="mt-10 font-bold text-gray-500">Label</p>
			{labels.map(({ label: lbl, checked }, idx) => (
				<label key={idx} className="items-center block mt-3">
					<input
						type="checkbox"
						checked={checked}
						className={`form-checkbox h-5 w-5 text-${lbl}-400 rounded focus:ring-0 cursor-pointer`}
						onChange={() => updateLabel({ label: lbl, checked: !checked })}
					/>
					<span className="ml-2 text-gray-700 capitalize">{lbl}</span>
				</label>
			))}
		</React.Fragment>
	);
};

export default Labels;
