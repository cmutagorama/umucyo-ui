import { Meta, Story } from "@storybook/react";
import React from "react";
import StoryLayout from "./StoryLayout";
import { TextInput, TextInputProps } from "../src";
import { FiAlertCircle, FiHelpCircle, FiMail } from "react-icons/fi";

const meta: Meta = {
	title: "TextInput",
	component: TextInput,
	parameters: {
		controls: { expanded: true },
		design: {
			type: "figma",
			url: ""
		}
	}
};

export default meta;

interface Props extends TextInputProps {
	darkMode: boolean;
}

const StoryTextInput: Story<Props> = (args) => {
	const [text1, setText1] = React.useState<string>(args.value);

	const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => setText1(e.target.value);

	return (
		<StoryLayout {...args} className="flex space-x-4">
			<div>
				<TextInput
					type="email"
					value={text1}
					handleChange={handleChange}
					label="Email"
					placeholder="test@example.com"
					helperText="This is a hint text to help the user."
					LeadingIcon={<FiMail />}
					TrailingIcon={<FiAlertCircle />}
					disabled={args.disabled}
				/>
				<div className="mb-4" />
				<TextInput
					type="email"
					value={text1}
					handleChange={handleChange}
					label="Email"
					placeholder="test@example.com"
					error="This is an error message"
					LeadingIcon={<FiMail />}
					TrailingIcon={<FiAlertCircle />}
					disabled={args.disabled}
				/>
			</div>
			<div>
				<TextInput
					type="text"
					value={text1}
					handleChange={handleChange}
					label="Website"
					placeholder="example.com"
					leadingText="https://"
					helperText="This is a hint text to help the user."
					TrailingIcon={<FiHelpCircle />}
					disabled={args.disabled}
				/>
				<div className="mb-4" />
				<TextInput
					type="text"
					value={text1}
					handleChange={handleChange}
					label="Website"
					placeholder="example.com"
					leadingText="https://"
					error="This is an error message"
					TrailingIcon={<FiHelpCircle />}
					disabled={args.disabled}
				/>
			</div>
		</StoryLayout>
	);
}

export const Default = StoryTextInput.bind({});

Default.args = {
	variant: "primary",
	darkMode: false,
	disabled: false
};

Default.parameters = {
	controls: { exclude: ["LeadingIcon", "TrailingIcon", "leadingText"] }
}