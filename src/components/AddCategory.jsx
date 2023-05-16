import { useState } from 'react';

// eslint-disable-next-line react/prop-types
export const AddCategory = ({ onNewCategory }) => {
	const [inputValue, setInputValue] = useState('');

	const onInputChange = (event) => {
		setInputValue(event.target.value);
	};

	const onSubmit = (event) => {
		event.preventDefault();
		const newInputValue = inputValue.trim();
		if (newInputValue.length <= 0) return;
		onNewCategory(newInputValue);
		setInputValue('');
	};

	return (
		<form action='' onSubmit={onSubmit}>
			<input
				type='text'
				value={inputValue}
				placeholder='Categoria'
				onChange={onInputChange}
			/>
		</form>
	);
};
