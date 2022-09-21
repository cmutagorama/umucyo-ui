import { Meta, Story } from "@storybook/react";
import React from "react";
import { FiArrowDown, FiStar } from "react-icons/fi";
import { Badge, BadgeProps, images } from "../src";
import { Figma } from "../src/data";
import StoryLayout from "./StoryLayout";

const meta: Meta = {
	title: "Badge",
	component: Badge,
	parameters: {
		controls: { expanded: true },
		design: {
			type: "figma",
			url: Figma.Badge
		},
	},
};

export default meta;

interface Props extends BadgeProps {
	darkMode: boolean;
}

const StoryBadge: Story<Props> = (args) => (
	<StoryLayout {...args} className="inline-flex flex-col space-y-2">
		<Badge {...args} LeadingIcon={<FiStar />}>
			Label
		</Badge>
		
		<Badge {...args} LeadingIcon={<img src={images.RW} alt="RW" className="w-4 h-4" />}>
			Label
		</Badge>

		<Badge {...args} TrailingIcon={<FiArrowDown />}>
			Label
		</Badge>
	</StoryLayout>
);

export const Default = StoryBadge.bind({});

Default.args = {
	variant: "primary",
	size: "md",
	darkMode: false
};

Default.parameters = {
	controls: { exclude: ["LeadingIcon", "TrailingIcon", "className"] }
}