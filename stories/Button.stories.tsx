import { Meta, Story } from "@storybook/react";
import React from "react";
import { FiArrowDownRight, FiStar } from "react-icons/fi";
import { Button, ButtonProps } from "../src";
import { Figma } from "../src/data";
import StoryLayout from "./StoryLayout";

const meta: Meta = {
	title: "Button",
	component: Button,
	parameters: {
		controls: { expanded: true },
		design: {
			type: "figma",
			url: Figma.Button
		}
	}
};

export default meta;

interface Props extends ButtonProps {
	darkMode: boolean;
}

const StoryButton: Story<Props> = (args) => (
	<StoryLayout {...args} className="space-y-2">
		<Button {...args}>Button CTA</Button>

		<Button {...args} LeadingIcon={<FiStar />}>
			Button CTA
		</Button>

		<Button {...args} TrailingIcon={<FiArrowDownRight />}>
			Button CTA
		</Button>

		<Button {...args} IconOnly={<FiArrowDownRight />} />
	</StoryLayout>
);

export const Default = StoryButton.bind({});

Default.args = {
	variant: "primary",
	size: "md",
	darkMode: false,
	disabled: false
};

Default.parameters = {
	controls: { exclude: ["LeadingIcon", "TrailingIcon", "IconOnly"] }
}