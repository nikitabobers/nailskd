import React from "react";

interface IFormLabel {
	label: string;
	inputType: string;
	value: number | string;
	onChange(e: any): void;
}

const FormLabel: React.FC<IFormLabel> = ({
	label,
	inputType,
	value,
	onChange,
}) => {
	return (
		<label>
			{label}
			<input
				type={inputType}
				name={label}
				value={value}
				onChange={onChange}
				placeholder={label}
			/>
		</label>
	);
};

export { FormLabel };
