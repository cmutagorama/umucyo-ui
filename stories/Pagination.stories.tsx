import { Meta, Story } from "@storybook/react";
import React from "react";
import { Pagination } from "../src";
import { Figma } from "../src/data";
import StoryLayout from "./StoryLayout";

const meta: Meta = {
  title: "Pagination",
  parameters: {
    controls: { expanded: true },
    design: {
      type: "figma",
      url: Figma.Pagination,
    },
  },
};

export default meta;

interface Props {
  darkMode: boolean;
  isMobile: boolean;
}

const StoryPagination: Story<Props> = (args) => {
    const [page, setPage] = React.useState<number>(0);

    return (
        <StoryLayout {...args} className="">
            <Pagination isMobile={args.isMobile} page={page} setPage={setPage} totalPages={10} />
        </StoryLayout>
    )
};

export const Default = StoryPagination.bind({});

Default.args = {
  darkMode: false,
  isMobile: false
};
