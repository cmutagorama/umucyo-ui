import { Meta, Story } from "@storybook/react";
import React from "react";
import { FiGrid, FiList } from "react-icons/fi";
import { ButtonGroupProps, ButtonGroup } from "../src";
import { Figma, options1, options2 } from "../src/data";
import StoryLayout from "./StoryLayout";

const meta: Meta = {
  title: "ButtonGroup",
  parameters: {
    controls: { expanded: true },
    design: {
      type: "figma",
      url: Figma.ButtonGroup,
    },
  },
};

export default meta;

interface Props extends ButtonGroupProps<string> {
  darkMode: boolean;
}

const StoryButtonGroup: Story<Props> = (args) => {
  const [activeItem1, setActiveItem1] = React.useState<string>(options1[1].value);
  const [activeItem2, setActiveItem2] = React.useState<string>(options1[2].value);

  type ViewOption = "list" | "grid";

  const [viewOption, setViewOption] = React.useState<ViewOption>("list");

  return (
    <StoryLayout {...args} className="space-y-4">
      <div>
        <ButtonGroup activeOption={activeItem1} setActiveOption={setActiveItem1} options={options1} />
      </div>
      <div>
        <ButtonGroup activeOption={activeItem2} setActiveOption={setActiveItem2} options={options2} />
      </div>
      <div>
        <ButtonGroup
          activeOption={viewOption}
          setActiveOption={setViewOption}
          options={[
            {
              content: <FiList size={20} />,
              value: "list",
            },
            {
              content: <FiGrid size={20} />,
              value: "grid",
            },
          ]}
        />
      </div>
    </StoryLayout>
  );
};
export const Default = StoryButtonGroup.bind({});

Default.args = {
  darkMode: false,
};
